export class User {
  id: number;
  userName: string;
  emailId: string;
  password: string;

    constructor(myId: number, name: string, emailid: string, password: string) {
    this.id = myId;
    this.userName = name;
    this.emailId = emailid;
    this.password = password;
    }
}
