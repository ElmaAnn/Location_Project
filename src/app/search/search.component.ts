import { Component } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent {
  constructor(private http: HttpClient) {}

  locationList: string[] = [];

  getCityLocation(cityname) {
    var url =
      "http://www.datasciencetoolkit.org/maps/api/geocode/json?sensor=false&address=";
    var url_city = url.concat(cityname.value);

    this.http.get(url_city).subscribe(
      response => {
        this.locationList = response as string[];
      },

      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
}
