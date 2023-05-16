import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms'; 
import { CarouselModule } from 'primeng/carousel';
import{CardModule} from'primeng/card';
import{DividerModule} from'primeng/divider';
import{MenubarModule} from'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import{TagModule} from 'primeng/tag';
import{ToastModule} from 'primeng/toast';
import { TableModule } from 'primeng/table';
import { StepsModule } from 'primeng/steps';
import{AvatarModule} from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { SplitterModule } from 'primeng/splitter';
import { PanelModule } from 'primeng/panel';
import { HomepageComponent } from './homepage/homepage.component';
import { SearchTravelComponent } from './search-travel/search-travel.component';
import { AddTravelComponent } from './add-travel/add-travel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component'; 
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    SearchTravelComponent,
    AddTravelComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    TabViewModule,
    MenubarModule,
    DividerModule,
    CarouselModule,
    TagModule,
    StepsModule,
    ToastModule,
    SplitterModule,
    InputTextModule,
    PanelModule,
    TableModule,
    AvatarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
