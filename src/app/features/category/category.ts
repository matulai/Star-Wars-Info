import { Component, inject, Signal, signal, computed } from '@angular/core';
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
  paginatedList = signal<PaginatedElement>({list: [], pagination: {actualPage: 1, hasNext: false,hasPrev: false,totalPages: 0, size: 0}});
  actualListPaginate: Signal<GenericModel[]> = computed(() => {
    return this.madeListFromPagination(this.paginatedList());
  });

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(data => {
      this.pageTitle = data['title'];
      this.service.getAll(this.pageTitle).subscribe(list => {
        this.paginatedList.set(this.madePaginationFromList(list as GenericModel[], 10))
      });
    });
  }

  madePaginationFromList(list: GenericModel[], size: number): PaginatedElement {
    let pages = Math.ceil(list.length / size);
    return {
      list: list,
      pagination:{
        actualPage: 1,
        hasNext: pages > 5,
        hasPrev: false,
        totalPages: pages,
        size: size
      }
    }
  }

  madeListFromPagination(paginatedElement: PaginatedElement): GenericModel[] {
    let list = paginatedElement.list;
    let fromIndex = ( (paginatedElement.pagination.actualPage - 1) * paginatedElement.pagination.size );
    let toIndex = (paginatedElement.pagination.actualPage * paginatedElement.pagination.size);
    return list.slice(fromIndex, toIndex);
  }
}
