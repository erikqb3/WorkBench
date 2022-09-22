import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './snippets/header/header.component';
import { ContactsComponent } from './snippets/contacts/contacts.component';
import { ContactListComponent } from './snippets/contacts/contact-list/contact-list.component';
import { ContactDetailComponent } from './snippets/contacts/contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactsComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
