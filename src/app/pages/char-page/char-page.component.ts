import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'
import { Char } from 'src/app/chars.service';
import {HttpClient} from '@angular/common/http'
import { Location } from '@angular/common'

@Component({
  selector: 'app-char-page',
  templateUrl: './char-page.component.html',
  styleUrls: ['./char-page.component.sass']
})
export class CharPageComponent implements OnInit {

  char: Char | null= null

  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private location: Location) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.http.get<Char>(`https://rickandmortyapi.com/api/character/${params['id']}`).subscribe((response) => {
        this.char = response
      })
    })
  }

  back(): void {
    this.location.back()
  }
}
