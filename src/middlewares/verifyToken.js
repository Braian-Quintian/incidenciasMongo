import { jwtVerify } from 'jose';

export async function verifyToken(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).send({ "error": "Missing token in authorization header" });
  }
  
  try {
    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(
      authorization,
      encoder.encode(process.env.JWT_PRIVATE_KEY)
    );
    req.jwtData = jwtData;
    next();
  } catch (error) {
    res.status(400).send({ "error": "Something went wrong with token verification" });
  }
}