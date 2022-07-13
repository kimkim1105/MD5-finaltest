import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ToursServiceService} from "../service/tours-service.service";
import {ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  form = new FormGroup( {
    id: new FormControl(0),
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl('')
  })
  constructor(private httpClient: HttpClient,
              private toursService: ToursServiceService,
              private activateRoute: ActivatedRoute) { }
  obj: any;
  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      const id = paraMap.get('id');
      this.toursService.getById(id).subscribe((data) => {
        console.log("detail====",data)
        // this.form.setValue(data.value)
        this.form = new FormGroup( {
          id: new FormControl(data.id),
          title: new FormControl(data.title),
          price: new FormControl(data.price),
          description: new FormControl(data.description)
        })
      })
    });
  }
  update() {
    console.log(this.form.value);
    this.obj = {
      id: this.form.value.id,
      title: this.form.value.title,
      price: this.form.value.price,
      description: this.form.value.description,
    }
    this.toursService.update( this.obj.id,this.obj).subscribe(()=>{
      alert('Thành công');
    }, error => {
      alert('Lỗi');
    })
  }

}
