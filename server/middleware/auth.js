import jwt from "jsonwebtoken";

const secret =
  "asjkdfa5s4df658ar64f3a54f5425253456544@#%@%^%$^!#$%@#RCFDSVV#$%";

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;
    decodedData = jwt.verify(token, secret);
    req.userId = decodedData.id;
    next();
  } catch (error) {
    console.log(error.name);
    if (error.name === "TypeError") {
      console.log("nope");
      let data = {
        message: "not authorized",
      };
      res.status(403).json({ data });
    } else {
      let resData = {
        message: "expired",
      };
      res.status(403).json({ resData });
    }
  }
};

export default auth;

