import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private fb:FormBuilder) {}
  profileForm:FormGroup=this.fb.group({
    firstName:['',Validators.required],   
    password:['',Validators.required]
  })
  ngOnInit(): void {
  }
  public func(){
    console.log("20==",this.profileForm.value)
  }

}
