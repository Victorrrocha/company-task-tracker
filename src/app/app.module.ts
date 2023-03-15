import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MainComponent } from './components/main/main.component';
import { InitialsIconComponent } from './components/initials-icon/initials-icon.component';
import { bootstrapBellFill } from '@ng-icons/bootstrap-icons';
import { NgIconsModule } from '@ng-icons/core';
import { StandardButtonComponent } from './components/standard-button/standard-button.component';
import { cssAdd, cssCloseR, cssCloseO } from '@ng-icons/css.gg';
import { SearcherComponent } from './components/searcher/searcher.component';
import { cssSearch, cssLogOut } from '@ng-icons/css.gg';
import { CardComponent } from './components/card/card.component';
import { ThreadCardComponent } from './threads/thread-card/thread-card.component';
import { InteractableDirective } from './directives/interactable.directive';
import { ThreadPageComponent } from './threads/thread-page/thread-page.component';
import { ThreadNewComponent } from './threads/thread-new/thread-new.component';
import { UnselectedPageComponent } from './threads/unselected-page/unselected-page.component';
import { TabsMenuComponent } from './threads/tabs-menu/tabs-menu.component';
import { TabComponent } from './threads/tabs-menu/tab/tab.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ThreadCommentsComponent } from './threads/thread-comments/thread-comments.component';
import { FooterComponent } from './components/footer/footer.component';
import { ThreadCommentComponent } from './threads/thread-comments/thread-comment/thread-comment.component';
import { AuthenticationComponent } from './authentication/authentication.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SideMenuComponent,
    MainComponent,
    InitialsIconComponent,
    StandardButtonComponent,
    SearcherComponent,
    CardComponent,
    ThreadCardComponent,
    InteractableDirective,
    ThreadPageComponent,
    ThreadNewComponent,
    UnselectedPageComponent,
    TabsMenuComponent,
    TabComponent,
    ThreadCommentsComponent,
    FooterComponent,
    ThreadCommentComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgIconsModule.withIcons({ bootstrapBellFill, cssAdd, cssSearch, cssCloseO, cssCloseR, cssLogOut })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
