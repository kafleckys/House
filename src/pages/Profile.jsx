import React, { useState } from "react";
import { getAuth, updateProfile } from "firebase/auth";
import { db } from "../firebase.config.js";
import { updateDoc, doc } from "firebase/firestore";
import { useNavigate,Link } from "react-router-dom";
import { toast } from "react-toastify";
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'
const Profile = () => { 
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };
  //user form bata arko backed bata
  //change cha vane matra change update garne ho
  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        //for update in firestore
        const userRef = doc(db, "users", auth.currentUser.uid);
        await updateDoc(userRef, {
          name
        });
      }
    } catch (error) {
      toast.error("Could not update profle details");
    }
  };
  /////////////////////////////////////////////////
  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My profile</p>
        <button type="button" onClick={onLogout} className="logOut">
          Logout
        </button>
      </header>
      <main>
        <div className="profileDetailsHeader">
          <p className="profileDetailsText">Personal Details</p>
          <p
            className="changePersonalDetails"
            onClick={() => {
              changeDetails && onSubmit()
              setChangeDetails((prevState) => !prevState)
            }}
          >
            {changeDetails ? "done" : "change"}
          </p>
        </div>
        <div className="profileCard">
          <form>
            <input
              type="text"
              id="name"
              className={!changeDetails ? "profileName" : "profileNameActive"}
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
            />
            <input
              type="text"
              id="email"
              className={!changeDetails ? "profileEmail" : "profileEmailActive"}
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </div>

       <Link to='/create-listing' className="createListing">
 <img src={homeIcon} alt="home" />

<p>Sell or rent your home</p>
<img src={arrowRight} alt="arrow right" />
       </Link>

      </main>
    </div>
  );
};

export default Profile;
