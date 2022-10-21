import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  localTodos: string | null;
  todos: Todo[];

  constructor() {
    this.localTodos = localStorage.getItem("todos");
    if (this.localTodos === null) {
     this.todos = []; 
    } else {
      this.todos = JSON.parse(this.localTodos)
    }
    this.todos.sort((a, b) => Number(b.active) - Number(a.active));
  }

  ngOnInit(): void {
  }

  deleteTodo(todo: Todo) {
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos))
    this.todos.sort((a, b) => Number(b.active) - Number(a.active));
  }
  addTodo(todo: Todo) {
    console.log(todo);
    this.todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(this.todos))
    this.todos.sort((a, b) => Number(b.active) - Number(a.active));
  }
  changeActiveTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos))
    this.todos.sort((a, b) => Number(b.active) - Number(a.active));
  }
}
