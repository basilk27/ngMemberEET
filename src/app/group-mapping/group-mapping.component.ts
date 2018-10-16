import { Component, OnInit } from '@angular/core';
import { ManuState } from '../model/manu-state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-mapping',
  templateUrl: './group-mapping.component.html',
  styleUrls: ['./group-mapping.component.css']
})
export class GroupMappingComponent implements OnInit {

  zManuState: ManuState;

  constructor( private _router: Router ) {
    this.zManuState =  {
      mainManuFlag: true,
      mainButtonOn: true,
      cadocsButtonOn: false,
      searchButtonOn: false,
      eeterrorsButtonOn: false,
      scheduleButtonOn: false,
      mappingButtonOn: false
    };

  }

  ngOnInit() {
  }

  mainRouter(): void {
    this._router.navigate(['/main']);
  }

  cadocsRouter(): void {
    this._router.navigate(['/cadocs']);
  }

  searchRouter(): void {
    this._router.navigate( [ '/search' ] );
  }

  eeterrorsRouter(): void {
    this._router.navigate( [ '/search' ] );
  }

  scheduleRouter(): void {
    this._router.navigate( [ '/schedule' ] );
  }

  mappingRouter(): void {
    this._router.navigate(['/mapping']);
  }
}
