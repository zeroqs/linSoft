import { CommonModule, NgIf } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { ActivatedRoute, Router } from '@angular/router'
import { TodoDto } from '../../Todo/Dto'
import { TodoService } from '../../Todo/Service/todo.service'

@Component({
  selector: 'edit-component',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgIf,
  ],
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css'],
})
export class EditComponent implements OnInit {
  constructor(
    private TodoService: TodoService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  todo: TodoDto
  form: FormGroup
  title: string
  id: number
  description: string

  submitApplication() {
    const newPost = this.form.value
    const editTodo = { ...this.todo, ...newPost }
    this.TodoService.changeTodo(this.todo.id, editTodo).subscribe(() => {
      this.router.navigate(['/'])
    })
  }

  ngOnInit(): void {
    const { todoId } = this.route.snapshot.params
    this.TodoService.getById(todoId).subscribe((todo) => {
      this.todo = todo
    })
    this.form = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    })
  }

  get titleMessage() {
    return this.form.get('title')
  }

  get descriptionMessage() {
    return this.form.get('description')
  }
}
