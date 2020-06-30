import { Component, OnInit } from '@angular/core';
import { InflightService } from '../inflight.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Flight } from 'src/app/core/_models/flight';

@Component({
  selector: 'app-all-flight',
  templateUrl: './all-flight.component.html',
  styleUrls: ['./all-flight.component.css']
})
export class AllFlightComponent implements OnInit {

  constructor(private service:InflightService,private router:Router, private spinner: NgxSpinnerService,
    private route:ActivatedRoute) { }
planes:Flight[];
  ngOnInit() {
    this.spinner.show();
    this.service.get()
        .subscribe(data => {
          console.log(data);
          this.planes = data;
        })
        setTimeout(() => {
          /** spinner ends after 5 seconds */
          this.spinner.hide();
        }, 600);
  }


  selectedFlight(data:Flight)
  {
    this.service.setSelectedFlight(data);
    
    this.router.navigate(['selectedFlight'], { relativeTo: this.route});
  }

}


