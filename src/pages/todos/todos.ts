import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Todo } from '../../models/todo';
import { TodoService } from '../../providers/todo-service';

@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
  providers: [TodoService]
})
export class Todos {
  public todos: Todo[];

  constructor(public navCtrl: NavController, public todoService: TodoService, public alertCtrl: AlertController) {
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

  edit(todo: Todo) {
    // TODO
    let alert = this.alertCtrl.create();
    alert.setTitle('');

    alert.addInput({
      type: 'text';
      label: 'Title',
      value: todo.title
    });

    alert.addInput({
      type: 'text';
      label: 'Tags',
      value: todo.tags.join(", ");
    });

    alert.addButton({
      text: 'OK',
      handler: data => {
        todo.title = data['0'];
        todo.tags = data['1']
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);

        this.todoService.update(todo)
        .subscribe((data) => { todo = data });
      }
    });

    alert.addButton('Cancel');

    alert.present();
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

  viewTag(tag: string) {
    // TODO
  }

  ionViewDidLoad() {
    console.log('Hello Todos Page');
  }

}
