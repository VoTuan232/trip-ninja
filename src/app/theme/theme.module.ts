import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ThemeComponent } from './theme.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [ThemeComponent, HeaderComponent],
  exports: [ThemeComponent],
})
export class ThemeModule {}
