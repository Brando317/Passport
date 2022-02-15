import { query } from "../models";

async function getAllMessages() {
return query("SELECT * FROM Messages");
}

async function deleteMessage(ID) {
return query("DELETE FROM Message WHERE ID = ?", [ID]);
}

async function insertIntoMessages(body) {
return query("INSERT INTO Messages SET = ?", [body])
}


export default {
getAllMessages,
deleteMessage,
insertIntoMessages
};