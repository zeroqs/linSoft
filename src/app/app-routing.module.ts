import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { EditPageComponent } from '../EditPage/edit-page.component'
import { HomePageComponent } from '../HomePage/home-page.component'
import { NotFoundPageComponent } from '../NotFoundPage/not-found-page.component'

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'edit', component: EditPageComponent },
  { path: '**', component: NotFoundPageComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
