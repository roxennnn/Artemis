export const validateEmail = (email) => {
  const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(emailformat)) {
    return true;
  } else {
    return false;
  }
};

export const binarise = (arr) => {
  const arrLength = arr.length;
  let outputValue = 0;
  for (let i = 0; i < arrLength; i++) {
    outputValue += arr[i]*Math.pow(2,i);
  }
  return outputValue;
}