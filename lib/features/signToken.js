import jwt from "jsonwebtoken";

export default function signToken(params, time) {
  const token = jwt.sign({ id: params }, process.env.JWT_SECRET, {
    expiresIn: time,
  });
  return token;
}
