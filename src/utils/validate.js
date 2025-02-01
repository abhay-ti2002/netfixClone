export const checkValidData = (email, password, fullName) => {
  const userEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const userPassword =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  const userName = /^[a-zA-Z]/.test(fullName);

  if (!userEmail) {
    return "Email is not valid 😒";
  }

  if (!userPassword) {
    return "enter a correct password 👺";
  }
  if (!userName) {
    return "UserName is not valid 😒";
  }

  return null;
};
