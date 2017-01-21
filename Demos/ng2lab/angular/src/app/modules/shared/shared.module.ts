import { NgModule } from '@angular/core';

 import { CapitalizePipe } from './pipes/capitalize.pipe';
 import { TrimPipe } from './pipes/trim.pipe';

@NgModule({
    imports: [],
    declarations: [CapitalizePipe,TrimPipe],
    exports: [CapitalizePipe,TrimPipe],
    
    providers: [],
})
export class SharedModule { }
