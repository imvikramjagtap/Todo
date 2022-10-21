import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input()
  todo: Todo = new Todo;

  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() changeActive: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onDelClick(todo: Todo){
    this.todoDelete.emit(todo)
    console.log("ghiii")
  }

  changeHandler(todo: Todo){
    this.changeActive.emit(todo)
  }

}
