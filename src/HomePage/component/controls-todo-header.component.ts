import { CommonModule } from '@angular/common'
import { Component, EventEmitter, Input, Output } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'

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
  @Output() newItemEvent = new EventEmitter<string>()
  @Input() selected = ''

  changeSelectValue() {
    this.newItemEvent.emit(this.selected)
  }
}
