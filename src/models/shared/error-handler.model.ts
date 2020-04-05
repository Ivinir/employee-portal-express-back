export class ErrorHandler extends Error {
  public statusCode: number;
  public errorCode: string;
  public message: string;
  public data?: any;

  constructor(statusCode: number, errorCode: string, message: string, data?: any) {
    super();
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    this.message = message;
    this.data = data;
  }

}
