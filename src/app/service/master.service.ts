import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string = 'http://freeapi.miniprojectideas.com/api/ParkingSpotBooking/';

  constructor(private http: HttpClient) { }

  getAllParkingLots() {
    return this.http.get(`${this.apiUrl}GetAllParkingLots`);
  }
}
