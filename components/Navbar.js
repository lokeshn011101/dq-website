import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import SmoothCollapse from "react-smooth-collapse";

const MobileAccordion = ({
  toggleMobile,
  setToggleMobile,
  navToggle,
  setNaveToggle,
}) => {
  const data = [
    ["#curated-decor", "Curated decor"],
    ["#themed-event-design", "Themed event design"],
    ["#floristry", "Floristry"],
    ["#luxury-wedding-design", "Luxury Wedding Design"],
    ["#kids-parties", "Kids Parties"],
    ["#customised-packaging", "Customised Packaging"],
  ];
  return (
    <div>
      <div
        className="w-full flex flex-row justify-end items-center cursor-pointer"
        onClick={() => {
          setToggleMobile(!toggleMobile);
        }}
      >
        <h2 className="pr-3 text-right uppercase select-none">SERVICES</h2>
        <button className="w-1/12">
          <img
            src="/MobDrp.png"
            alt="tog"
            className={
              toggleMobile === true
                ? "float-right select-none transform rotate-180"
                : "float-right select-none transform rotate-0"
            }
          />
        </button>
      </div>
      <SmoothCollapse expanded={toggleMobile}>
        {data.map((item) => {
          return (
            <div
              className="w-full text-right pt-2 accordion-text "
              onClick={() => setNaveToggle(!navToggle)}
            >
              <Link href={`/services/${item[0]}`} className="uppercase">
                {item[1]}
              </Link>
            </div>
          );
        })}
      </SmoothCollapse>
    </div>
  );
};

const Helper = ({ route, text }) => {
  return (
    <li className="menu-item">
      <Link href={`/services/${route}`}>{text}</Link>
    </li>
  );
};

const RenderItem = ({ data }) => {
  return data.map((item) => {
    return <Helper route={item[0]} text={item[1]} />;
  });
};

