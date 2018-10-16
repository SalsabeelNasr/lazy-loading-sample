import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { DashboardPageComponent } from "./dashboard-page.component";
import { DashboardPageRoutingModule } from "./dashboard-page-routing.module";
import { RedeemVoucherCardComponent } from './components/redeem-voucher-card/redeem-voucher-card.component';
import { BonusValueCardComponent } from './components/bonus-value-card/bonus-value-card.component';
import { PortfolioValueCardComponent } from './components/portfolio-value-card/portfolio-value-card.component';
import { AnnouncementsCardComponent } from './components/announcements-card/announcements-card.component';
import { LeaderboardCardComponent } from "./components/leaderboard-card/tokens-leaderboard-card.component";
import { WelcomeCardComponent } from "./components/welcome-card/welcome-card.component";

@NgModule({
  declarations: [
    DashboardPageComponent,
    RedeemVoucherCardComponent,
    BonusValueCardComponent,
    PortfolioValueCardComponent,
    LeaderboardCardComponent,
    AnnouncementsCardComponent,
    WelcomeCardComponent
  ],
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
  ]
})
export class DashboardPageModule { }
