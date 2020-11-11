import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {
  private baseUrl = 'http://localhost:8080/admin/students';

  constructor(private http:HttpClient) { }
  
    
    getStudentByRegNo(regno: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${regno}`);
    }
  
    createStudent(employee: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, employee);
    }
  
    updateStudent(regno: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${regno}`, value);
    }
  
    deleteStudent(regno: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${regno}`, { responseType: 'text' });
    }
  
    getAllStudents(): Observable<any> {
      return this.http.get(`${this.baseUrl}`);
    }
  
  }

