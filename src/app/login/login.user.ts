export class User {
  id: number;
  firstName: string;
  lastName: string;
  emailId: string;
  password: string;
  streetAddress: string;
  addressType: 'home';
  sendCatalog: boolean;
  city?: string;
  state: string;
  zip: string;

    constructor(myId: number,  firstName: string, lastName: string,
                emailid: string, password: string, streetAddress: string, addressType: 'home',
                city: string, state: string, zip: string, sendCatalog: boolean) {
    this.id = myId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.emailId = emailid;
    this.password = password;
    this.streetAddress = streetAddress;
    this.addressType = addressType;
    this.sendCatalog = sendCatalog;
    this.city = city;
    this.state = state;
    this.zip = zip;

    }
}
