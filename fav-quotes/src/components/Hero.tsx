
import Button from "./Button";
import { openRegisterModal } from "../slices/registerModalSlice";
import { openQuoteModal } from "../slices/createQuoteModal";
import { useAppDispatch, useAppSelector } from "../hooks/useAppHooks";
import Spinner from "./Spinner";

const Hero = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.auth.userInfo);

  const registerModalOpen = () => {
    dispatch(openRegisterModal());
  };
  const quoteModalOpen = ()=> {
dispatch(openQuoteModal())
  }

  if (userInfo) {
    // If userInfo exists, render personalized content
    return (
      <div className="bg-pink-400 min-h-screen flex justify-center items-center">
        <div className="">
          <div className="text-center p-8">
            
            <p className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold">
              Welcome back, {userInfo.name}!
            </p>
            <div className="mt-4 md:w-[45%] mx-auto">
              <Button
                label="Add My Fav Quote"
                onClick={quoteModalOpen}
                
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
