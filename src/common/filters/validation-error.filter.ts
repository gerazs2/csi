import { ArgumentsHost, Catch, RpcExceptionFilter } from '@nestjs/common';
import { Error } from 'mongoose';
import ValidationError = Error.ValidationError;

@Catch(ValidationError)
export class ValidationErrorFilter implements RpcExceptionFilter {

  catch(exception: ValidationError, host: ArgumentsHost): any {

    const ctx = host.switchToHttp(),
      response = ctx.getResponse();

    return response.status(404).json({
      statusCode: 404,
      createdBy: 'ValidationErrorFilter',
      errors: exception.errors,
    });
  }
}