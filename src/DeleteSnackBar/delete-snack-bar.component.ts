import { CommonModule } from '@angular/common'
import { Component, inject } from '@angular/core'
import { MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar'

@Component({
  selector: 'app-DeleteSnackBar',
  standalone: true,
  imports: [CommonModule, MatSnackBarModule],
  templateUrl: './delete-snack-bar.component.html',
  styleUrls: ['./delete-snack-bar.component.css'],
})
export class DeleteSnackBarComponent {
  snackBarRef = inject(MatSnackBarRef)
}
