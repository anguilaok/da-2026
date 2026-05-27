export function configureUserRouter(configureRouter) {
  console.log('Configuring user controller routes');
  configureRouter.get('/users', (req, res) => {
    // Lógica para obtener usuarios
    res.send('Lista de usuarios');
  });
}