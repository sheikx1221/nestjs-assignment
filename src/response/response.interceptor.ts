import { CallHandler, ExecutionContext, HttpException, HttpStatus, Injectable, Logger, NestInterceptor } from '@nestjs/common';
import { Observable, catchError } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  private readonly logger = new Logger("NestJs");

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      catchError((error) => {
        const message = `Request failed: ${error.message}`;
        this.logger.error(message, context.getClass().name);
        throw new HttpException(message, HttpStatus.BAD_REQUEST);
      })
    );
  }
}
