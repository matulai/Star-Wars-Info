import { GenericModel } from "@app/shared/model";
import { Component, Signal, inject, signal } from '@angular/core';
import { StarWarsService } from '@app/shared/services'
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-category-element',
  imports: [],
  templateUrl: './category-element.html',
  styleUrl: './category-element.scss'
})
export class CategoryElement {
  pageTitle!: 'films' | 'people' | 'planets' | 'species' | 'starships' | 'vehicles';
  categoryElementId = signal("")
  categoryElement!: Signal<GenericModel | undefined>;

  private service = inject(StarWarsService);

  constructor(private route: ActivatedRoute) {
    // Devuelve un observer para que asi sea dinamico, osea al pasarle otro valor de id
    // al ser reactivo el observer esto genera que la pagina cambie en consecuencia y no
    // sea siempre lo mismo una vez cargada la app.
    this.route.params.subscribe((params) => {
      this.categoryElementId.set(params['id']);
    });

    this.route.data.subscribe(data => {
      this.pageTitle = data['title'];
      this.categoryElement = toSignal(this.service.getById(this.pageTitle, this.categoryElementId()));
    });
  }

  cardCaracteristics() {
    const element = this.categoryElement?.();
    if (element) {
      const { name, url, imageUrl, ...rest } = element;
      return Object.entries(rest);
    } else {
      return undefined;
    }
  }
}
