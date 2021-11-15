import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs-compat/Rx'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: Http) { 
  
  }
}
