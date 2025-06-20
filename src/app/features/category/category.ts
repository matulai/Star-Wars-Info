import { Component, inject, Signal } from '@angular/core';
import { StarWarsService } from '@app/shared/services'
import { ActivatedRoute } from '@angular/router';
import { GenericModel } from "@app/shared/model";
import { CardList } from "@app/shared/components";
import { toSignal } from '@angular/core/rxjs-interop'

@Component({
  selector: 'app-category',
  imports: [CardList],
  templateUrl: './category.html',
  styleUrl: './category.scss'
})
export class Category {
  pageTitle: string = '';
  service = inject(StarWarsService);
  genericModels!: Signal<GenericModel[] | undefined>;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.pageTitle = data['title'];
      this.genericModels = toSignal(this.service.getAll(this.pageTitle));
    });
  }
}
