import { Injectable, OnInit } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DisclaimerService implements OnInit {

  acknowledged = 'UNKNOWN';

  constructor(private cookieJar: CookieService) {
    if (!this.cookieJar.check('DSS_disclaimer')) {
      this.persist();
    }
  }

  ngOnInit(): void {
    this.acknowledged = this.cookieJar.get('DSS_disclaimer');
  }

  public noticed() {
    return (this.cookieJar.get('DSS_disclaimer') === 'TRUE');
  }

  public acknowledge() {
    this.acknowledged = 'TRUE';
    this.persist();
  }

  public decline() {
    this.acknowledged = 'FALSE';
    this.persist();
  }

  private persist() {
    // Use PersistenceService to store cookie here
    this.cookieJar.set('DSS_disclaimer', this.acknowledged);
  }
}
