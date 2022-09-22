export class Contact { //public classes --> pascal case MyFirstContact
  constructor(
    public id: string, //public --> recieve value and 
    public name: string,
    public email: string,
    public phone: string,
    public imageUrl: string,
    public group: Contact[]
  ) {}
}
