import { Component, OnInit } from '@angular/core'
import { TodoDto } from '../Post/Dto'
import { TodoService } from '../Post/Service/todo.service'

@Component({
  selector: 'app-HomePage',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  todos: TodoDto[] = []
  filteredTodos: TodoDto[]
  selected = 'all'

  constructor(private TodoService: TodoService) {}

  changeSelectedValue(newItem: string) {
    this.selected = newItem
    switch (this.selected) {
      case 'done':
        this.filteredTodos = this.todos.filter((item) => item.completed)
        break
      case 'progress':
        this.filteredTodos = this.todos.filter((item) => !item.completed)
        break
      default:
        this.filteredTodos = this.todos
        break
    }
  }

  ngOnInit(): void {
    this.TodoService.getAll().subscribe((data) => {
      this.todos = data
      this.filteredTodos = data
      this.TodoService.updateTodos(data)
    })
    this.TodoService.posts$.subscribe((data) => (this.todos = data))
  }
}
