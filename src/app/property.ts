import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PropertyModel } from './models/property';  // Reuse or move the interface

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'https://localhost:7210/api/property/GetAllProperties';  // Backend API base URL (adjust port if needed)

  constructor(private http: HttpClient) { }

  getProperties(): Observable<PropertyModel[]> {
    return this.http.get<PropertyModel[]>(this.apiUrl);
  }

  // Future CRUD methods (expand as needed)
  getPropertyById(id: number): Observable<PropertyModel> {
    return this.http.get<PropertyModel>(`${this.apiUrl}/${id}`);
  }

  addProperty(property: PropertyModel): Observable<PropertyModel> {
    return this.http.post<PropertyModel>(this.apiUrl, property);
  }

  updateProperty(id: number, property: PropertyModel): Observable<PropertyModel> {
    return this.http.put<PropertyModel>(`${this.apiUrl}/${id}`, property);
  }

  deleteProperty(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}