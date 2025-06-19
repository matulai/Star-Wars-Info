import { Component, inject, Signal } from '@angular/core';
import { StarWarsService } from '@app/shared/services'
import { CardList } from "@app/shared/components";
import { toSignal } from '@angular/core/rxjs-interop'
import { Film } from "@app/shared/model";

@Component({
  selector: 'app-films',
  imports: [CardList],
  templateUrl: './films.html',
  styleUrl: './films.scss'
})
export class Films {
  service = inject(StarWarsService);
  films: Signal<Film[] | undefined> = toSignal(this.service.getAll("films"));

  filmsMappedToName() {
    return this.films()?.map(film => ({ ...film, name: film.title })) ?? [];
  }
}
