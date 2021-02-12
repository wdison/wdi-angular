import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CarouselComponent } from "./pages/carousel/carousel.component";
import { CardComponent } from "./pages/card/card.component";
import { EmojiComponent } from "./pages/emoji/emoji.component";
import { IconComponent } from "./pages/icon/icon.component";
import { AccordionComponent } from "./pages/accordion/accordion.component";
import { AlertComponent } from "./wdi-component/exemple/alert";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "card", component: CardComponent },
  { path: "carousel", component: CarouselComponent },
  { path: "emoji", component: EmojiComponent },
  { path: "icon", component: IconComponent },
  { path: "accordion", component: AccordionComponent },
  { path: "alert", component: AlertComponent },
  { path: "**", redirectTo: "/", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
