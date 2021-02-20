import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {addItem, deleteItem} from './store/items.actions';
import {Item} from './model/items';
import {AppState} from './app.module';
import {getItems} from './store/items.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'ac-root',
  template: `
    <form #f="ngForm" (submit)="addItemHandler(f.value)">
      <input type="text" name="name" [ngModel]>
    </form>
    <li *ngFor="let item of (items$ | async)">
      {{item.name}} - {{item.id}}
       <button (click)="deleteItemHandler(item.id)">delete</button>
    </li>
  `,
  styles: []
})
export class AppComponent {
  // items$: Observable<Item[]> = this.store.pipe(
  //   // select((state: AppState) =>state.items)
  //   select(getItems) // get from the AppStore only what is return from selector "getItems"
  // );
  items$: Observable<Item[]> = this.store.select(getItems); // same of prev instruction but more concise

  constructor(private store: Store) {
  }

  addItemHandler(item: Item): void{
    const formDate = {id: Date.now(), ...item};
    this.store.dispatch(addItem({item: formDate}));
  }

  deleteItemHandler(id: number): void{
    this.store.dispatch(deleteItem({id}));
  }
}
