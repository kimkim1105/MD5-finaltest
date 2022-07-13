import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {HttpClient} from "@angular/common/http";
import {ToursServiceService} from "../service/tours-service.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form = new FormGroup( {
    title: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  })
  obj: any;
  constructor(private httpClient: HttpClient,
              private toursService: ToursServiceService) { }

  ngOnInit(): void {
  }
  add() {
    // console.log(this.form.value);
    this.obj = {
      title: this.form.value.title,
      price: this.form.value.price,
      description: this.form.value.description,
    }
    this.toursService.save(this.obj).subscribe(()=>{
      alert('Thành công');
    }, error => {
      alert('Lỗi');
    })
  }
}
