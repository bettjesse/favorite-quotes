import React from "react";
import Button from "./Button";
import { openRegisterModal } from "../slices/registerModalSlice";
import { useAppDispatch, useAppSelector } from "../hooks/useAppHooks";

const Hero = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.auth.userInfo);

  const registerModalOpen = () => {
    dispatch(openRegisterModal());
  };

  if (userInfo) {
    // If userInfo exists, render personalized content
    return (
      <div className="bg-pink-400 min-h-screen flex justify-center items-center">
        <div className="">
          <div className="text-center p-8">
            <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
              Welcome back, {userInfo.name}!
            </p>
            <div className="mt-4 w-[45%] mx-auto">
              <Button
                label="Add My Fav Quote"
                // Add an onClick handler for adding quotes functionality
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If userInfo does not exist, render default content
  return (
    <div className="bg-pink-400 min-h-screen flex justify-center items-center">
      <div className="">
        <div className="text-center p-8">
          <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
            Discover and Save Your Favorite Quotes
          </p>
          <div className="mt-4 w-[45%] mx-auto">
            <Button
              onClick={registerModalOpen}
              label="Get Started"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
