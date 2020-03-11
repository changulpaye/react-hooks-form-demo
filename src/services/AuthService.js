import axios from "axios";

export function login(user) {
  return axios.post("https://reqres.in/api/login", user);
}
