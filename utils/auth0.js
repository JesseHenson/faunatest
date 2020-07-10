import { initAuth0 } from "@auth0/nextjs-auth0";
import config from "./config";

export default initAuth0({
  domain: "dev-7uxfzmzk.auth0.com",
  clientId: "Z405aNUXCnSi3rc4WcCpXqme0VvYjp5n",
  clientSecret:
    "c0CBFbQfgejncMHdkgE4s-CEX88il4CajubZw6vMIB_yaoHmiRvHBoKgIuWCxKC_",
  scope: "openid profile",
  redirectUri: "http://localhost:3000/api/callback",
  postLogoutRedirectUri: "http://localhost:3000/",
  session: {
    cookieSecret:
      "c0CBFbQfgejncMHdkgE4s-CEX88il4CajubZw6vMIB_yaoHmiRvHBoKgIuWCxKafsdasdfas_",
    cookieLifetime: 60 * 60 * 8,
    storeAccessToken: true,
  },
});
