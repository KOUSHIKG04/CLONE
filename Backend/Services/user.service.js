import User from "../Models/user.models.js";

export const createUser = async ({ firstname, lastname, email, password }) => {
    
  if (!firstname || !email || !password) {
    throw new Error("All fields are required");
  }

  const user = await User.create({
    fullname: {
      firstname,
      lastname,
    },
    email,
    password,
  });

  return user;
};
