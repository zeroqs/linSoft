import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CreateComponent } from '../CreateTodoPage/component/component.component'
import { CreateTodoPageComponent } from '../CreateTodoPage/create-todo-page.component'
import { EditPageComponent } from '../EditPage/edit-page.component'
import { HeaderComponent } from '../Header/header.component'
import { ControlsTodoHeaderComponent } from '../HomePage/component/controls-todo-header.component'
import { HomePageComponent } from '../HomePage/home-page.component'
import { NotFoundPageComponent } from '../NotFoundPage/not-found-page.component'
import { TodoComponent } from '../Todo/component/component.component'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    EditPageComponent,
    NotFoundPageComponent,
    HomePageComponent,
    CreateTodoPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TodoComponent,
    CreateComponent,
    ControlsTodoHeaderComponent,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
