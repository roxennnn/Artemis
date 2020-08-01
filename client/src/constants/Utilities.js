export const validateEmail = (email) => {
  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(emailformat)) {
    return true;
  } else {
    return false;
  }
};
