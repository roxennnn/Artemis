export const validateEmail = (email: FixMeLater) => {
  const emailformat = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(emailformat)) {
    return true;
  } else {
    return false;
  }
};

export const binarise = (arr: FixMeLater) => {
  const arrLength = arr.length;
  let outputValue = 0;
  for (let i = 0; i < arrLength; i++) {
    outputValue += arr[i] * Math.pow(2, i);
  }
  return outputValue;
};

export const authHeader = () => {
  const accessToken = JSON.parse(localStorage.getItem('ACCESS_TOKEN') || '{}');
  console.log(accessToken);
  if (Object.keys(accessToken).length > 0) {
    return {
      'x-access-token': accessToken,
    };
  } else {
    throw new Error('authHeader Token error');
  }
};

export const emptyFunction = () => {};

export type FixMeLater = any;
