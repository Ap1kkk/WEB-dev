import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { SystemRoutingModule } from "./system-routing.module";

import { MainPageComponent } from './main-page/main-page.component';
import { UserProfilePageComponent } from "./user-profile-page/user-profile-page.component";
import { ScoreboardPageComponent } from "./scoreboard-page/scoreboard-page.component";
import { UnityComponent } from './unity/unity.component';


@NgModule({
    imports: [
        CommonModule, 
        SharedModule,
        SystemRoutingModule,        
    ],
    declarations: [
        MainPageComponent,
        UserProfilePageComponent,
        ScoreboardPageComponent,
        UnityComponent
  ]
})
export class SystemModule {

}