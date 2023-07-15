import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: MoviesListComponent },
  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/review/:id', component: AddReviewComponent },
  { path: 'movies/:id', component: MovieComponent },
  { path: 'login', component: LoginComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
