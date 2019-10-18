import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {

  todoInput: string;
  todos: Array<string> = ['Theoretische Informatik lernen!!'];
  removableIndex: number;

  constructor(private http: HttpClient) { }

  addNewTodo() {
    if (this.todoInput.length > 0) {
      this.todos.push(this.todoInput);
      this.todoInput = '';
    }
  }

  removeIndex() {
    const index = +this.removableIndex;
    if (index) {
      this.todos.splice(index - 1, 1);
      delete this.removableIndex;
    }
  }

/*  getTodos(): void {
    this.http.get<any>('https://meet-it.apps.eu01.cloud.schwarz/todos').subscribe(data => {
      this.todos = data;
    });
  }*/
}
