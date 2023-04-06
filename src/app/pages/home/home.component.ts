import { Component, OnInit } from '@angular/core';
import { Char } from 'src/app/chars.service';
import { CharsService } from "src/app/chars.service";
import { Response } from 'src/app/chars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
    chars: Char[] = []
    totalChars: number = 0
    searchValue: string = ''
    statusValue: string = ''
    genderValue: string = ''
    specieValue: string = ''
    error: boolean = false
    loading: boolean = false
    pageIndex: number = 0

    constructor(
      private charsService: CharsService
      ) {}

    showData(response: Response<Char>) {
      this.loading = false
      this.error = false
      this.chars = response.results
      this.totalChars = response.info.count
    }

    onError() {
      this.loading = false
      this.error = true
    }

    getData() {
      this.loading = true
      this.charsService.getChars(this.searchValue, this.statusValue, this.genderValue, this.specieValue, this.pageIndex)
        .subscribe({
          next: (response) => this.showData(response), 
          error: () => this.onError()
        })
    }

    ngOnInit() {
      this.getData()
    }

    receiveSearchValue = ($event: string) => {
      this.searchValue = $event
      this.getData()
    }

    receivePageIndex = ($event: number) => {
      this.pageIndex = $event
      this.getData()
    }

    receiveStatusValue = ($event: string) => {
      this.statusValue = $event
      this.getData()
    }

    receiveGenderValue = ($event: string) => {
      this.genderValue = $event
      this.getData()
    }

    receiveSpecieValue = ($event: string) => {
      this.specieValue = $event
      this.getData()
    }
}
