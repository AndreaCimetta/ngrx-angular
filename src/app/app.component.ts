import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {addItem} from "./store/items.actions";

@Component({
  selector: 'ac-root',
  template: `
    <h1>hellow</h1>
  `,
  styles: []
})
export class AppComponent {

  constructor(private store:Store) {
    const formDate = {id: 123, name: 'pippo'};
    store.dispatch(addItem({item: formDate}));
  }
}
