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
import { Router } from '@angular/router'
import { TodoService } from '../../Todo/Service/todo.service'

@Component({
  selector: 'create-component',
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
export class CreateComponent implements OnInit {
  constructor(
    private TodoService: TodoService,
    private router: Router,
  ) {}

  form: FormGroup
  title: string
  id: number
  description: string

  submitApplication() {
    const newPost = this.form.value
    this.TodoService.create({ ...newPost, completed: false }).subscribe(() =>
      this.router.navigate(['/']),
    )
  }

  ngOnInit(): void {
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
