import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactInquiry {
    name: string;
    email: string;
    message: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    getAllInquiries(): Promise<Array<ContactInquiry>>;
    getCallerUserRole(): Promise<UserRole>;
    getInquiry(name: string, email: string): Promise<ContactInquiry | null>;
    isCallerAdmin(): Promise<boolean>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
}
