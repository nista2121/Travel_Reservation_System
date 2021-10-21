import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { TripListingComponent } from "./trip-listing/trip-listing.component";
import { AddTripComponent } from "./add-trip/add-trip.component";
import { EditTripComponent } from "./edit-trip/edit-trip.component";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
    {path: 'add-trip', component: AddTripComponent},
    {path: 'login', component: LoginComponent },
    {path:'edit-trip', component: EditTripComponent },
    {path: 'list-trips', component: TripListingComponent},
    {path: '', component: HomeComponent, pathMatch: 'full'}
   
]

@NgModule({

    imports:[
        FormsModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
})

export class AppRoutingModule { }