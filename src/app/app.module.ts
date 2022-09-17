import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RafaelCompoundInterestsComponentComponent } from './components/rafael-compound-interests-component/rafael-compound-interests-component.component';
import { RafaelHeaderComponentComponent } from './components/rafael-header-component/rafael-header-component.component';
import { RafaelRandomNumbersComponentsComponent } from './components/rafael-random-numbers-components/rafael-random-numbers-components.component';
import { RafaelSimpleInterestsComponentComponent } from './components/rafael-simple-interests-component/rafael-simple-interests-component.component';
import { RafaelTimerComponentComponent } from './components/rafael-timer-component/rafael-timer-component.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    RafaelCompoundInterestsComponentComponent,
    RafaelHeaderComponentComponent,
    RafaelRandomNumbersComponentsComponent,
    RafaelSimpleInterestsComponentComponent,
    RafaelTimerComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
