import Cookies from "js-cookie";

const getTokenFromCookie = () => {
  const token = Cookies.get("token");

  return token;
};

export default getTokenFromCookie;
