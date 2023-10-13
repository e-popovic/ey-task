import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentPetFactsComponent } from './components/content/content-pet-facts/content-pet-facts.component';
import { ContentAnimalComponent } from './components/content/content-animal/content-animal.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryGridComponent } from './components/gallery/gallery-grid/gallery-grid.component';
import { GallerySliderComponent } from './components/gallery/gallery-slider/gallery-slider.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { FooterComponent } from './components/footer/footer.component';
import { FooterLinksGroupComponent } from './components/footer/footer-links-group/footer-links-group.component';
import { FooterLinksAllComponent } from './components/footer/footer-links-all/footer-links-all.component';
import { FooterFormComponent } from './components/footer/footer-form/footer-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    ContentPetFactsComponent,
    ContentAnimalComponent,
    GalleryComponent,
    GalleryGridComponent,
    GallerySliderComponent,
    FooterComponent,
    FooterLinksGroupComponent,
    FooterLinksAllComponent,
    FooterFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgImageSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
