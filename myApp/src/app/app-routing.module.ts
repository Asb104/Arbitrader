import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'terms-and-conditions', loadChildren: './Pages/terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule' },
  { path: 'supported-crytocurrency', loadChildren: './Pages/supported-crytocurrency/supported-crytocurrency.module#SupportedCrytocurrencyPageModule' },
  { path: 'help-and-support', loadChildren: './Pages/help-and-support/help-and-support.module#HelpAndSupportPageModule' },
  { path: 'about-us', loadChildren: './Pages/about-us/about-us.module#AboutUsPageModule' },
  { path: 'sign-in', loadChildren: './External-Pages/sign-in/sign-in.module#SignInPageModule' }
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
