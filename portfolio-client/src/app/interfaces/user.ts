import { TimeInterval, Timestamp } from "rxjs";

export interface User{
    id: number;
    name: string;
    authenticated: boolean;
    admin: boolean;
    valid: Date;
    created: Date;
  }