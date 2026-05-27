import { addDependency } from './dependency.js';
import { UserService } from './services/user_service.js';
import users_mongo from './mongo_db/users_mongo.js';

addDependency('userRepo', users_mongo);

addDependency('userService', new UserService());
