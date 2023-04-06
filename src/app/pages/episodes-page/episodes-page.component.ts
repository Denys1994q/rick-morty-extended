import { Component, OnInit } from '@angular/core';
import { CharsService } from 'src/app/chars.service';
import { Response } from 'src/app/chars.service';
import { Episode } from 'src/app/chars.service';

@Component({
  selector: 'app-episodes-page',
  templateUrl: './episodes-page.component.html',
  styleUrls: ['./episodes-page.component.sass']
})

export class EpisodesPageComponent implements OnInit {
  error: boolean = false
  loading: boolean = false
  episodes: Episode[] = []
  pageIndex: number = 0
  totalEpisodes: number = 0
  value: string = ''

  constructor(
    private charsService: CharsService
  ) {}

  onError() {
    this.loading = false
    this.error = true
  }

  showData(response: Response<Episode>) {
    this.loading = false
    this.error = false
    this.episodes = response.results
    this.totalEpisodes = response.info.count
  }
  
  getData() {
    this.loading = true

    this.charsService.getEpisodes(this.value, this.pageIndex)
    .subscribe({
      next: (response) => this.showData(response), 
      error: () => this.onError()
    })
  }

  ngOnInit(): void {
    this.getData()
  }

  receivePageIndex = ($event: number) => {
    this.pageIndex = $event
    this.getData()
  }

  getSearchValue (event: Event) {
    this.value = (<HTMLInputElement>event.target).value 
    this.getData()
  }

}
