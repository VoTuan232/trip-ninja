import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SettingContentComponent } from './setting-content/setting-content.component'

@NgModule({
  declarations: [SettingsComponent, SideBarComponent, SettingContentComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
