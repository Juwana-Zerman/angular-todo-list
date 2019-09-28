import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.css']
})
export class InputButtonUnitComponent implements OnInit {
  // tslint:disable-next-line: no-output-native
  @Output() submit: EventEmitter<string> = new EventEmitter();

  title = 'Hello World';

  constructor() { }

  ngOnInit() {
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }
  // tslint:disable-next-line: member-ordering
  }


