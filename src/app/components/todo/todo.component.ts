import { Component, OnInit, input } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
