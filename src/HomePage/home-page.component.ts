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
  selected = 'all'

  constructor(private TodoService: TodoService) {}

  changeSelectedValue(newItem: string) {
    this.selected = newItem
    console.log(this.selected)
  }

  ngOnInit(): void {
    this.TodoService.getAll().subscribe((data) => {
      this.todos = data
      this.TodoService.updateTodos(data)
    })
    this.TodoService.posts$.subscribe((data) => (this.todos = data))
  }
}
