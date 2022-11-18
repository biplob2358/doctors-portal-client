import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");

  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, } = useForm();
  const handleSignUp = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          displayName: data.name,
        };
        toast.success("User created succerssfully");
        updateUser(userInfo)
          .then(() => {
            navigate('/');
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };
  return (
    <div className="h-[800px]  flex justify-center items-center">
      <div className="w-96 p-7">
        <h2 className="text-xl text-center">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              placeholder="name"
              className="input input-bordered w-full max-w-xs"
            />
            <p>
              {errors.name && (
                <span className="text-red-600">{errors.name.message}</span>
              )}
            </p>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email")}
              placeholder="email"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 charecter",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password Must be Upercase,Number and special charecter",
                },
              })}
              placeholder="password"
              type="password"
              className="input input-bordered w-full max-w-xs"
            />
            <p>
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </p>
          </div>

          <input
            className="btn text-white btn-accent mt-4 w-full"
            value="signup"
            type="submit"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>

        <p>
          Already Have an Account?
          <Link to="/login" className="text-primary ml-2">
            Login
          </Link>{" "}
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
