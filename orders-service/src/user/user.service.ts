import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly users = [{ id: 0, name: 'john connor' }];

  getUserById(id: any) {
    return this.users.filter((u) => u.id === id);
  }
}
