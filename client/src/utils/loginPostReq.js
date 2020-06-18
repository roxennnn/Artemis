const loginPostReq = async (email, pass) => {
  let resData;
  try {
    const response = await fetch("http://localhost:5000/api/auth/signin", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:5001",
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({
      //   email: email,
      //   password: pass
      // })
    });
    if (!response.ok) {
      throw new Error("Something went wrong! Response is not OK. " + response.status);
    }

    resData = await response.json();
  } catch (err) {
    console.log("Error during POST request to sign in");
    throw err;
  }
  return resData;
};

export default loginPostReq;