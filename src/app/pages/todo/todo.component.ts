import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '@core/types';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _http = inject(HttpClient);


  todo = signal<Todo>({ id: 0, completed: false, title: '', userId: 0 });


  ngOnInit() {
    this._activatedRoute.params
      .subscribe(({ id }) => {
        this._http.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
          .subscribe({
            next: (res: any) => {
              this.todo.set(res);
            }
          });
      });
  }

}
