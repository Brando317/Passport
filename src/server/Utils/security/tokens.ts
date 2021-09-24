import * as bcrypt from "bcrypt";

import * as jtw from "jsonwebtoken";

import config from "../config";



import db from "../../db/models";

export const CreateToken = async (payload) => {
let tokenid: any = await db.Tokens.insert(payload.userid);
payload.accesstokenid = tokenid.insertId;
payload.unique = crypto.randomBytes(32).toString("hex");
let token: any = await jwt.sign(payload, process.env.SECRET);
await db.Token.update(payload.accesstokenid, token);
return token;
};
export const ValidToken = async (token: string) => {
let payload = jtw.decode(token);
let [accesstokenid] = await db.Tokens.findOne(token, payload.accesstokenid);
if (!accesstokenid) {
throw new Error("Invalid Token!");
} else {
return payload;
}
};
export default {
CreateToken, 
ValidToken
};








