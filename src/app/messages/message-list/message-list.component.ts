import { Component, OnInit } from '@angular/core';
import { MessageFacadeService } from '@facades/message-facade.service';
import { Message } from '../../core/models/message.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  public messages$: Observable<Message[]>;

  constructor(private msgFacade: MessageFacadeService) { }

  ngOnInit() {
    this.messages$ = this.msgFacade.getMessages();
  }

}
