import React from "react";
import bg from "../../../assets/images/appointment.png";
import PrimaruButton from "../../../components/PrimaruButton/PrimaruButton";

const Contact = () => {
  return (
    <section
      className=" text-center rounded-xl py-8"
      style={{
        background: `url(${bg})`,
      }}
    >
      <div>
        <h4 className="text-primary text-lg font-bold">Contact Us</h4>
        <h2 className="text-3xl text-white">Stay connected with us</h2>
      </div>
      <div className="tetx-center ">
        <form className="">
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered w-full mb-4 mt-4 max-w-xs"
          />
          <br />
          <input
            type="text"
            placeholder="Subject"
            className="input input-bordered w-full mb-4  max-w-xs"
          />
          <br />
          <input
            type="text"
            placeholder="Your message"
            className="input input-bordered w-full rounded-xl mb-4  max-w-xs h-32"
          />
        </form>
        <PrimaruButton>Submit</PrimaruButton>
      </div>
    </section>
  );
};

export default Contact;
