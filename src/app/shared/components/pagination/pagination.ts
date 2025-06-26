import { Component, computed, model } from '@angular/core';
import { PaginatedElement } from "@app/shared/model";

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss'
})
export class Pagination {
  paginateInput = model.required<PaginatedElement>();
  pagesToShow = computed(() => {
    let current = this.paginateInput();
    let pagesNumbers = current.pagination.hasNext ?
      5 :
      5 - (Math.ceil(current.pagination.actualPage / 5) * 5 - current.pagination.totalPages);
    let fromPage = current.pagination.hasPrev ? Math.floor(current.pagination.actualPage / 5) * 5 + 1: 1;
    return Array.from({ length: pagesNumbers}, ((_, i) => fromPage + i));
  });

  onClickNextPagesSection() {
    const current = this.paginateInput();
    this.paginateInput.set({
      ...current,
      pagination: {
        ...current.pagination,
        actualPage: Math.ceil(current.pagination.actualPage / 5) * 5 + 1,
        hasPrev: true,
        hasNext: (Math.ceil(current.pagination.actualPage / 5) * 5 + 5) < current.pagination.totalPages,
      }
    });
  }

  onClickPrevPagesSection() {
    const current = this.paginateInput();
    this.paginateInput.set({
      ...current,
      pagination: {
        ...current.pagination,
        actualPage: Math.floor(current.pagination.actualPage / 5) * 5,
        hasPrev: (Math.floor(current.pagination.actualPage / 5) * 5 - 5) > 0,
        hasNext: true,
      }
    });
  }

  onClickSetActualPage(page: number) {
    const current = this.paginateInput();
    this.paginateInput.set({
      ...current,
      pagination: {
        ...current.pagination,
        actualPage: page
      }
    });
  }

}
