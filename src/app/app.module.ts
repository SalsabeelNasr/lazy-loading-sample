import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PagesModule } from './pages/pages.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        PagesModule,
        RouterModule.forRoot([
            {
                path: "",
                loadChildren: "./pages/pages.module#PagesModule"
            }])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
