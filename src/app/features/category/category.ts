import { Component, inject, Signal, signal } from '@angular/core';
import { GenericModel, PaginatedElement } from "@app/shared/model";
import { CardList, Pagination } from "@app/shared/components";
import { StarWarsService } from '@app/shared/services'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [CardList, Pagination],
  templateUrl: './category.html',
  styleUrl: './category.scss'
})
export class Category {
  pageTitle: string = '';
  service = inject(StarWarsService);
  paginatedList!: Signal<PaginatedElement | undefined>;


  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.pageTitle = data['title'];
      this.service.getAll(this.pageTitle).subscribe(list => {
        this.paginatedList = signal(this.madePaginationFromList(list as GenericModel[], 10));
      });
    });
  }

  madePaginationFromList(list: GenericModel[], size: number): PaginatedElement {
    let pages = list.length / size;
    return {
      list: list,
      pagination:{
        actualPage: 1,
        hasNext: pages > 1,
        hasPrev: false,
        totalPages: pages,
        size: size
      }
    }
  }
}
