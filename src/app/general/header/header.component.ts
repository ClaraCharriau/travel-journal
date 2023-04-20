import { Component } from '@angular/core';
import { Post } from 'src/app/post';
import { PostService } from 'src/app/services/post/post.service';
import { WeatherResponse, WeatherService } from 'src/app/services/weather/weather.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  currentTravel?: Post;
  currentWeather?: WeatherResponse;

  constructor(private weatherService : WeatherService, private postService: PostService) {}

  ngOnInit() {
    this.getCurrentTravel();
    this.getCurrentTemp();
  }

  getCurrentTravel() {
    this.currentTravel = this.postService.getHighlightPost();
  }

  getCurrentTemp() {
    const location = this.currentTravel?.city;    
    if(!location) return

    const currentTemp = this.weatherService.getCurrentWeather(location);
    currentTemp?.subscribe(next => this.currentWeather = next);
  }

}
