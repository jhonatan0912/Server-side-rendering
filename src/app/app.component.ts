import { HttpClient } from '@angular/common/http';
import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { TodoComponent } from './components/todo/todo.component';
import { Todo } from '@core/types';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private readonly _http = inject(HttpClient);
  private readonly _destroyRef = inject(DestroyRef);

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
}
