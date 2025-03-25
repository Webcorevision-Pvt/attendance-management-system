import React, { useState, useEffect } from "react";
import { BiPhoneCall, BiSolidSun, BiSolidMoon } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("dark theme");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("light theme");
    }
  }, [theme]);
  return (
    <div>
      <header
        data-aos="fade"
        data-aos-duration="300"
        className="relative z-[99] bg-violet-900 border-b-[4px] border-[#0070f3]/50"
      >
        <nav className="flex items-center justify-between h-[70px] px-10 text-white">
          {/* Logo Section */}
          <div className="text-2xl md:text-3xl font-bold font-bold w-full text-left pl-10">
            <a href="#">
              LOGISTICS{" "}
              <span className="inline-block font-bold text-[#0070f3]">WEB</span>
            </a>
          </div>
          {/* Desktop Menu Section */}
          <div className="hidden md:block">
            <ul className="flex gap-10 items-center ">
              <li className="group relative cursor-pointer">
                <a href="/#home" className="flex items-center gap-[2px] h-[72px]">
                  Home{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                {/*dropdown section*/}
                <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 text-black rounded-md group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Services</li>
                    <li className="whitespace-nowrap p-2 hover:bg-violet-200">
                      About Us
                    </li>
                    <li className="whitespace-nowrap p-2 hover:bg-violet-200">
                      Privacy Policy
                    </li>
                  </ul>
                </div>
              </li>
              <li className="group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Services{" "}
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                {/*dropdown full width section*/}
                <div className="absolute -left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 shadow-md p-2 text-black rounded-md group-hover:block">
                  <div className="flex items-center gap-4">
                    <div className="overflow-hidden">
                      <img
                        className="max-h-[400px] w-full rounded-b-3xl object-fill"
                        src="https://picsum.photos/id/17/1000"
                        alt="not found"
                      />
                    </div>
                    <div className="col-span-2">
                      <h1 className="text-2xl font-semibold pb-3">
                        Best Selling
                      </h1>
                      <p className="text-sm text-slate-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Rem, temporibus rerum. Illo facere, dolore quia eligendi
                        facilis ullam libero inventore molestiae animi explicabo
                        mollitia veritatis, tenetur delectus iure doloribus
                        corporis fuga dignissimos dolorem accusantium expedita
                        ab tempore sequi accusamus corrupti! Optio consectetur
                        nam odit! Tempore odio facilis cupiditate nam
                        distinctio?
                        <div className="grid grid-cols-3">
                          <div>
                            <ul className="mt-3 flex flex-col gap-2">
                              <h1 className="pb-1 text-xl font-semibold">
                                Development
                              </h1>
                              <li className="cursor-pointer text-black/80 hover:text-[#0070f3]">
                                Web Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-[#0070f3]">
                                Mobile Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-[#0070f3]">
                                Software Development
                              </li>
                            </ul>
                          </div>
                          <div>
                            <ul className="mt-3 flex flex-col gap-2">
                              <h1 className="pb-1 text-xl font-semibold">
                                Development
                              </h1>
                              <li className="cursor-pointer text-black/80 hover:text-[#0070f3]">
                                Web Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-[#0070f3]">
                                Mobile Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-[#0070f3]">
                                Software Development
                              </li>
                            </ul>
                          </div>
                          <div className="mt-3 flex-col gap-2">
                            <img
                              src="https://picsum.photos/id/15/120"
                              alt="not found"
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li className="whitespace-nowrap">Contact us</li>
              <li>
                <div className="flex items-center gap-8">
                  <div className="text-lg">
                    <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-[#0070f3] hover:bg-[#0070f3]/90" />
                  </div>
                  <div>
                    <p className="whitespace-nowrap">Call us on</p>
                    <p className="whitespace-nowrap">
                      <a href="tel: +91123456789">+91 123456789</a>
                    </p>
                  </div>
                </div>
              </li>
              {/* light and dark mode switcher*/}
              {theme === "dark" ? (
                <BiSolidSun
                  onClick={() => setTheme("light")}
                  className="text-2xl"
                />
              ) : (
                <BiSolidMoon
                  onClick={() => setTheme("dark")}
                  className="text-2xl"
                />
              )}
            </ul>
          </div>
          {/*Mobile menu section*/}
          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                onClick={() => setTheme("light")}
                className="text-2xl"
              />
            ) : (
              <BiSolidMoon
                onClick={() => setTheme("dark")}
                className="text-2xl"
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className=" cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;