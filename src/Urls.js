// let PREFIX = "";

// if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
//   // dev code
//   PREFIX = "http://127.0.0.1:8000";
// } else {
//   // production code
//   PREFIX = "https://a3harva.pythonanywhere.com";
// }

let PREFIX =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000"
    : "https://a3harva.pythonanywhere.com";

const URLS = {
  GET_COMMANDS: PREFIX + "/api/command",
};

export default URLS;
