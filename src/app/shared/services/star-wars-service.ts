import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs'
import { Film } from '@app/shared'

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
    return imageUrl;
  }

  getFilms(): Observable<Film[]> {
    return this.http.get<Film[]>(`${this.baseUrl}/films`)
      .pipe(
        map(films => films.map(
          film => ({...film, url: this.madeUrlImage(film.url) })))
      );
  }

}
