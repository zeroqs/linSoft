import { CommonModule } from '@angular/common'
import { Component, Input, OnInit } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar'
import { Router } from '@angular/router'
import { DeleteSnackBarComponent } from '../../DeleteSnackBar/delete-snack-bar.component'
import { TodoDto } from '../Dto'
import { TodoService } from '../Service/todo.service'

@Component({
  selector: 'todo-component',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSnackBarModule,
  ],
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
})
export class TodoComponent implements OnInit {
  constructor(
    private TodoService: TodoService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) {}

  durationInSeconds = 2

  checked: boolean

  @Input() todo: TodoDto

  delete() {
    this.TodoService.delete(this.todo.id).subscribe(() => this.openSnackBar())
  }

  openSnackBar() {
    this._snackBar.openFromComponent(DeleteSnackBarComponent, {
      duration: this.durationInSeconds * 1000,
    })
  }

  ngOnInit(): void {
    this.checked = this.todo.completed
  }

  routeToEdit() {
    this.router.navigate([`/edit/${this.todo.id}`])
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
