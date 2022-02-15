import { query } from "../models";

import { user } from "../../utils/types";



export const findOneById = (id: number) => {
return query(`SELECT * FROM users WHERE id = ? LIMIT 1`, id)
}

export const findOneByEmail = (email: string) => {
return query(`SELECT * FROM users WHERE email = ? LIMIT 1`, email)
}

export const insert = (user: User) => {
return query(`INSERT INTO users SET ?`, [user])
}

export default {
    findOneById, findOneByEmail, insert
};

