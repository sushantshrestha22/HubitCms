import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { LogInSchema } from "@/schema/LoginSchema";
import { postData } from "@/query/query";
import { useAuth } from "@/context/context"; // Ensure this is correctly imported
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import eye icons
import toast from "react-hot-toast";

const LoginForm = () => {
  const navigate = useNavigate();
  const { checkAuth, storeToken } = useAuth(); // Use `checkAuth` to validate and update auth state
  const [showPassword, setShowPassword] = useState(false); // State to manage password visibility

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LogInSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await postData("/admin/login", data);

      console.log(response);

      if (response.accesstoken) {
        await checkAuth();

        const access_token = response.accesstoken;
        storeToken(access_token); // Sync auth state with backend
        navigate("/");
        toast.success("Login successful!");
        // Redirect to dashboard
      } else {
        toast.error(
          response.message || "Invalid credentials, please try again."
        );
      }
    } catch (error) {
      // console.error("Login Error:", error);
      toast.error(
        error.response?.data?.message || "An error occurred, please try again."
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Card className="w-[350px] border-[1px] shadow-sm bg-white text-black">
          <CardHeader>
            <CardTitle>Log In</CardTitle>
            <CardDescription>
              Welcome back! Please login to your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="username"
                id="username"
                name="username"
                {...register("username")}
                className="flex h-10 w-full my-2 rounded-md border border-input bg-background px-3 py-2 text-black"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email.message}</p>
              )}
            </div>
            <div className="relative">
              <label htmlFor="password">Password:</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                {...register("password")}
                className="flex h-10 w-full mt-2 rounded-md border border-input bg-background px-3 py-2 text-black"
              />
              <span
                className="absolute right-3 top-10 cursor-pointer text-accent"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </span>
              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
          </CardContent>
          <CardFooter>
            <div className="space-x-2 flex flex-col items-end gap-2 w-full">
              <Link to="/login">Forgot password?</Link>
              <Button
                type="submit"
                variant="ghost"
                className="w-full "
              >
                Login
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default LoginForm;
