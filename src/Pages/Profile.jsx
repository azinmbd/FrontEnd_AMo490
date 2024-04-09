import React, {useEffect } from "react";
import ProfileUpload from "../components/ProfileComps/ProfileUpload";
import ProfileHeader from "../components/ProfileComps/ProfileHeader";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Profile = () => {
  let navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, [token, navigate]);
  return (
    <React.Fragment>
      <ProfileHeader />
      <ProfileUpload />
      <Footer />
    </React.Fragment>
  );
};

export default Profile;
