import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from "src/app/Todo"

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title!: string;
  active!:boolean;
  @Output() addTodo: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAddClick(){
    if (this.title.length > 0) {
      const todo = {
      id: Math.random(),
      title: this.title,
      active:true
    }
    this.addTodo.emit(todo);
    this.title = ''
    }
    
  }
}
