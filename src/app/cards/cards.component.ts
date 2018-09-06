import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: '../cards/cards.component.html',
  styleUrls: ['../cards/cards.component.css']
})
export class CardsComponent {
  @Input() card
}
