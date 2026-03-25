import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PropertyService } from '../property';
import { PropertyModel } from '../models/property';   // ← new clean import
import { Observable } from 'rxjs';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './properties.html',
  styleUrl: './properties.scss'
})
export class PropertyComponent implements OnInit {
  properties$: Observable<PropertyModel[]>;

  constructor(private propertyService: PropertyService) {
    this.properties$ = this.propertyService.getProperties();
  }

  ngOnInit(): void {
    this.propertyService.getProperties().subscribe(data => {
      this.properties$ = this.propertyService.getProperties();
    });
  }

  viewDetails(id: number): void {
    console.log('View details for property ID:', id);
    // TODO: Open modal or navigate to /properties/:id
  }
}