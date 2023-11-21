import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SystemComponent } from "./system.component";
import { GamePageComponent } from "./game-page/game-page.component";
import { ScoreboardPageComponent } from "./scoreboard-page/scoreboard-page.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { UserProfilePageComponent } from "./user-profile-page/user-profile-page.component";
import { UnityComponent } from "./unity/unity.component";

const routes: Routes = [
    {path: 'system', component: SystemComponent, children: [
        // {path: 'game', component: GamePageComponent},
        {path: 'game', component: UnityComponent},
        {path: 'scoreboard', component: ScoreboardPageComponent},
        {path: 'main',component: MainPageComponent},
        {path: 'user-profile', component: UserProfilePageComponent}
    ]}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SystemRoutingModule {

}