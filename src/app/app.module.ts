import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSelectModule} from '@angular/material/select';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { SearchPanelComponent } from './components/search-panel/search-panel.component';
import { CharsPanelComponent } from './components/chars-panel/chars-panel.component';
import { AppRoutingModule } from './app-router.module';
import { HomeComponent } from './pages/home/home.component';
import { CharPageComponent } from './pages/char-page/char-page.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginationPanelComponent } from './components/pagination-panel/pagination-panel.component';
import { LocationPageComponent } from './pages/location-page/location-page.component';
import { EpisodesPageComponent } from './pages/episodes-page/episodes-page.component';
import { EpisodePageComponent } from './pages/episode-page/episode-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPanelComponent,
    CharsPanelComponent,
    HomeComponent,
    CharPageComponent,
    ErrorPageComponent,
    PaginationPanelComponent,
    LocationPageComponent,
    EpisodesPageComponent,
    EpisodePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSelectModule,
    MatTabsModule,
    MatInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
