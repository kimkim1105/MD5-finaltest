import { Component, OnInit } from '@angular/core';
import {ToursServiceService} from "../service/tours-service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  id: any;
  constructor(private activateRoute: ActivatedRoute,
              private toursService: ToursServiceService) { }
  tours: any;
  ngOnInit(): void {
    this.tours = {
      title: '', price: '', description: ''
      }
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      this.id = paraMap.get('id');
      this.getTour(this.id);
    });
  }
  getTour(id: any) {
    this.toursService.getById(id).subscribe(data => {
      this.tours = data;
    })
  }
  delete(){
    console.log(this.id)
    this.toursService.delete(this.id).subscribe(() => {
      alert("thanh cong")
    }, error => {
      alert("loi")
    })
  }

}
