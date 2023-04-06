import { Component, OnInit, Input } from '@angular/core';
import { Char } from 'src/app/chars.service';

@Component({
  selector: 'app-chars-panel',
  templateUrl: './chars-panel.component.html',
  styleUrls: ['./chars-panel.component.sass']
})
export class CharsPanelComponent implements OnInit {

  @Input() chars!: Char[]
  @Input() error!: boolean
  @Input() loading!: boolean

  constructor() {}

  ngOnInit() {
   
  }

}
