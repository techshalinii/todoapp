import jwt from "jsonwebtoken";
//process.env.NODE_ENV === "Development" ? "lax" : 
// process.env.NODE_ENV === "Development" ? false : 
export const sendCookie = (user, res, message, statusCode = 200) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 15 * 60 * 1000,
      sameSite: "none",
      secure:true,

    })
    .json({
      success: true,
      message,
    });

};