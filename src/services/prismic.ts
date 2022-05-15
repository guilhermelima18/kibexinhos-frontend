import * as prismic from "@prismicio/client";

const endpoint = "https://kibexinhos-frontend.prismic.io/api/v2";

const accessToken = process.env.REACT_APP_ACCESS_TOKEN_PRISMIC;

export const client = prismic.createClient(endpoint, {
  accessToken: accessToken,
});
