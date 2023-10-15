import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProfileModal() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white  text-sm font-semibold text-gray-900  mt-1.5">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 34C20.1857 34.005 18.3943 33.5945 16.7633 32.7999C16.1663 32.5096 15.5944 32.1704 15.0533 31.7859L14.8889 31.6659C13.4007 30.5675 12.1839 29.1426 11.3321 27.5007C10.451 25.8014 9.99401 23.9141 10.0001 22C10.0001 15.3726 15.3726 10 22 10C28.6274 10 33.9999 15.3726 33.9999 22C34.0059 23.9132 33.5494 25.7996 32.6691 27.4983C31.8184 29.1392 30.6034 30.5636 29.1171 31.6623C28.5564 32.0727 27.9615 32.434 27.3387 32.7423L27.2428 32.7903C25.6107 33.5892 23.8171 34.003 22 34ZM22 27.9999C20.2018 27.9964 18.5532 29.0008 17.7316 30.6003C20.4213 31.9325 23.5787 31.9325 26.2684 30.6003V30.5943C25.4458 28.9965 23.7971 27.9944 22 27.9999ZM22 25.5999C24.5993 25.6033 26.996 27.0041 28.2747 29.2671L28.2927 29.2515L28.3095 29.2371L28.2891 29.2551L28.2771 29.2647C31.3119 26.6429 32.397 22.4108 30.9983 18.6521C29.5995 14.8934 26.0117 12.4004 22.0012 12.4004C17.9907 12.4004 14.4029 14.8934 13.0041 18.6521C11.6054 22.4108 12.6905 26.6429 15.7253 29.2647C17.0048 27.0028 19.4013 25.6031 22 25.5999ZM22 24.3999C19.3491 24.3999 17.2 22.2509 17.2 19.6C17.2 16.949 19.3491 14.8 22 14.8C24.6509 14.8 26.8 16.949 26.8 19.6C26.8 20.873 26.2942 22.0939 25.3941 22.9941C24.4939 23.8942 23.273 24.3999 22 24.3999ZM22 17.2C20.6745 17.2 19.6 18.2745 19.6 19.6C19.6 20.9254 20.6745 22 22 22C23.3255 22 24.4 20.9254 24.4 19.6C24.4 18.2745 23.3255 17.2 22 17.2Z"
              fill="#2E3A59"
            />
          </svg>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  Profile
                </a>
              )}
            </Menu.Item>

            <form action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm"
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
