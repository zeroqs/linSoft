import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { TodoDto } from '../Dto'
import { TodoService } from '../Service/todo.service'

@Component({
  selector: 'post-component',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
})
export class PostComponent implements OnInit {
  constructor(private TodoService: TodoService) {}

  checked: boolean

  @Input() todo: TodoDto

  delete() {
    this.TodoService.delete(this.todo.id).subscribe()
  }

  ngOnInit(): void {
    this.checked = this.todo.completed
  }

  handlerCheck() {
    this.checked = !this.checked
    this.TodoService.changeCheckedTodo(
      this.todo.id,
      this.todo,
      this.checked,
    ).subscribe()
  }
}
