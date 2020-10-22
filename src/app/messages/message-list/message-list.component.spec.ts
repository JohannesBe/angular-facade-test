import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Observable, of } from 'rxjs';

import { MessageListComponent } from './message-list.component';
import { MessageFacadeService } from '@facades/message-facade.service';
import { Message } from '@models/message.model';

const messageList: Message[] = [
  {
    author: "Vivaldi",
    message: "Four Seasons"
  }
];

class MockMessageFacadeService {
  public getMessages(): Observable<Message[]> {
    return of(messageList);
  }
}

describe('MessageListComponent', () => {
  let msgFacade: MessageFacadeService;
  let component: MessageListComponent;
  let fixture: ComponentFixture<MessageListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageListComponent ],
      providers: [{
        provide: MessageFacadeService,
        useClass: MockMessageFacadeService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListComponent);
    component = fixture.componentInstance;

    msgFacade = TestBed.get(MessageFacadeService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load messages from facade into DOM', () => {
    component.ngOnInit();

    const DOM = fixture.nativeElement;

    component.messages$.subscribe(msgs => {
      fixture.detectChanges();

      const index = 0;

      const author = DOM.querySelector(".message-author")[index];
      const body = DOM.querySelector(".message-body")[index];

      expect(author.textContent).toEqual(messageList[index].author);
      expect(body.textContent).toEqual(messageList[index].message);
    })
  });
});
