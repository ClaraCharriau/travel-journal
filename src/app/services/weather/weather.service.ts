import { Injectable } from '@angular/core';
import { environnement } from 'src/app/environnement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

export interface WeatherResponse {
  currentConditions:
    {
      temp: number;
    }
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private http: HttpClient, public datePipe: DatePipe) { }

  private url = environnement.weatherApi.url;
  private token = environnement.weatherApi.token;

  currentDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');

  getCurrentWeather(location: string): Observable<WeatherResponse> | undefined {
    const url = `${this.url}/${location}/${this.currentDate}/${this.currentDate}?unitGroup=metric&elements=temp&include=fcst%2Ccurrent&key=${this.token}&contentType=json`;
    return this.http.get<WeatherResponse>(url);
  }

}
