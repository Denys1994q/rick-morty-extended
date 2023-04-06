import { Component, OnInit } from '@angular/core';
import { Location } from 'src/app/chars.service';
import { CharsService } from 'src/app/chars.service';
import { Response } from 'src/app/chars.service';
import { HttpClient } from '@angular/common/http';
import { Char } from 'src/app/chars.service';

@Component({
  selector: 'app-location-page',
  templateUrl: './location-page.component.html',
  styleUrls: ['./location-page.component.sass']
})
export class LocationPageComponent implements OnInit {
  locations: Location[] = []
  totalLocations: number = 0
  error: boolean = false
  loading: boolean = false
  activeLocation: number = 0
  chars: Char[] = []
  pageIndex: number = 0

  constructor(
    private charsService: CharsService,
    private http: HttpClient
  ) {}

  showData(response: Response<Location>) {
    this.chars = []
    
    this.loading = false
    this.error = false
    this.locations = response.results
    this.totalLocations = response.info.count

    this.locations[this.activeLocation].residents.map(it => {
      this.http.get<any>(it).subscribe((data) => this.chars.push(data))
    })
  }

  onError() {
    this.loading = false
    this.error = true
  }

  getData() {
    this.loading = true

    this.charsService.getLocations(this.pageIndex)
    .subscribe({
      next: (response) => this.showData(response), 
      error: () => this.onError()
    })
  }

  ngOnInit() {
    this.getData()
  }

  getActiveLocation(index: number) {
    this.activeLocation = index
    this.getData()
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }

  receivePageIndex = ($event: number) => {
    this.pageIndex = $event
    this.activeLocation = 0
    this.getData()
  }
}
