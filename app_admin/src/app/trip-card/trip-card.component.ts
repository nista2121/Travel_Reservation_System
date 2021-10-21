import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent implements OnInit {
  @Input('trip') trip: Trip;
  
  constructor(
    private router: Router,
    private authService: AuthenticationService 
    ) { }

  ngOnInit() {
  }

  public isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  public editTrip(trip: Trip): void {
    console.log("Inside TripListeningCComponent#editTrip");
    localStorage.removeItem("tripCode");
    localStorage.setItem("tripCode", trip.code);
    this.router.navigate(['edit-trip']);
  }

  

}
