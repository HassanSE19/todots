import React from "react";
import { useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAuthFormInput, ISignupProps } from "type";
import LayoutContainer from "containers/LayoutContainer";
import AuthValidationSchema from "validations/authValidationSchema";

const SignUp: React.FC<ISignupProps> = ({ signup }) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IAuthFormInput>({
    resolver: yupResolver(AuthValidationSchema),
  });

  const onSubmit: SubmitHandler<IAuthFormInput> = (data) => {
    signup(data);
    reset();
    window.location.replace("http://localhost:3000/");
  };

  return (
    <LayoutContainer>
      <div className="w-2/3 mx-auto items-center">
        <p className="text-center text-4xl font-semibold text-white pt-2 mb-16">
          {"Sign Up!"}
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center justify-center"
        >
          <input
            type="text"
            placeholder="Username"
            {...register("username", { required: true })}
            className="text-white bg-[#1f2937] rounded-2xl px-4 py-1 w-4/5 md:w-full m-1 focus:outline-none focus:ring-0"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">
              {errors.username.message}
            </p>
          )}
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="text-white bg-[#1f2937] mt-2 rounded-2xl px-4 py-1 w-4/5 md:w-full m-1 focus:outline-none focus:ring-0"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password.message}
            </p>
          )}
          <button
            type="submit"
            className="mt-8 rounded-2xl m-2 text-white bg-[#88ab33] w-2/5 px-4 py-2 shadow-md hover:text-[#88ab33] hover:bg-white transition duration-200 ease-in"
          >
            {"Sign Up"}
          </button>
        </form>
        <div className="mb-4 mx-auto border-[1px] justify-center w-20 border-[grey] border-solid"></div>
        <p className="text-center text-white mt-4 text-sm">
          {"Already have an account?"}
        </p>
        <p
          onClick={() => navigate("/login")}
          className="text-center text-[#88ab33] mb-4 text-sm font-medium cursor-pointer"
        >
          {"Login Now"}
        </p>
      </div>
    </LayoutContainer>
  );
};

export default SignUp;
