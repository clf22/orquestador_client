import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private defaultOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  }
  constructor(
    private http: HttpClient,
    private toast: ToastrService,
  ) {}

  async request(method:string, url:string, options:any=this.defaultOptions) {
    return lastValueFrom(this.http.request(method, url, options));
  }
}
