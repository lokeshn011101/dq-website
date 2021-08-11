import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";
import ReactSelectMaterialUi from "react-select-material-ui";
import axios from "axios";
import FormSendSpinner from "../components/FormSendSpinner";
import FormSendTick from "../components/FormSendTick";
import { useRouter } from "next/router";

const Dropdown = ({ setServices, setServicesError }) => {
  const handleChange = (data) => {
    console.log(data);
    setServices(data);
    setServicesError(false);
  };

  const options = [
    "Curated decor",
    "Themed event design",
    "Floristry",
    "Luxury wedding design",
    "Kids parties",
    "Customised packaging",
    "Others",
  ];

  return (
    <div className="ciip ciiservice w-full h-10 bg-none border-2 border-black text-lg">
      <ReactSelectMaterialUi
        label={" "}
        options={options}
        fullWidth={true}
        onChange={handleChange}
        SelectProps={{
          isCreatable: true,
          msgNoOptionsAvailable: "All services are selected",
          msgNoOptionsMatchFilter: "No service matches the filter",
          closeMenuOnSelect: false,
        }}
      />
    </div>
  );
};

const Contact = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [winWidth, setWinWidth] = useState(0);
  const [services, setServices] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [servicesError, setServicesError] = useState(false);
  const [invalidPhone, setInvalidPhone] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 750,
    });
    setWinWidth(window.innerWidth);
  }, []);

  const emailValidator = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return regex.test(email);
  };

  const phoneValidator = (phone) => {
    for (let x in phone)
      if (48 <= phone.charCodeAt(x) && phone.charCodeAt(x) < 58) continue;
      else return false;
    return true;
  };

  const checkAllData = () => {
    if (!email || !services) return false;
    return true;
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (!emailValidator(email)) setEmailError(true);
    if (!phoneValidator(contact)) setInvalidPhone(true);
    if (services === "") setServicesError(true);
    console.log(emailError, invalidPhone, checkAllData());
    if (emailError || invalidPhone || servicesError || !checkAllData()) {
      console.log("bad form!");
      return;
    }
    setFormSent(true);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    const response = await axios.post(
      "https://formsubmit.co/ajax/designquotient.in@gmail.com",
      {
        name: name,
        contact: contact,
        email: email,
        service: services,
        message: message,
      }
    );
    console.log(response);
    if (response.status === 200) {
      setFormSent(false);
      setFormSubmitted(true);
      setTimeout(() => {
        router.push("/");
      }, 2000);
    } else {
      setFormSent(false);
      router.push("/");
    }
  };

  return (
    <div className={`${formSent || formSubmitted ? "my-36" : ""}`}>
      <div className="overflow-hidden relative flex justify-center items-center">
        <div
          className={`contact w-full ${
            formSent || formSubmitted ? "hidden" : "flex"
          } lg:justify-end justify-center items-center`}
          data-aos="fade-left"
        >
          <form
            className="cn-form h-full lg:w-1/2 md:w-9/12 sm:w-10/12 smm:w-11/12 flex flex-col justify-around items-start lg:pl-10"
            data-aos="fade-left"
            data-aos-delay="300"
            onSubmit={onFormSubmit}
            autoComplete="off"
          >
            <div className="con-tt sm:text-5xl smm:text-4xl lgg:mx-auto lgg:my-4">
              <div>GET IN TOUCH!</div>
            </div>
            <div className="w-full name-contact flex vsmm:flex-col vsmm:justify-center vsmm:items-center justify-start items-start">
              <div className="cname w-1/2 vsmm:w-10/12 lg:pr-8 vsm:px-5 vsmm:flex vsmm:flex-col vsmm:justify-center vsmm:items-center vsmm:pb-5">
                <div className="ciname italic text-xl">Name</div>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="ciip ciiname w-full h-10 bg-none border-2 border-black text-lg"
                  name="name"
                  value={name}
                />
              </div>
              <div className="ccontact w-1/2 vsmm:w-10/12 lg:pr-8 vsm:px-5 vsmm:flex vsmm:flex-col vsmm:justify-center vsmm:items-center vsmm:pb-5">
                <div className="cicontact italic text-xl">Contact</div>
                <input
                  onChange={(e) => {
                    setContact(e.target.value);
                    setInvalidPhone(false);
                  }}
                  type="tel"
                  className="ciip ciicontact w-full h-10 bg-none border-2 border-black text-lg"
                  name="number"
                  value={contact}
                />
                {invalidPhone ? (
                  <div className="text-red-500">
                    Enter a valid Phone Number! (10 digits)
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className="w-full email-service flex vsmm:flex-col vsmm:justify-center vsmm:items-center justify-start items-start">
              <div className="cemail  w-1/2 vsmm:w-10/12 lg:pr-8 vsm:px-5 vsmm:flex vsmm:flex-col vsmm:justify-center vsmm:items-center vsmm:pb-5">
                <div className="ciemail italic text-xl">Email*</div>
                <input
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(false);
                  }}
                  type="text"
                  className="ciip ciiemail w-full h-10 bg-none border-2 border-black text-lg"
                  name="email"
                  value={email}
                />
                {emailError ? (
                  <div className="text-red-500">
                    Enter a valid Email Address!
                  </div>
                ) : (
                  <></>
                )}
              </div>
              <div className="w-1/2 vsmm:w-10/12 email-service flex vsmm:flex-col vsmm:justify-center vsmm:items-center justify-start items-start">
                <div className="cservice w-full lg:pr-8 vsm:px-5 vsmm:flex vsmm:flex-col vsmm:justify-center vsmm:items-center vsmm:pb-5">
                  <div className="ciservice italic text-xl">
                    Select Service*
                  </div>
                  <Dropdown
                    setServices={setServices}
                    setServicesError={setServicesError}
                  />
                  {servicesError ? (
                    <div className="text-red-500">Select a Service!</div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <input type="hidden" name="services" value={services}></input>
            </div>
            <div className="w-full message vsm:px-5 vsmm:flex vsmm:flex-col vsmm:justify-center vsmm:items-center ">
              <div className="cmsg italic text-xl">Message</div>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                type="text"
                className="ciip cimsg lg:w-1/2 border-2 border-black text-lg"
                rows="8"
                cols={winWidth > 425 ? "30" : "28"}
                name="message"
                value={message}
              ></textarea>
            </div>

            <div className="flex flex-row w-full vsmm:justify-center vsmm:items-center vsmm:mx-auto px-5 vsmm:py-5 vsmm:pt-8">
              <button
                className="submit-button px-10 py-4 mb-4 submit text-2xl"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
      {formSent ? <FormSendSpinner /> : <></>}
      {formSubmitted ? <FormSendTick /> : <></>}
    </div>
  );
};

export default Contact;
