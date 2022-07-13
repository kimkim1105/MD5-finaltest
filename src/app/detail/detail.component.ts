import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ToursServiceService} from "../service/tours-service.service";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private activateRoute: ActivatedRoute,
              private toursService: ToursServiceService) { }
  tours: any;
  ngOnInit(): void {
    this.tours = {
      title: '', price: '', description: ''
    }
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.getTour(id);
    });
  }
  getTour(id: any) {
    this.toursService.getById(id).subscribe(data => {
      this.tours = data;
    })
  }

}
