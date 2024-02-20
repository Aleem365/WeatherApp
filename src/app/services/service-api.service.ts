import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  weatherAppbaseUrl: string = "https://api.openweathermap.org/data/2.5/weather?q=Burewala&units=metric&appid=4777eface7778d65896e8db7c700c197";

  constructor(private http: HttpClient) { }

  getWeatherData(): Observable<any> {
    return this.http.get<any>(this.weatherAppbaseUrl)
  }
}


