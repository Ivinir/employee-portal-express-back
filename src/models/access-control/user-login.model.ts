export class UserLoginModel {
  public id: string;
  public email: string;
  public role: string;
  public accessToken: string;

  constructor(loginModel: any) {
    this.id = loginModel.user_id;
    this.email = loginModel.user_email;
    this.role = loginModel.user_role;
    this.accessToken = loginModel.access_token;

  }
}

