import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListpostsComponent } from './listposts/listposts.component';
import { CreatepostComponent } from './createpost/createpost.component';
import { EditpostComponent } from './editpost/editpost.component';

@NgModule({
  declarations: [
    AppComponent,
    ListpostsComponent,
    CreatepostComponent,
    EditpostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
