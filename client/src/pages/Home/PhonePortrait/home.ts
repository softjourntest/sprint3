import { Component } from '@angular/core';
import { Screen } from 'app/screen';
import { options } from 'smartux-client';

@Component({
  selector: 'screen-home-phoneportrait',
  templateUrl: 'home.html'
})
export class home_PhonePortrait extends Screen {
  data: any;
  initialApprovals = [];

  ngOnInit(): void {
    super.ngOnInit();
    // Logic to run when the screen loads goes here.
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // Logic to run when the screen unloads goes here.
  }

  onDataLoad(data: any): void {
    // Logic to run when the screen's data is updated goes here.
    if (data.Approvals) {
      this.initialApprovals = data.Approvals.map(item => Object.assign({}, item));
    }
  }

  filterSelect(selected) {
    // set val to selected
    let val = selected;
    if (val === 'All') {
      this.data.approvals = this.initialApprovals.map(item => Object.assign({}, item));
      return;
    }

    // back to initial data.approvals values
    this.data.approvals = this.initialApprovals.map(item => Object.assign({}, item));

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      for (let i = 0; i < this.data.approvals.length; i++) {
        let item = this.data.approvals[i];
        if (item.type && item.type.toLowerCase().indexOf(val.toLowerCase()) > -1) {
          item.isFiltered = false;
        } else {
          item.isFiltered = true;
        }
      }
    } else if (val === '') {
      this.data.approvals = this.initialApprovals.map(item => Object.assign({}, item));
    }
  }

  search(ev: any) {
    // set val to the value of the searchbar
    let val = ev.target.value;

    // back to initial data.Group values
    this.data.approvals = this.initialApprovals.map(item => Object.assign({}, item));

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      for (let i = 0; i < this.data.approvals.length; i++) {
        let item = this.data.approvals[i];
        for (let key in item) {
          if (item[key] && typeof item[key] === 'string' && item[key].toLowerCase().indexOf(val.toLowerCase()) > -1) {
            item.isFiltered = false;
            break;
          }
          item.isFiltered = true;
        }
      }
    } else if (val === '') {
      this.data.approvals = this.initialApprovals.map(item => Object.assign({}, item));
    }
  }
}
