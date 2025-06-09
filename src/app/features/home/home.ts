import { Component, inject, Signal } from '@angular/core';
import { StarWarsService } from '@app/shared'
import { toSignal } from '@angular/core/rxjs-interop'
import { Film } from '@app/shared'

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  service = inject(StarWarsService);
  films: Signal<Film[] | undefined> = toSignal(this.service.getFilms());
}
