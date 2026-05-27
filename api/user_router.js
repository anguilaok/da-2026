import { getDependency } from '../dependency.js';

export function configureUserRouter(configureRouter) {
  console.log('Configuring user controller routes');
  const userService = getDependency('userService');

  configureRouter.get('/users', async (req, res) => {
      const users = await userService.getList();
      res.json(users.map(user => ({
        username: user.username,
        email: user.email,
        displayName: user.displayName,
        role: user.role,
      })));
  });
}