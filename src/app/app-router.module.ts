import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { CharPageComponent } from "./pages/char-page/char-page.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { LocationPageComponent } from "./pages/location-page/location-page.component";
import { EpisodesPageComponent } from "./pages/episodes-page/episodes-page.component";
import { EpisodePageComponent } from "./pages/episode-page/episode-page.component";

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'chars/:id', component: CharPageComponent},
    {path: 'location', component: LocationPageComponent},
    {path: 'episodes', component: EpisodesPageComponent},
    {path: 'episodes/:id', component: EpisodePageComponent},
    {path: 'error', component: ErrorPageComponent},
    {path: '**', redirectTo: '/error'},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
     
}