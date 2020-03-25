import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {StoreModule} from '@ngrx/store';
import {AppComponent} from './app.component';
import {TodoReducer} from './reducers/todo.reducers';
import {TodoComponent} from './components/todo/todo.component';
import {AddComponent} from './components/add/add.component';
import {ShoppingReducer} from './reducers/shopping.reducers';
import {FormsModule} from '@angular/forms';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {HttpClientModule} from '@angular/common/http';
import {EffectsModule} from '@ngrx/effects';
import {ShoppingEffects} from './effects/shopping.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      {todos: TodoReducer, shopping: ShoppingReducer}
    ),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}),
    EffectsModule.forRoot([ShoppingEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
