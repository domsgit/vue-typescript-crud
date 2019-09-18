const config = {
  url: "http://localhost:8080"
};

if (process.env.NODE_ENV === "development") {
  config.url = "/api/api";
}

export default config;
