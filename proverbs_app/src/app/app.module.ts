import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatCardModule} from '@angular/material/card';
import { ProverbCardComponent } from './proverb-card/proverb-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProverbsComponent } from './proverbs/proverbs.component';


@NgModule({
  declarations: [
    AppComponent,
    ProverbCardComponent,
    PagenotfoundComponent,
    ProverbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
