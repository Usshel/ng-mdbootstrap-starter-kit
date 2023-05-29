import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarSidePresentationalComponentModule } from './presentational-components/navbar-side/navbar-side.presentational-component-module';
import { HeaderPresentationalComponentModule } from './presentational-components/header/header.presentational-component-module';
import { HttpClientModule } from '@angular/common/http';
import { LengthPipeModule } from './pipes/length/length.pipe-module';


@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        HttpClientModule,
        BrowserModule,
        AppRoutingModule,
        NavbarSidePresentationalComponentModule,
        HeaderPresentationalComponentModule,
        LengthPipeModule,
    ]
})
export class AppModule { }
