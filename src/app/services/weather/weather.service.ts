import { Injectable } from '@angular/core';
import { environnement } from 'src/app/environnement';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherResponse {
  // queryCost: number;
  // latitude: number;
  // longitude: number;
  // resolvedAddress: string;
  // address: string;
  // timezone: string;
  // tzoffset: string;
  // days: [
  //   {
  //     datetimeEpoch: number;
  //     temp: number;
  //   }
  // ]
  currentConditions:
    {
      //datetimeEpoch: number;
      temp: number;
    }
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  private url = environnement.weatherApi.url;
  private token = environnement.weatherApi.token;

  getCurrentWeather(location: string): Observable<WeatherResponse> | undefined {
    const url = `${this.url}/${location}/2023-04-19/2023-04-19?unitGroup=metric&elements=temp&include=fcst%2Ccurrent&key=${this.token}&contentType=json`;
    console.log(this.http.get(url));
    return this.http.get<WeatherResponse>(url);
  }

}
