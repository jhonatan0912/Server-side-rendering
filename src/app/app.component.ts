import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private http = inject(HttpClient);
  todos = signal<Todo[]>([]);

  ngOnInit(): void {
    this.http.get('https://jsonplaceholder.typicode.com/todos')
      .subscribe((todos: any) => {
        this.todos.set(todos);
      });
  }
}
