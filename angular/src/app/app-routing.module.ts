import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HourtrackerComponent } from './hourtracker/hourtracker.component';

const routes: Routes = [
  { path: "", redirectTo: "/hourtracker", pathMatch: "full" },
  { path: "hourtracker", component: HourtrackerComponent }

    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
