import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MediaComponent } from './media/media.component';
import { TurkeysComponent } from './turkeys/turkeys.component';

const routes: Routes = [
  {path:"booking", component: BookingComponent},
  {path: "turkeys", component: TurkeysComponent},
  {path: "media", component: MediaComponent},
  {path: "", component: HomePageComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
