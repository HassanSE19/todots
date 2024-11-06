import axios from "axios";
import { IValidateToken } from "type";

export const validateToken = async (token: string) => {
  try {
    const response = (await axios.get(
      "http://localhost:8080/user/validate-token",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )) as IValidateToken;
    return response;
  } catch (error) {
    return {
      success: false,
      error,
    };
  }
};
