import { query } from "../models";
import { Token } from "../..utils/types";


export const findOne = (token: string, id: number) => {
return query(
    `SELECT * FROM accesstokens WHERE token = ? AND id = ? LIMIT 1`,
[token, id])
};
export const insert = (userid: number) => {
return query(`INSERT INTO accesstoken SET userid = ?`, userid)
}





export const update = (id: number, token: string) => {
return query(`UPDATE accesstoken SET token = ? WHERE id = ?`,
[token, id])
};



export default {
findOne,
insert,
update,
};


