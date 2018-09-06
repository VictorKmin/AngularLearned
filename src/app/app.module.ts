import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CardsComponent} from "./cards/cards.component";
import {UsersComponent} from "./users/users.component";
import {HttpModule} from "@angular/http";
import {HoverDirective} from "./hover.directive";
import {FormsModule} from "@angular/forms";
import {SearchPipe} from "./search.pipe";
import { OmePageComponent } from './ome-page/ome-page.component';
import { SetupPageComponent } from './setup-page/setup-page.component';
import {RouterModule} from "@angular/router";

const routes = [
  {path: '', component: OmePageComponent},
  {path: 'setup', component: SetupPageComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    UsersComponent,
    HoverDirective,
    SearchPipe,
    OmePageComponent,
    SetupPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
