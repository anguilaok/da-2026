import {getDependency} from '../dependency.js';

export class UserService {
  constructor() {
    this.userRepo = getDependency('userRepo');
  }
  async getList() {
    return await this.userRepo.find();
  } 
}