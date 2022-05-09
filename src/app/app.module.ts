import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { InvestmentCategoriesComponent } from './components/investment-categories/investment-categories.component';

import { InvestmentEffects } from './state/investment/investment.effects';
import { HttpClientModule } from '@angular/common/http';
import { InvestmentWrapperComponent } from './components/investment-wrapper/investment-wrapper.component';
import { WidgetComponent } from './components/widget/widget.component';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';
import { InvestmentPlatformsComponent } from './components/investment-platforms/investment-platforms.component';
import { NgChartsModule } from 'ng2-charts';
import { ChartComponent } from './components/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ContentComponent,
    FooterComponent,
    InvestmentCategoriesComponent,
    InvestmentWrapperComponent,
    WidgetComponent,
    WidgetContainerComponent,
    InvestmentPlatformsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([InvestmentEffects]),
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
