import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root',
})
export class CarDetailService {
  apiUrl = 'https://localhost:44361/api/cars/getcardetails';
  constructor(private httpClient: HttpClient) {}


  getDetails():Observable<ListResponseModel<CarDto>> {
    return this.httpClient.get<ListResponseModel<CarDto>>(this.apiUrl);
  }

}
