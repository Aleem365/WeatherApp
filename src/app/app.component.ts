import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from './services/service-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';

  public arrData: any = [];
  public showData = {
    temp: null,
    temp_min: null,
    temp_max: null,
    Humidity: null,
    wind: null,
    city: null,
    country: null,
  }

  constructor(private weatherservice: ServiceApiService) {

  }
  ngOnInit(): void {
    this.weatherservice.getWeatherData().subscribe({
      next: (res) => {
        this.arrData.push(res);
        console.log(this.arrData);
        this.showData.temp = this.arrData[0].main.temp;
        this.showData.temp_min = this.arrData[0].main.temp_min;
        this.showData.temp_max = this.arrData[0].main.temp_max;
        this.showData.Humidity = this.arrData[0].main.humidity;
        this.showData.wind = this.arrData[0].wind.speed;
        this.showData.city = this.arrData[0].name;
        this.showData.country = this.arrData[0].sys.country;

      }
    })

  }
}
