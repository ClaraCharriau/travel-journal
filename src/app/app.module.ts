import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './general/header/header.component';
import { FooterComponent } from './general/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { PostComponent } from './pages/post/post.component';
import { LastPostComponent } from './home/last-post/last-post.component';
import { OtherPostsComponent } from './home/other-posts/other-posts.component';
import { TextContainerComponent } from './post/text-container/text-container.component';
import { AdviceNotesComponent } from './post/advice-notes/advice-notes.component';
import { PhotoGalleryComponent } from './post/photo-gallery/photo-gallery.component';
import { TravelDetailsComponent } from './post/travel-details/travel-details.component';
import { ReturnBtnComponent } from './general/return-btn/return-btn.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PostComponent,
    LastPostComponent,
    OtherPostsComponent,
    TextContainerComponent,
    AdviceNotesComponent,
    PhotoGalleryComponent,
    TravelDetailsComponent,
    ReturnBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    DatePipe,
    HttpClient,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
