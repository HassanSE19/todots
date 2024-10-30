import React from "react";
import Layout from "components/Layout";
import { SubmitHandler, useForm } from "react-hook-form";
import { AuthValidationSchema } from "validations/authValidationSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { IAuthFormInput } from "type";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
    // const userCreds = {
    //   username: data.username,
    //   password: false,
    // };
    // loginUser(data);
    console.log("Data From Login: ", data);
    reset();
    navigate("/home");
  };

  return (
    <Layout>
      <div className="w-2/3 mx-auto items-center">
        <p className="text-center text-4xl font-semibold text-white pt-2 mb-16">
          {"Login!"}
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
            {"Login"}
          </button>
        </form>
        <div className="mb-4 mx-auto border-[1px] justify-center w-20 border-[grey] border-solid"></div>
        <p className="text-center text-white mt-4 text-sm">
          {"Don't have an account?"}
        </p>
        <p
          onClick={() => navigate("/signup")}
          className="text-center text-[#88ab33] mb-4 text-sm font-medium cursor-pointer"
        >
          {"Sign Up Now"}
        </p>
      </div>
    </Layout>
  );
};

export default Login;
