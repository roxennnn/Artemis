import React, { useState } from "react";

import ProfileOne from "../components/ProfileOne";
import ProfileTwo from "../components/ProfileTwo";
import ProfileThree from "../components/ProfileThree";

const ProfilePage = (props) => {
  const [which, setWhich] = useState(0);

  return (
    <div>
      <button class="btn btn-warning"
        onClick={() => {
          setWhich((which+1)%3);
        }}
      >
        Change Profile Layout
      </button>
      <hr />
      {which === 0 && <ProfileOne />}
      {which === 1 && <ProfileTwo />}
      {which === 2 && <ProfileThree />}
    </div>
  );
};

export default ProfilePage;
