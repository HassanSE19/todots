import React from "react";
import { useNavigate } from "react-router-dom";
import LayoutContainer from "containers/LayoutContainer";
import flagIcon from "assets/images/flagIcon.png";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <LayoutContainer>
      <div className="mx-auto grid place-items-center text-center px-8">
        <div>
          <img src={flagIcon} className="w-20 h-20 mx-auto" />
          <p className="mt-10 !text-3xl !leading-snug md:!text-4xl">
            <b>Error 404 </b>
            <br />
          </p>
          <p className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
            {
              "The page you are trying to access does not exist. Please consider going back home."
            }
          </p>
          <button
            className="w-full p-4 md:w-[8rem] bg-[gray] rounded-lg"
            onClick={() => navigate("/", { replace: true })}
          >
            back home
          </button>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default NotFound;
