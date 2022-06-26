import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, throwError} from "rxjs";
import {CustomerService} from "../services/customer.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Customer} from "../Model/customer.model";


@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers! : Observable<Array<Customer>>;
  errorMessage: string | undefined;
  searchFormGroup :FormGroup |undefined;
  Loading: any;
  constructor(private customerService: CustomerService,private  fb:FormBuilder) { }

  ngOnInit(): void {
    this.searchFormGroup=this.fb.group({
      keyword :this.fb.control("")
    })
    this.customers=this.customerService.getCustomers().pipe(
      catchError(err => {
        this.errorMessage=err.message;
        return throwError(err);
      })
    );
  }

}
