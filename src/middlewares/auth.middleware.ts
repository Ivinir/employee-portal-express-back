export class AuthMiddleware {

  public auth(): any {

    return (req: any, res: any, next: any) => {
      next();
    };

  }
}