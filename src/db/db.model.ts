import Dexie, { Table } from 'dexie';

export interface accountKey {
    derviationPath : string
    privateKey : string
    publicKey : string
}

export interface wallet {
    seed: Buffer;
    account?: [accountKey];
}
export class DB extends Dexie {
    // table name is student 
    wallet!: Table<wallet>;
    constructor() {
        super('User Credential Wallet');
        this.version(1).stores({
            students: ' seed, account'
        });
    }
}
export const db = new DB(); // export the db