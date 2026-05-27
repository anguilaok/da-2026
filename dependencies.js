import { addDependency } from './dependencies.js';
import { UserService } from './services/userService.js';
import { UserMockup } from './mockups/userMockup.js';

addDependency('userService', new UserService());
addDependency('userRepo', new UserMockup());