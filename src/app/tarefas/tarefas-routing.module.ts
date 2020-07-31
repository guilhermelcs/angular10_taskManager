import { ListarTarefasComponent } from './listar'
import { Routes } from '@angular/router'
import { HackComponentComponent } from './hack-component/hack-component.component';

export const TarefasRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar',
    },
    {
        path: 'hacking',
        component: HackComponentComponent
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefasComponent
    },
]