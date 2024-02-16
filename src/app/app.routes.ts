import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ConversionDetailsComponent } from './pages/conversion-details/conversion-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'details',
    component: ConversionDetailsComponent,
  }
];
