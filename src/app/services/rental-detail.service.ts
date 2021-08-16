import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RentalResponseModel } from '../models/rentalResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {

  apiUrl = "https://localhost:44361/api/rentals/getrentaldetails";
  constructor(private httpClient:HttpClient) { }

  getRentalsDetail():Observable<RentalResponseModel> {
    return this.httpClient.get<RentalResponseModel>(this.apiUrl);
  }
}
