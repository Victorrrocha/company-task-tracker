import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MainComponent } from './components/main/main.component';
import { InitialsIconComponent } from './components/initials-icon/initials-icon.component';
import { bootstrapBellFill } from '@ng-icons/bootstrap-icons';
import { NgIconsModule } from '@ng-icons/core';
import { StandardButtonComponent } from './components/standard-button/standard-button.component';
import { cssAdd } from '@ng-icons/css.gg';
import { SearcherComponent } from './components/searcher/searcher.component';
import { cssSearch } from '@ng-icons/css.gg';
import { CardComponent } from './components/card/card.component';
import { ThreadCardComponent } from './threads/thread-card/thread-card.component';
import { InteractableDirective } from './directives/interactable.directive';
import { ThreadPageComponent } from './threads/thread-page/thread-page.component';

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
    ThreadPageComponent
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ bootstrapBellFill, cssAdd, cssSearch })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
