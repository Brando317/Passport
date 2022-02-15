import * as React from "react";

import { NavLink, useHistory } from "react-router-dom";

import { user, apiService } from "../utils/apiService";

import { IActivity } from "../utils/types";

const UserCard React.FC<IUserCardProps> = (entries) => {
const [user, setUser] = React.useState([]);
React.useEffect(() => {
(async () => {
let user = await apiService(`/api/members/user_details/${User.userid}`);
setUser(user);
})();
}, []);

return (
<div className=""







)




}












</IUserCardProps>.