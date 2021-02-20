import { Component } from '@angular/core';
import {select, Store} from '@ngrx/store';
import {addItem} from './store/items.actions';
import {Item} from './model/items';
import {AppState} from './app.module';
import {getItems} from './store/items.selectors';
import {Observable} from 'rxjs';

@Component({
  selector: 'ac-root',
  template: `
    <li *ngFor="let item of items">{{item.name}}</li>
    <button (click)="addItemHandler()">Add</button>
  `,
  styles: []
})
export class AppComponent {
  // items$: Observable<Item[]> = this.store.pipe(
  //   // select((state: AppState) =>state.items)
  //   select(getItems) // get from the AppStore only what is return from selector "getItems"
  // );
  items$: Observable<Item[]> = this.store.select(getItems); // same of prev instruction but more concise
  items: Item[];

  constructor(private store: Store) {
    this.items$
      .subscribe(val => this.items = val);
  }

  addItemHandler(): void{
    const formDate = {id: 123, name: 'pippo'};
    this.store.dispatch(addItem({item: formDate}));
  }
}
