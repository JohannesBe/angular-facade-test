import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { Message } from '@models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageHttpService {

  static URL = "https://run.mocky.io/v3/36ea5e4e-7cc1-438c-9ac6-829e3e002679";

  constructor(private http: HttpClient) { }

  public getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>(MessageHttpService.URL);
  }
}
