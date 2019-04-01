export class User {
  id: number;
  userName: string;
  emailId: string;
  password: string;

    constructor(myId: number, userName: string, emailid: string, password: string) {
    this.id = myId;
    this.userName = userName;
    this.emailId = emailid;
    this.password = password;
    }
}
