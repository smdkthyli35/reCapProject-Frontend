import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDto } from '../models/carDto';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44361/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>> {
    let newPath = this.apiUrl + "cars/getall";
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getDetails():Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<CarDto>> {
    let newPath = this.apiUrl + "cars/getcarsbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDto>>(newPath);
  }


}
