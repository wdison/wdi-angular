import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CarouselComponent } from './pages/carousel/carousel.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './pages/card/card.component';
import { NavbarHorizontalComponent } from './navbar/navbar-horizontal/navbar-horizontal.component';
import { NavbarVerticalComponent } from './navbar/navbar-vertical/navbar-vertical.component';
import { allIcons, NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiComponent } from './pages/emoji/emoji.component';
import { IconComponent } from './pages/icon/icon.component';
import { OutletComponent } from './home/outlet/outlet.component';
import { AccordionComponent } from './pages/accordion/accordion.component';
import { NavbarItemComponent } from './navbar/navbar-item/navbar-item.component';
import { WdiComponentModule } from './wdi-component/wdi-component.module';
import { WdiExempleModule } from './wdi-component/exemple/exemple.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarHorizontalComponent,
    NavbarVerticalComponent,
    HomeComponent,
    CarouselComponent,
    CardComponent,
    EmojiComponent,
    IconComponent,
    OutletComponent,
    AccordionComponent,
    NavbarItemComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgbModule,
    NgxBootstrapIconsModule.pick(allIcons),
    PickerModule,HttpClientModule

    // modules Internos
    ,AppRoutingModule
    ,WdiComponentModule
    ,WdiExempleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
