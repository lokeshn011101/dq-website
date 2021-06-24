import React from "react";
import { useEffect, useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div className="contact w-full flex justify-end items-center">
      <form
        type="submit"
        className="cn-form h-full w-1/2 flex flex-col justify-around items-start lg:pl-10 md:pl-8 sm:pl-4 smm:pl-3"
      >
        <div className="con-tt lg:text-5xl ">GET IN TOUCH!</div>
        <div className="w-full name-contact flex justify-start items-start">
          <div className="cname w-1/2 lg:pr-8">
            <div className="ciname italic text-xl">Name</div>
            <input
              onChange={(txt) => setName(txt)}
              type="text"
              className="ciiname w-full h-10 bg-none border-2 border-black text-lg"
            />
          </div>
          <div className="ccontact w-1/2 lg:pr-8">
            <div className="cicontact italic text-xl">Contact</div>
            <input
              onChange={(txt) => setContact(txt)}
              type="text"
              className="ciicontact w-full h-10 bg-none border-2 border-black text-lg"
            />
          </div>
        </div>
        <div className="w-full email-service flex justify-start items-start">
          <div className="cemail  w-1/2 lg:pr-8">
            <div className="ciemail italic text-xl">Email*</div>
            <input
              onChange={(txt) => setEmail(txt)}
              type="text"
              className="ciiemail w-full h-10 bg-none border-2 border-black text-lg"
            />
          </div>
          <div className="cservice  w-1/2 lg:pr-8">
            <div className="ciservice italic text-xl">Select Service*</div>
            <input
              onChange={(txt) => setService(txt)}
              type="text"
              className="ciiservice w-full h-10 bg-none border-2 border-black text-lg"
            />
          </div>
        </div>
        <div className="w-full message ">
          <div className="cmsg text-xl">Message</div>
          <textarea
            onChange={(txt) => setMessage(txt)}
            type="text"
            className="cimsg lg:w-1/2 border-2 border-black text-lg"
            rows="8"
            cols="30"
          ></textarea>
        </div>
        <button
          onClick={onFormSubmit}
          className="submit-button px-10 py-4 mb-4 submit text-2xl"
          type="submit"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
