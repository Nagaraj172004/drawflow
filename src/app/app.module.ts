import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DrawflowComponent } from './drawflow/drawflow.component';
import { SharedService } from './shared.service';
import { SearchInputComponent } from './searchinput.component';
import { UserListComponent } from './userlist.component';


@NgModule({
  declarations: [
    AppComponent,
    DrawflowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
