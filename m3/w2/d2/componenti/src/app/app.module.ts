import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { Input2Component } from './components/input2/input2.component';
import { FormsModule } from '@angular/forms';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ToggleComponent } from './components/toggle/toggle.component';
import { UsersComponent } from './pages/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ButtonComponent,
    InputComponent,
    Input2Component,
    NgForComponent,
    SwitchComponent,
    ToggleComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
