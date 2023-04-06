import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination-panel',
  templateUrl: './pagination-panel.component.html',
  styleUrls: ['./pagination-panel.component.sass']
})
export class PaginationPanelComponent {
  @Input() totalChars!: number
  @Output() pageIndexEvent = new EventEmitter<number>()

  handlePageEvent(event: any) {
    this.pageIndexEvent.emit(event.pageIndex+1)
  }
}
