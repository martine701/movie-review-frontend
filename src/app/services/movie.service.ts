import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Movie from '../interfaces/movie';
import Movies from '../interfaces/movies';

@Injectable()
export class MovieDataService{
    constructor(private _http: HttpClient) { }
    
    find(query: string, by = 'title', page = 0): Observable<Movies>{
        return this._http.get<Movies>(`http://localhost:5000/api/v1/movies?${by}=${query}&page=${page}`);

    }

    get(id: string): Observable<Movie>{
        return this._http.get<Movie>(`http://localhost:5000/api/v1/movies/id/${id}`)
    }    

    createReview(data: any) {
        return this._http.post<any>('http://localhost:5000/api/v1/movies/review', data);
    }

    updateReview(data: any) {
        return this._http.put('http://localhost:5000/api/v1/movies/review', data);

    }

    deleteReview(review_id: string, user_id: string) {
        const options = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
            body: { review_id: review_id, user_id: user_id }
        };
        return this._http.delete('http://localhost:5000/api/v1/movies/review', options);
    }

    getRatings(): Observable<string[]>{
        return this._http.get<string[]>('http://localhost:5000/api/v1/movies/ratings');
        
    }
}