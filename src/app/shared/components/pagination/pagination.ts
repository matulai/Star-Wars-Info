import { Component, input, signal, effect, model } from '@angular/core';
import { GenericModel, PaginatedElement } from "@app/shared/model";

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss'
})
export class Pagination {
  paginateInput = model.required<PaginatedElement>();

  onClickNextPage() {
    this.paginateInput.update(
      pag =>
        (
          {...pag, actualPage: pag.pagination.actualPage + 1, hasPrev: true, hasNext: pag.pagination.actualPage < pag.pagination.totalPages}
        )
      );
  }

  onClickPrevPage() {
    this.paginateInput.update(
      pag =>
        (
          {...pag, actualPage: pag.pagination.actualPage - 1, hasPrev: pag.pagination.actualPage > 1, hasNext: true}
        )
      );
  }

  havePageFor(pageNumber: number): boolean {
    return (this.paginateInput().pagination.actualPage + pageNumber) <= this.paginateInput().pagination.totalPages;
  }

}
