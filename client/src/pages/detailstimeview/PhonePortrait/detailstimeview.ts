import { Component } from '@angular/core';
import { Screen } from 'app/screen';

@Component({
  selector: 'screen-detailstimeview-phoneportrait',
  templateUrl: 'detailstimeview.html'
})
export class detailstimeview_PhonePortrait extends Screen {
  private datePosition = 0;
  public data: any;

  ngOnInit(): void {
    super.ngOnInit();
    // Logic to run when the screen loads goes here.
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // Logic to run when the screen unloads goes here.
  }

  public onDataLoad(data: any): void {
    // Logic to run when the screen's data is updated goes here.
    this.data.shownDefaultDays = this.data.allDefaultDays.slice(1, 6);

    let entries = this.data.entries;
    entries.forEach(entry => {
      entry.shownTimes = entry.allTimes.slice(1, 6);
    });
  }

  public scrollLeft() {
    if (this.datePosition >= 0) {
      this.datePosition--;
      this.setAllPositions();
    }
  }

  public scrollRight() {
    if (this.datePosition <= 0) {
      this.datePosition++;
      this.setAllPositions();
    }
  }

  private setAllPositions() {
    let entries = this.data.entries;
    if (this.datePosition === -1) {
      this.data.shownDefaultDays = this.data.allDefaultDays.slice(0, 5);
      this.data.shownDayTotals = this.data.dayTotals.slice(0, 5);
      entries.forEach(entry => {
        entry.shownTimes = entry.allTimes.slice(0, 5);
      });
    } else if (this.datePosition === 0) {
      this.data.shownDefaultDays = this.data.allDefaultDays.slice(1, 6);
      this.data.shownDayTotals = this.data.dayTotals.slice(1, 6);
      entries.forEach(entry => {
        entry.shownTimes = entry.allTimes.slice(1, 6);
      });
    } else if (this.datePosition === 1) {
      this.data.shownDefaultDays = this.data.allDefaultDays.slice(2);
      this.data.shownDayTotals = this.data.dayTotals.slice(2);
      entries.forEach(entry => {
        entry.shownTimes = entry.allTimes.slice(2);
      });
    }
  }
}
