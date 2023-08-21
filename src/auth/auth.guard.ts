import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

const allowed = [
  { path: "/auth/login", method: "POST" }
]

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService
  ) {}
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    switch(context.getType()) {
      case "http":
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];
        const isAllowed = allowed.find(({ path, method }) => {
          if (path === request.path && method === request.method) return true;
          return false;
        });
        if (isAllowed) return true;

        if (token) {
          try {
            const decodedToken = this.jwtService.verify(token);
            // Here you can perform additional checks or validations on decodedToken
            request.user = decodedToken; // Attach the user to the request object
            return true;
          }
          catch (error) {
            console.log("error = ",error);
            return false;
          }
        }
        break;
      default:
        return false;
    }
  }
}
