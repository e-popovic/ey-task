import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentPetFactsComponent } from './components/content/content-pet-facts/content-pet-facts.component';
import { ContentAnimalComponent } from './components/content/content-animal/content-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentPetFactsComponent,
    ContentAnimalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
