const config = {
  url: "http://129.204.143.28:3000"
};

if (process.env.NODE_ENV === "development") {
  config.url = "/api/api";
}

export default config;
