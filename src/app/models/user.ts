export interface User {
  _id: number,
  name : string,
  email ?: string,
  phoneNumber ?: number,
  state : string,
  city : string,
  credits ?: number,
  calif : 0 | 1 | 2 | 3 | 4 | 5
}
