import { Component } from '@angular/core';
import { FormEntity } from 'src/modules/common/models/entity';

@Component({
  selector: 'ga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormEntity = {
    id: 'chores',
    label: 'Daily chores',
    description: 'Simple form for tracking of daily chores',
    children: [
      {
        id: 'chores.bed',
        label: 'Make up bed'
      },
      {
        id: 'chores.dishes',
        label: 'Dishes'
      },
      {
        id: 'chores.supermarket',
        label: 'Go to supermarket'
      },
      {
        id: 'chores.cooking',
        label: 'Cooking'
      },
      {
        id: 'chores.vacuum-cleaning',
        label: 'Vacuum-cleaning'
      },
      {
        id: 'chores.laundry-machine',
        label: 'Do the laundry'
      },
      {
        id: 'chores.laundry-fold-clothes',
        label: 'Fold clothes after laundry'
      }
    ]
  }

  submit() {

  }
}
