import JWT from "jsonwebtoken";

//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
  const a = 'KJBKJMHK234245'
  try {
    const decode = JWT.verify(
      req.headers.authorization,
      a
    );
    req.user = decode;
    next();
  } catch (error) {
    console.log(error);
  }
};
