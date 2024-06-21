var url = require("url");
const parsedUrl = url.parse(
  "https://blog.altcampus.io:80/students/register?name=altcampus&gender=male",
  true
);

console.log(parsedUrl.pathname);
console.log(parsedUrl.query);
console.log(parsedUrl.host);
console.log(parsedUrl.protocol);


const parsedUrl1 = url.parse("https://www.google.com/search?q=google.com&oq=&aqs=chrome.0.69i59i450l8.135510j0j7&sourceid=chrome&ie=UTF-8", true);

console.log(parsedUrl);
