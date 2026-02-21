import { Routes } from '@angular/router';
import { FamilyTree } from './family-tree/family-tree';
import { Home } from './home/home';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'family-tree', component: FamilyTree }
];
