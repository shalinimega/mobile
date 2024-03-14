import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcolumnComponent } from './addcolumn/addcolumn.component';
import { PostdataComponent } from './postdata/postdata.component';
import { MobilecomponentComponent } from './mobilecomponent/mobilecomponent.component';
import { ReversedcomponentComponent } from './reversedcomponent/reversedcomponent.component';
import { ListsortcomponentComponent } from './listsortcomponent/listsortcomponent.component';
import { BrandcomponentComponent } from './brandcomponent/brandcomponent.component';
import { DuplicatecomponentComponent } from './duplicatecomponent/duplicatecomponent.component';

const routes: Routes = [
  
    { path: "froms",component:AddcolumnComponent },
    { path: "postdata",component:PostdataComponent},
    { path: "getdata",component:MobilecomponentComponent},
    { path: "reversdata",component:ReversedcomponentComponent},
    { path: "sortdata",component:ListsortcomponentComponent},
    { path: "branddata",component:BrandcomponentComponent},
    { path: "duplicatedata",component:DuplicatecomponentComponent},
    {path:"addcolumn",component:AddcolumnComponent}
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
