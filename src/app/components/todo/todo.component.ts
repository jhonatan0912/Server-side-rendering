import { Component, OnInit, input, output } from '@angular/core';
import { Todo } from '@core/types';

@Component({
  selector: 'todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  todo = input.required<Todo>();

  onDetail = output<Todo>();

  constructor() { }

  ngOnInit() {
  }

}
