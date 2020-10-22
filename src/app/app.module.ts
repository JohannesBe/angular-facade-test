import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MessageContainerComponent } from './messages/message-container.component';
import { MessageListComponent } from './messages/message-list/message-list.component';
import { MessageUnreadIndicatorComponent } from './messages/message-unread-indicator/message-unread-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageContainerComponent,
    MessageListComponent,
    MessageUnreadIndicatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
