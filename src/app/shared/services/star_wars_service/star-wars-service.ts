import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private baseUrl = "https://swapi.info/api";
  private http = inject(HttpClient);

  constructor() { };

  private madeUrlImage(url: string) {
    let arrayUtils = url.slice(23).split("/");
    arrayUtils[1] = `${arrayUtils[0][0]}${arrayUtils[1]}`;
    const imageUrl = `https://github.com/matulai/StarWars-Data/blob/master/src/img/${arrayUtils[0]}/${arrayUtils[1]}.jpg?raw=true`
    console.log(url);
    console.log(imageUrl);
    return imageUrl;
  }

  getAll<T>(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${endpoint}`).pipe(
      map(items =>
        items.map(item => ({ ...item, url: this.madeUrlImage((item as any).url) }))
      )
    );
  }

  getById<T>(endpoint: string, id: number): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${endpoint}/${id}`).pipe(
      map(item => ({ ...item, url: this.madeUrlImage((item as any).url) }))
    );
  }
}
