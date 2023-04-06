import { Component, OnInit } from '@angular/core';
import { Char, Episode } from 'src/app/chars.service';
import { CharsService } from 'src/app/chars.service';
import {ActivatedRoute, Params} from '@angular/router'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.sass']
})
export class EpisodePageComponent implements OnInit {
  error: boolean = false
  loading: boolean = false
  episode!: Episode
  chars: Char[] = []

  constructor(private charsService: CharsService, private http: HttpClient, private route: ActivatedRoute) {}

  getData() {
    this.loading = true
    this.route.params.subscribe((params: Params) => {
      this.charsService.getOneEpisode(params['id']).subscribe((response: Episode) => {
        this.episode = response
        this.episode.characters.map(it => {
          this.loading = false
          this.http.get<any>(it).subscribe((data) => this.chars.push(data))
        })
      })
    })
  }

  ngOnInit(): void {
    this.getData()
  }
}
