import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDto } from 'src/app/models/carDto';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carsDto: CarDto[] = [];

  constructor(private carService: CarService, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]) {
        this.getCarsByBrand(params["brandId"])
      } 
      else if((params["colorId"])) {
        this.getCarsByColor(params["colorId"])
      }
      else {
        this.getDetails()
      }
    })
  }

  getDetails() {
    this.carService.getDetails().subscribe((response) => {
      this.carsDto = response.data;
    });
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.carsDto = response.data
    })
  }

  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      this.carsDto = response.data
    })
  }












  // getCars() {
  //   this.carService.getCars().subscribe(response=>{
  //     this.cars = response.data
  //   })
  // }
  // cars:Car[] = [];
  // this.getCars();
}
