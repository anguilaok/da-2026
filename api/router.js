import { configureUserRouter } from './user_router.js';//inyeccion directa//

export function configureRouter(router) {
    console.log('Configuring main routes');
    configureUserRouter(router);
} 