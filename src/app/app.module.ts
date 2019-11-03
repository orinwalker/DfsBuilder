import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerpoolComponent } from './components/playerpool/playerpool.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { ContestComponent } from './components/contest/contest.component';
import { UserlineupComponent } from './components/userlineup/userlineup.component';
import { UserComponent } from './components/user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    PlayerpoolComponent,
    LobbyComponent,
    ContestComponent,
    UserlineupComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