const Navbar = () => {
  const ref = useRef();
  const butRef = useRef();
  const [toggleMobile, setToggleMobile] = useState(false);
  const [navToggle, setNaveToggle] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (
        (ref.current && ref.current.contains(event.target)) ||
        (butRef.current && event.target.name == butRef.current.name) ||
        (butRef.current &&
          event.target.parentNode.parentNode.name == butRef.current.name)
      ) {
        return;
      }
      setNaveToggle(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const data = [
    ["#curated-decor", "Curated decor"],
    ["#themed-event-design", "Themed event design"],
    ["#floristry", "Floristry"],
    ["#luxury-wedding-design", "Luxury Wedding Design"],
    ["#kids-parties", "Kids Parties"],
    ["#customised-packaging", "Customised Packaging"],
  ];
  return (
    <nav className="navbaar sticky top-0 navbar-container w-full h-auto flex justify-end z-50">
      <div className="bg-white flex justify-center w-full  lg:items-end lg:flex-row shadow-sm">
        <div className="smm:ml-2 smm:w-4/12 lgg:w-3/12 lgg:h-auto w-2/12 h-full flex justify-center items-center lgg:items-end">
          <div className="nav-logo w-full flex justify-center items-center">
            <Image
              onClick={() => router.push("/")}
              src="/brand.png"
              width={102}
              height={102}
              className="nav-logo-im cursor-pointer"
              alt="Design Quotient"
            />
          </div>
        </div>
        <div className="navigate flex lg:flex-row items-center lg:justify-around lg:w-5/6 lg:-mr-10 lgg:hidden lgg:flex-col lgg:justify-around lgg:items-end">
          <div
            className={`${
              router.pathname === "/"
                ? "border-4 border-t-0 border-l-0 border-r-0 border-pink px-4 py-3"
                : "border-4 border-t-0 border-l-0 border-r-0 border-white px-4 py-3"
            }`}
          >
            <Link href="/" className="text-black text-md mb-5">
              HOME
            </Link>
          </div>
          <div
            className={` h-full ${
              router.pathname === "/about"
                ? "border-4 border-t-0 border-l-0 border-r-0 border-pink px-4 py-3"
                : "border-4 border-t-0 border-l-0 border-r-0 border-white px-4 py-3"
            }`}
          >
            <Link href="/about" className="text-black text-md">
              ABOUT US
            </Link>
          </div>
          <div
            className={`${
              router.pathname.includes("/services")
                ? "border-4 border-t-0 border-l-0 border-r-0 border-pink px-4 py-3 relative dropdown headerdrp"
                : "border-4 border-t-0 border-l-0 border-r-0 border-white relative dropdown headerdrp py-3 px-4"
            }`}
          >
            <nav className="navvv">
              <ul className="cf">
                <li>
                  <Link href="/services" className="text-black text-md">
                    SERVICES
                  </Link>
                  <ul className="navrenup">
                    <RenderItem data={data} />
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className={`${
              router.pathname.includes("/gallery/") ||
              router.pathname === "/gallery"
                ? "border-4 border-t-0 border-l-0 border-r-0 border-pink px-4 py-3"
                : "border-4 border-t-0 border-l-0 border-r-0 border-white px-4 py-3"
            }`}
          >
            <Link href="/gallery" className="text-black text-md">
              GALLERY
            </Link>
          </div>
          <div
            className={`${
              router.pathname === "/contact"
                ? "border-4 border-t-0 border-l-0 border-r-0 border-pink px-4 py-3"
                : "border-4 border-t-0 border-l-0 border-r-0 border-white px-4 py-3"
            }`}
          >
            <Link href="/contact" className="text-black text-md">
              CONTACT
            </Link>
          </div>
        </div>
        <button
          name="toggler"
          onClick={() => setNaveToggle(true)}
          className="toggler w-24 ml-auto focus:outline-none"
        >
          <Image
            alt="icon"
            src="https://www.flaticon.com/svg/static/icons/svg/1828/1828859.svg"
            className="w-5 h-5 rounded inline-flex lg:invisible lg:hidden lg:w-0 lg:h-0 fill-current text-black"
            height={20}
            width={20}
          />
        </button>
      </div>
      {navToggle ? (
        <>
          <div
            ref={ref}
            className="navbar-mobile-toggle overflow-scroll overflow-x-hidden fixed top-0 lg:hidden h-screen shadow-2xl bg-white z-10 w-64"
          >
            <div className="absolute w-4 h-4 right-5 top-3">
              <button
                name="toggler"
                className="focus:outline-none"
                onClick={() => setNaveToggle(false)}
                ref={butRef}
              >
                <Image
                  alt="icon"
                  src="https://www.flaticon.com/svg/static/icons/svg/1828/1828778.svg"
                  alt="cross"
                  height={16}
                  width={16}
                />
              </button>
            </div>
            <div className="oritog right-0 absolute flex w-60 flex-col items-end justify-between lg:hidden my-12">
              <div
                className="mr-6 my-3"
                onClick={() => setNaveToggle(!navToggle)}
              >
                <Link href="/" className="text-black text-md">
                  HOME
                </Link>
              </div>
              <div
                className="mr-6 my-3"
                onClick={() => setNaveToggle(!navToggle)}
              >
                <Link href="/about" className="text-black text-md">
                  ABOUT US
                </Link>
              </div>
              <div className="w-full mr-6 my-3">
                <MobileAccordion
                  navToggle={navToggle}
                  setNaveToggle={setNaveToggle}
                  toggleMobile={toggleMobile}
                  setToggleMobile={setToggleMobile}
                />
              </div>
              <div
                className="mr-6 my-3"
                onClick={() => setNaveToggle(!navToggle)}
              >
                <Link href="/gallery" className="text-black text-md">
                  GALLERY
                </Link>
              </div>
              <div
                className="mr-6 my-3"
                onClick={() => setNaveToggle(!navToggle)}
              >
                <Link href="/contact" className="text-black text-md">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
};
export default Navbar;
