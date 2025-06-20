import { GenericModel, Film, People, Planet, Specie, Starship, Vehicle } from "@app/shared/model";
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
    const imageUrl = `https://github.com/matulai/StarWars-Data/blob/master/src/img/${arrayUtils[0]}/${arrayUtils[1]}.jpg?raw=true`;
    return imageUrl;
  }

  getAll<T>(endpoint: string): Observable<T[]> {
    return this.http.get<T[]>(`${this.baseUrl}/${endpoint}`).pipe(
      map(items =>
        items.map(item => ({ ...item, imageUrl: this.madeUrlImage((item as any).url) }))
      )
    );
  }

  getById<T>(endpoint: 'films' | 'people' | 'planet' | 'specie' | 'starship' | 'vehicle', id: string): Observable<GenericModel> {
    return this.http.get<any>(`${this.baseUrl}/${endpoint}/${id}`).pipe(
      map(item => this.mappers[endpoint](item))
    );
  }

  mappers = {
    films: (item: Film): Film => ({
      title: item.title,
      name: item.name,
      episode_id: item.episode_id,
      opening_crawl: item.opening_crawl,
      release_date: item.release_date,
      imageUrl: this.madeUrlImage(item.url),
      url: item.url,
    }),
    people: (item: People): People => ({
      name: item.name,
      hair_color: item.hair_color,
      eye_color: item.eye_color,
      skin_color: item.skin_color,
      height: item.height,
      mass: item.mass,
      birth_year: item.birth_year,
      gender: item.gender,
      homeworld: item.homeworld,
      imageUrl: this.madeUrlImage(item.url),
      url: item.url,
    }),
    planet: (item: Planet): Planet => ({
      name: item.name,
      diameter: item.diameter,
      rotation_period: item.rotation_period,
      orbital_period: item.orbital_period,
      gravity: item.gravity,
      population: item.population,
      climate: item.climate,
      terrain: item.terrain,
      surface_water: item.surface_water,
      imageUrl: this.madeUrlImage(item.url),
      url: item.url,
    }),
    specie: (item: Specie): Specie => ({
      name: item.name,
      classification: item.classification,
      designation: item.designation,
      average_height: item.average_height,
      average_lifespan: item.average_lifespan,
      eye_colors: item.eye_colors,
      hair_colors: item.hair_colors,
      skin_colors: item.skin_colors,
      language: item.language,
      homeworld: item.homeworld,
      imageUrl: this.madeUrlImage(item.url),
      url: item.url,
    }),
    starship: (item: Starship): Starship => ({
      name: item.name,
      model: item.model,
      starship_class: item.starship_class,
      manufacturer: item.manufacturer,
      const_in_credits: item.const_in_credits,
      length: item.length,
      crew: item.crew,
      passengers: item.passengers,
      max_atmospheting_speed: item.max_atmospheting_speed,
      hyperdrive_rating: item.hyperdrive_rating,
      MGLT: item.MGLT,
      cargo_capacity: item.cargo_capacity,
      consumables: item.consumables,
      imageUrl: this.madeUrlImage(item.url),
      url: item.url,
    }),
    vehicle: (item: Vehicle): Vehicle => ({
      name: item.name,
      model: item.model,
      vehicle_class: item.vehicle_class,
      manufacturer: item.manufacturer,
      length: item.length,
      cost_in_credits: item.cost_in_credits,
      crew: item.crew,
      passengers: item.passengers,
      max_atmosphering_speed: item.max_atmosphering_speed,
      cargo_capacity: item.cargo_capacity,
      consumables: item.consumables,
      imageUrl: this.madeUrlImage(item.url),
      url: item.url,
    })
  };
}
