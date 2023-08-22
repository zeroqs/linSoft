import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable, tap } from 'rxjs'
import { environment } from '../../environments/environment.development'
import { TodoDto } from '../Dto'

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  private todoSubject = new BehaviorSubject<TodoDto[]>([])
  posts$: Observable<TodoDto[]> = this.todoSubject.asObservable()

  updateTodos(todos: TodoDto[]) {
    this.todoSubject.next(todos)
  }

  changeCheckedTodo(id: string, todo: TodoDto, checked: boolean) {
    const url = `${environment.apiUrl}/${id}`
    return this.http.put(url, { ...todo, completed: checked }).pipe(
      tap((res) => {
        const resObj = res as TodoDto
        const todos = this.todoSubject.getValue()
        const index = todos.findIndex((item) => item.id === resObj.id)
        if (todos[index]) {
          todos[index] = resObj
        }
        this.updateTodos(todos)
      }),
    )
  }

  getAll() {
    return this.http.get<TodoDto[]>(environment.apiUrl)
  }

  create(post: TodoDto) {
    const objects = this.todoSubject.getValue()
    return this.http.post(environment.apiUrl, post).pipe(
      tap((res) => {
        const resObj = res as TodoDto
        objects.push(resObj)
        this.updateTodos(objects)
      }),
    )
  }

  delete(id: string) {
    const url = `${environment.apiUrl}/${id}`
    return this.http.delete(url).pipe(
      tap(() => {
        const updatedTodos = this.todoSubject
          .getValue()
          .filter((todo) => todo.id !== id)
        this.updateTodos(updatedTodos)
      }),
    )
  }
}
