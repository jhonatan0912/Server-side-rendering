import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Todo } from '@core/types';
import { TodoComponent } from '../../components/todo/todo.component';
import { Router } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  private readonly _http = inject(HttpClient);
  private readonly _destroyRef = inject(DestroyRef);
  private readonly _router = inject(Router);
  private readonly _meta = inject(Meta);
  private readonly _title = inject(Title);

  baseUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  todos = signal<Todo[]>([]);

  ngOnInit(): void {
    this._http.get(this.baseUrl)
      .pipe(
        takeUntilDestroyed(this._destroyRef)
      ).subscribe({
        next: (todos: any) => {
          this.todos.set(todos);
        }
      });
  }

  onDetail(todo: Todo): void {
    this._router.navigateByUrl(`todo/${todo.id}`);
    this._title.setTitle(todo.title);
    this._meta.updateTag({ name: 'description', content: todo.title });

  }
}