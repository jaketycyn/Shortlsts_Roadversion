const auth = async (req, res, next) => {
  //finish auth/unauthenticated alter
  const authHeader = req.headers.authorization;
  console.log(authHeader);
  next();
};

export default auth;
