import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Todo } from '../../models/todo';
import { TodoService } from '../../providers/todo-service';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
  providers: [TodoService]
})
export class Todos {
  public todos: Todo[];

  constructor(public navCtrl: NavController, public todoService: TodoService) {
    this.load();
  }

  load() {
    this.todoService.load()
    .subscribe((data) => { this.todos = data });
  }

  add(todo: Todo) {
    if (todo.title.length === 0) return;
    this.todoService.add(todo)
    .subscribe((data) => { this.todos.push(data) });
  }

  delete(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.todoService.delete(todo)
    .subscribe((data) => { this.todos.splice(i, 1)});
  }

  toggleCompleted(todo: Todo) {
    todo.completed = !todo.completed;
    this.todoService.update(todo)
    .subscribe((data) => { todo = data });
  }

  ionViewDidLoad() {
    console.log('Hello Todos Page');
  }

}
