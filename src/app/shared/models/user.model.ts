export class User {
    constructor(
      public email: string,
      public password: string,
      public name: string,
      public clickedValue: number,
      public isAdmin: boolean,
      public id?: number,
    ) {}
  }