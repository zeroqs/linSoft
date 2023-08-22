import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import { Router } from '@angular/router'

@Component({
  selector: 'controls-todo-component',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './controls-todo-header.component.html',
  styleUrls: ['./controls-todo-header.component.css'],
})
export class ControlsTodoHeaderComponent {
  constructor(private router: Router) {}

  @Output() newItemEvent = new EventEmitter<string>()
  @Input() selected = ''

  changeSelectValue() {
    this.newItemEvent.emit(this.selected)
  }

  navigateToCreateTodo() {
    this.router.navigate(['/create'])
  }
}
