import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonList,
  IonInput,
  IonButton,
  IonLabel,
  IonCheckbox
} from '@ionic/angular/standalone';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

@Component({
  selector: 'app-todo',
  standalone: true,
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonList,
    IonInput,
    IonButton,
    IonLabel,
    IonCheckbox
  ]
})
export class TodoPage {
  todos: Todo[] = [
    { id: 1, text: 'Zkusit nový todo list', done: false }
  ];

  newText = '';

  add() {
    const text = this.newText.trim();
    if (!text) return;

    const id = this.todos.length
      ? Math.max(...this.todos.map(t => t.id)) + 1
      : 1;

    this.todos.push({ id, text, done: false });
    this.newText = '';
  }

  remove(index: number) {
    this.todos.splice(index, 1);
  }

  completedCount() {
    return this.todos.filter(t => t.done).length;
  }

  clearCompleted() {
    this.todos = this.todos.filter(t => !t.done);
  }
}
