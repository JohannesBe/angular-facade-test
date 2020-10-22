import { Component, OnInit } from '@angular/core';
import { MessageFacadeService } from '@facades/message-facade.service';

@Component({
  selector: 'message-unread-indicator',
  templateUrl: './message-unread-indicator.component.html',
  styleUrls: ['./message-unread-indicator.component.scss']
})
export class MessageUnreadIndicatorComponent implements OnInit {
  public messageCount = 0;

  constructor(private msgFacade: MessageFacadeService) { }

  ngOnInit() {
    this.msgFacade.getMessages().subscribe(messages => {
      this.messageCount = messages.length;
    });
  }

}
