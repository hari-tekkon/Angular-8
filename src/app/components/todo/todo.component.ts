import {Component, OnInit} from '@angular/core';
import {Todo} from '../../models/todo';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {TodoRemove} from '../../actions/todo.actions';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: any;

  constructor(private store: Store<{ todos: Todo[] }>) { //todos comming from appmodule.ts
    store.pipe(select('todos')).subscribe(values => {
      // console.log(values);
      this.todos = values;
    });
  }

  remove(index: number) {
    this.store.dispatch(new TodoRemove(index));
  }

  ngOnInit(): void {
  }

}
