import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Todo } from '../models/todo';

const API = 'http://localhost:5000';
const HEAD = new Headers({'Content-Type': 'application/json'});

@Injectable()
export class TodoService {

  constructor(public http: Http) {
    console.log('Hello TodoService Provider');
  }

  load(): Observable<Todo[]> {
    return this.http.get(`${API}/todos`)
    .map(res => res.json())
    .catch(this.handleError);
  }

  add(todo: Todo): Observable<Todo> {
    let body = JSON.stringify(todo);

    return this.http.post(`${API}/todos`, body, {headers: HEAD})
    .map(res => res.json())
    .catch(this.handleError);
  }

  update(todo: Todo) {
    let body = JSON.stringify(todo);

    return this.http.patch(`${API}/todos/${todo._id}`, body, {headers: HEAD})
    .map(() => todo)
    .catch(this.handleError);
  }

  delete(todo: Todo) {
    return this.http.delete(`${API}/todos/${todo._id}`, HEAD)
    .catch(this.handleError);
  }

  private handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}
