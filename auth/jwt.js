const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    id: "userId",
    isAdmin: true,
  },
  "asbc124"
);

console.log(token);
