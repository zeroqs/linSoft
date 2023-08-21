import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CreateComponent } from '../CreateTodoForm/component/component.component'
import { EditPageComponent } from '../EditPage/edit-page.component'
import { HomePageComponent } from '../HomePage/home-page.component'
import { NotFoundPageComponent } from '../NotFoundPage/not-found-page.component'
import { PostComponent } from '../Post/component/component.component'
import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    EditPageComponent,
    NotFoundPageComponent,
    HomePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PostComponent,
    CreateComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
