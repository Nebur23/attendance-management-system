import axios from "axios";
import useAuth from "./useAuth";

const useRefreshToken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axios.get("http://localhost:8000/refresh", {
      withCredentials: true,
    });
    setAuth(prev => {
      console.log(JSON.stringify(prev));
      console.log(response.data.accessToken);
      return {
        ...prev,
        accessToken: response.data.accessToken,
        roles: response.data.roles,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
