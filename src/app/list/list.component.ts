import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToursServiceService} from "../service/tours-service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listTours: any;
  constructor(private httpClient: HttpClient,
              private toursService: ToursServiceService) { }

  ngOnInit(): void {
    this.toursService.findAll().subscribe((data)=> {
      console.log(data);
      this.listTours = data;
    }, error => {

    })
  }

}
