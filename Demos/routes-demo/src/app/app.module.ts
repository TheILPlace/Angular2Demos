import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { UserDetailGuard } from "./user/user-detail.guard";
import { UserEditGuard } from "./user/user-edit.guard";
import { routing } from "./app.routing";
import { UserComponent } from "./user/user.component";
import { UserDetailComponent } from "./user/user-detail.component";
import { UserEditComponent } from "./user/user-edit.component";
import { HomeComponent } from "./home-component.component";


@NgModule({
    declarations: [
        AppComponent,
        UserComponent,
        UserDetailComponent,
        UserEditComponent,
        HomeComponent
    ],
    imports: [BrowserModule, routing],
    bootstrap: [AppComponent],
    providers: [UserDetailGuard, UserEditGuard]
})
export class AppModule {}