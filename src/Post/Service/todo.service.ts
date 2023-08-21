import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
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

  getAll() {
    return this.http.get<TodoDto[]>(environment.apiUrl)
  }

  create(post: TodoDto) {
    const objects = this.todoSubject.getValue()
    return this.http.post(environment.apiUrl, post).subscribe((res) => {
      const resObj = res as TodoDto
      objects.push(resObj)
      this.updateTodos(objects)
    })
  }

  delete(id: number) {
    const url = `${environment.apiUrl}/${id}`
    this.http.delete(url).subscribe((res) => {
      const resObj = res as TodoDto
      const objects = this.todoSubject.getValue()
      this.updateTodos(objects.filter((todo) => todo.id !== resObj.id))
    })
  }
}
