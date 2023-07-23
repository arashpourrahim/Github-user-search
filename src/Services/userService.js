import http from "../utils/httpService";

export function GET_USERS(query) {
  return http.get(`/search/users?q=${query}`);
}

export function GET_USER_INFO(userLoginName) {
  return http.get(`/users/${userLoginName}`);
}

export function GET_USER_REPO(repoName) {
  return http.get(`users/${repoName}/repos`);
}
