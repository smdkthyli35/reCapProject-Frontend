import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDto } from 'src/app/models/carDto';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars:Car[] = [];
  carsDto:CarDto[] = [];

  constructor(private carService:CarService, private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCars();
    this.getDetails();
  }

  getCars() {
    this.carService.getCars().subscribe(response=>{
      this.cars = response.data
    })
  }

  getDetails() {
    this.carDetailService.getDetails().subscribe(response=>{
      this.carsDto = response.data
    })
  }

}
