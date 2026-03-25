import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PropertyService } from '../property';
import { PropertyModel } from '../models/property';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-properties',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './properties.html',
  styleUrl: './properties.scss'
})
export class PropertyComponent {
  properties$: Observable<PropertyModel[]>;

  constructor(private readonly propertyService: PropertyService) {
    this.properties$ = this.propertyService.getProperties();
  }

  viewDetails(id: number): void {
    console.log('View details for property ID:', id);
  }
}