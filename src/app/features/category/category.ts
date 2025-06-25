import { Component, inject, Signal, signal, computed, WritableSignal } from '@angular/core';
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
  paginatedList: WritableSignal<PaginatedElement | undefined> = signal<PaginatedElement | undefined>(undefined);
  actualListPaginate: Signal<GenericModel[]> = computed(() => {
    const paginated = this.paginatedList();
    console.log(paginated);
    return paginated ? this.madeListFromPagination(paginated) : [];
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
    let pages = Math.floor(list.length / size);
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

  madeListFromPagination(paginatedElement: PaginatedElement): GenericModel[] {
    let list = paginatedElement.list;
    let fromIndex = ( (paginatedElement.pagination.actualPage - 1) * paginatedElement.pagination.size );
    let toIndex = (paginatedElement.pagination.actualPage * paginatedElement.pagination.size);
    return list.slice(fromIndex, toIndex);
  }
}
