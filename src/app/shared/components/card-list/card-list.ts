import { Component, input, inject } from '@angular/core';
import { GenericModel } from "@app/shared/model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-list',
  imports: [],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss'
})
export class CardList {
  cardList = input.required<GenericModel[]>();
  private router = inject(Router);

  handleOnClickReadMore(url:string) {
    let slicedUrl = url.slice(23).split("/");
    this.router.navigateByUrl(`${slicedUrl[0]}/${slicedUrl[1]}`)
  }
}
