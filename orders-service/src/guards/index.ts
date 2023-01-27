import { CanActivate, ExecutionContext, Inject } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserService } from 'src/user/user.service';

export class AuthGuard implements CanActivate {
  constructor(
    @Inject(UserService)
    private readonly userService: UserService,
    private reflector: Reflector,
  ) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const role = this.reflector.get('role', context.getHandler());
    const data = this.reflector.get('magic-data', context.getHandler());

    const id = 0;
    const user = this.userService.getUserById(id);
    return true;
  }
}
