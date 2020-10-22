import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

import { Message } from '@models/message.model';
import { MessageHttpService } from '@http/message-http.service';

@Injectable({
  providedIn: 'root'
})
export class MessageFacadeService {
  private _messages = new BehaviorSubject<Message[]>([]);
  public messages = this._messages.asObservable();
  public messagesLoaded = false;

  constructor(private msgHttp: MessageHttpService) {}

  public getMessages(): Observable<Message[]> {
    if (this.messagesLoaded === false) {
        this.msgHttp.getMessages().subscribe(
            resp => {
                this._messages.next(resp);
            }
        )
    }

    return this.messages;
  }
}
