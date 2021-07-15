import React from "react";
import { useEffect, useState } from "react";
import AOS from "aos";


const Dropdown = ({ setServices }) => {
  const handleChange = (data) => {
    console.log(data);
    setServices(data);
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
    <div className="ciiservice w-full h-10 bg-none border-2 border-black text-lg">
      <ReactSelectMaterialUi
        label={` `}
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
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [winWidth, setWinWidth] = useState(0);
  const [services, setServices] = useState("");
  useEffect(() => {
    AOS.init({
      duration: 750,
    });
    setWinWidth(window.innerWidth);
  }, []);

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <div
      className="contact w-full flex lg:justify-end justify-center items-center"
      data-aos="fade-left"
    >
      <form
        type="submit"
        className="cn-form h-full lg:w-1/2 md:w-9/12 sm:w-10/12 smm:w-11/12 flex flex-col justify-around items-start lg:pl-10"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        <div className="con-tt sm:text-5xl smm:text-4xl lgg:mx-auto lgg:my-4">
          <div>GET IN TOUCH!</div>
        </div>
        <div className="w-full name-contact flex vsmm:flex-col vsmm:justify-center vsmm:items-center justify-start items-start">
          <div className="cname w-1/2 vsmm:w-10/12 lg:pr-8 vsm:px-5 vsmm:flex vsmm:flex-col vsmm:justify-center vsmm:items-center vsmm:pb-5">
            <div className="ciname italic text-xl">Name</div>
            <input
              onChange={(txt) => setName(txt)}
              type="text"
              className="ciiname w-full h-10 bg-none border-2 border-black text-lg"
            />
          </div>
          <div className="ccontact w-1/2 vsmm:w-10/12 lg:pr-8 vsm:px-5 vsmm:flex vsmm:flex-col vsmm:justify-center vsmm:items-center vsmm:pb-5">
            <div className="cicontact italic text-xl">Contact</div>
            <input
              onChange={(txt) => setContact(txt)}
              type="text"
              className="ciicontact w-full h-10 bg-none border-2 border-black text-lg"
            />
          </div>
        </div>
        <div className="w-full email-service flex vsmm:flex-col vsmm:justify-center vsmm:items-center justify-start items-start">
          <div className="cemail  w-1/2 vsmm:w-10/12 lg:pr-8 vsm:px-5 vsmm:flex vsmm:flex-col vsmm:justify-center vsmm:items-center vsmm:pb-5">
            <div className="ciemail italic text-xl">Email*</div>
            <input
              onChange={(txt) => setEmail(txt)}
              type="text"
              className="ciiemail w-full h-10 bg-none border-2 border-black text-lg"
            />
          </div>
          <div className="cservice  w-1/2 vsmm:w-10/12 lg:pr-8 vsm:px-5 vsmm:flex vsmm:flex-col vsmm:justify-center vsmm:items-center vsmm:pb-5">
            <div className="ciservice italic text-xl">Select Service*</div>
            {/* <input
              onChange={(txt) => setService(txt)}
              type="text"
              className="ciiservice w-full h-10 bg-none border-2 border-black text-lg"
            /> */}
            <Dropdown setServices={setServices} />
          </div>
        </div>
        <div className="w-full message vsm:px-5 vsmm:flex vsmm:flex-col vsmm:justify-center vsmm:items-center ">
          <div className="cmsg text-xl">Message</div>
          <textarea
            onChange={(txt) => setMessage(txt)}
            type="text"
            className="cimsg lg:w-1/2 border-2 border-black text-lg"
            rows="8"
            cols={winWidth > 425 ? "30" : "28"}
          ></textarea>
        </div>
        <div className="flex flex-row w-full vsmm:justify-center vsmm:items-center vsmm:mx-auto px-5 vsmm:py-5 vsmm:pt-8">
          <button
            onClick={onFormSubmit}
            className="submit-button px-10 py-4 mb-4 submit text-2xl"
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
