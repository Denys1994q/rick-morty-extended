import { Component, Output, EventEmitter } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.sass']
})
export class SearchPanelComponent {
  selectedStatus: string = '';
  selectedGender: string = '';
  selectedSpecie: string = '';

  statusArr = [
    {value: 'alive', viewValue: 'alive'},
    {value: 'dead', viewValue: 'dead'},
    {value: 'unknown', viewValue: 'unknown'},
  ];

  gendersArr = [
    {value: 'female', viewValue: 'female'},
    {value: 'male', viewValue: 'male'},
    {value: 'genderless', viewValue: 'genderless'},
    {value: 'unknown', viewValue: 'unknown'},
  ];

  speciesArr = [
    {value: 'human', viewValue: 'human'},
    {value: 'alien', viewValue: 'alien'},
    {value: 'robot', viewValue: 'robot'},
    {value: 'animal', viewValue: 'animal'},
  ];

  @Output() searchValueEvent = new EventEmitter<string>()
  @Output() statusValueEvent = new EventEmitter<string>()
  @Output() genderValueEvent = new EventEmitter<string>()
  @Output() specieValueEvent = new EventEmitter<string>()

  getValue(event: Event) {
      this.searchValueEvent.emit((<HTMLInputElement>event.target).value)
  }

  onStatusChange(event: MatSelectChange) {
    this.statusValueEvent.emit(this.selectedStatus)
  }

  onGenderChange(event: MatSelectChange) {
    this.genderValueEvent.emit(this.selectedGender)
  }

  onSpecieChange(event: MatSelectChange) {
    this.specieValueEvent.emit(this.selectedSpecie)
  }

}
