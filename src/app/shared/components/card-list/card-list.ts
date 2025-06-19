import { Component, input, signal } from '@angular/core';
import { GenericModel } from "@app/shared/model";

@Component({
  selector: 'app-card-list',
  imports: [],
  templateUrl: './card-list.html',
  styleUrl: './card-list.scss'
})
export class CardList {
  cardList = input.required<GenericModel[]>();
}
