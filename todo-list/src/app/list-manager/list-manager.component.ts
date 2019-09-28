import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  todoList: TodoItem[] = [];

constructor() { }

ngOnInit() {
  }
addItem(title: string) {
  this.todoList.push({ title });
}
}
