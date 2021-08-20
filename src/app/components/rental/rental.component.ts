import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental';
import { RentalDetailService } from 'src/app/services/rental-detail.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentals:Rental[] = [];
  constructor(private rentalService:RentalService, private rentalDetailService:RentalDetailService) { }

  ngOnInit(): void {
    this.getRentalsDetail();
  }

  getRentalsDetail() {
    this.rentalDetailService.getRentalsDetail().subscribe(response=>{
      this.rentals = response.data
    })
  }

}
