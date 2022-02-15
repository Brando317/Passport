import fetch from "isomorphic-fetch";

export let Accesstoken: string = localStorage.getItem("token") || null;

export let User: any = {
userid: localStorage.getItem("userid") || null,
role: localStorage.getItem("role") || null,
};

// function for api calls, takes an URL, method, body;
// Returns res.json of call

export const apiService = async (
url: string,
method: string = "GET",
body?: {}
) => {
const headers: any = {
"Content-Type": "application/json",
};

if (Accesstoken) {
headers["Authorization"] = `Bbearer ${Accesstoken}`;
}
try {
const res =await fetch(url, {
method, headers, body: JSON.stringify(body),
});
if (res.ok) {
return await res.json();
} else {
return false;
}
} catch(e) {
console.log(e);
throw e;
}
};

export const setAccessToken = (
token: string,
user: {} = { userid: undefined, role: "visitor" }
) => {
Accesstoken = token;
User = user;

localStorage.setItem("token", Accesstoken);
localStorage.setItem("userid", User.userid);
localStorage.setItem("role", User.role);
};

export const RemoveAccessToken = () => {
localStorage.clear();
Accesstoken = null;
User = { userid: null, role: null }
};