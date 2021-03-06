export interface IActivity {
id?: number;
userid?: number;
type?: string; 
title?: string;

desciption?: string;
hrs?: number;
min?: number;
sec?: number;
distance?: number;
_created?: Date;
}

export interface IUser {
id?: number;
firstname?: string;
lastname?: string;
email?: string;
password?: string;
_created?: Date;
role?: string;
}

export interface Error {
status?: number;
message?: string;
};



export interface IToken {
id?: number;
userid: number;
token: string;
expires: Date;
_created: Date;
}

export interface {
[key: string]: any;
userid: number;
unique?: string;
}

