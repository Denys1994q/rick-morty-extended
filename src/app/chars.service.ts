import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Info {
  count: number,
  next: null | string,
  pages: number,
  prev: null | number
}

export interface Response<t> {
    info: Info,
    results: t[]
  }
  
export interface Char {
      id: number,
      name: string,
      status: string,
      species: string,
      type: string,
      gender: string,
      image: string,
      origin: any,
      location: Object,
      episode: [],
      url: string,
      created: string
}

export interface Location {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: string[]
}

export interface Episode {
  id: number,
  name: string,
  air_date: Date,
  episode: string,
  characters: string[]
}

@Injectable({ providedIn: 'root' })

export class CharsService {
    constructor(private http: HttpClient) { }

    getChars(searchValue: string, status: string, gender: string, species: string, page: number): Observable<Response<Char>> {
        return this.http.get<Response<Char>>(`https://rickandmortyapi.com/api/character/?name=${searchValue}&status=${status}&gender=${gender}&species=${species}&page=${page}`)
        ;
    }

    getLocations(page: number): Observable<Response<Location>> {
      return this.http.get<Response<Location>>(`https://rickandmortyapi.com/api/location?page=${page}`)
      ;
    }

    getEpisodes(searchValue: string, page: number): Observable<Response<Episode>> {
      return this.http.get<Response<Episode>>(`https://rickandmortyapi.com/api/episode?name=${searchValue}&page=${page}`)
      ;
    }

    getOneEpisode(id: number) {
      return this.http.get<Episode>(`https://rickandmortyapi.com/api/episode/${id}`)
    }
}
