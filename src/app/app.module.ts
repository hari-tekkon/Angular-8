import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {TodoReducer} from './reducers/todo.reducers';
import { TodoComponent } from './components/todo/todo.component';
import { AddComponent } from './components/add/add.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({todos: TodoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
