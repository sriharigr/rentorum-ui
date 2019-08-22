import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

//IMPROVE THIS - SHOW MONTH AND DATE IF INSIDE SAME YEAR
// SHOW MONTH AND YEAR IF DIFFERENT YEAR


  userActionTime(lastUpdatedDateAndTime) {
    const lastUpdTime = new Date(lastUpdatedDateAndTime);
    const currentTime = new Date();
    const diffInTime = Math.abs(currentTime.getTime() - lastUpdTime.getTime());
    const diffInHours = diffInTime / (1000 * 60 * 60);

    if (diffInHours < 24 && diffInHours > 1) {
       return Math.ceil(diffInHours) + ' Hours ';
    } else if (diffInHours < 1) {
      return Math.ceil(diffInHours * 60) + ' Minutes ';
    } else if (diffInHours > 24) {
      return Math.floor(diffInHours / 24) + ' Days ';
    }
    return 'NA';
  }
}
