import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormQuestionsComponent } from './form-questions/form-questions.component';

@NgModule({
  declarations: [
    AppComponent,
    FormQuestionsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
