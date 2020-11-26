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
  const accessToken = localStorage.getItem('ACCESS_TOKEN');

  if (accessToken) {
    return {
      'x-access-token': accessToken,
    };
  } else {
    return {};
  }
};

export const emptyFunction = () => {};


export type FixMeLater = any;
