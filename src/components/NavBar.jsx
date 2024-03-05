import Logo from "../assets/Logo.png";
import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-white h-24 shadow-lg border border-gray-200">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
         
            <Link to="/">
              <img className="h-12 w-auto" src={Logo} alt="" />
            </Link>
         
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className={`hover:text-green-600 ${
              location.pathname === "/" ? "text-green-500" : "text-gray-600"
            } font-semibold leading-6 `}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-green-600 ${
              location.pathname === "/about"
                ? "text-green-500"
                : "text-gray-600"
            } font-semibold leading-6 `}
          >
            About Us
          </Link>
          <Link
            to="/courses"
            className={`hover:text-green-600 ${
              location.pathname === "/courses"
                ? "text-green-500"
                : "text-gray-600"
            } font-semibold leading-6 `}
          >
            Our Courses
          </Link>
          <Link
            to="/gallery"
            className={`hover:text-green-600 ${
              location.pathname === "/gallery"
                ? "text-green-500"
                : "text-gray-600"
            } font-semibold leading-6 `}
          >
            Gallery
          </Link>
          <Link
            to="/blog"
            className={`hover:text-green-600 ${
              location.pathname === "/blog" ? "text-green-500" : "text-gray-600"
            } font-semibold leading-6 `}
          >
            Blog
          </Link>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button className=" text-gray-50 bg-green-600 hover:text-white-50 hover:bg-green-400 border-solid border py-1 px-2 rounded-full w-18 text-center transition duration-200 box-border font-medium">
            Contact Us
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={Logo} alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/"
                  className="-mx-3 hover:text-green-600 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50"
                >
                  Home
                </a>
                <a
                  href="login"
                  className="-mx-3 block hover:text-green-600 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50"
                >
                  About Us
                </a>
                <a
                  href="course"
                  className="-mx-3 block hover:text-green-600 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50"
                >
                  Our Courses
                </a>
                <a
                  href="gallery"
                  className="-mx-3 block hover:text-green-600 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50"
                >
                  Gallery
                </a>
                <a
                  href="blog"
                  className="-mx-3 block hover:text-green-600 rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-50"
                >
                  Blog
                </a>
              </div>
              <div className="py-6">
                <button className=" text-gray-50 bg-green-600 hover:text-white-50 hover:bg-green-400 border-solid border py-1 px-2 rounded-full w-18 text-center transition duration-200 box-border font-medium">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
