import { useEffect, useState } from "react";
import "./App.css";

import Header from "./components/Header";
import banner from "./images/Frame 1.png";
import manager from "./images/medium-shot-smiley-man-warehouse.png";
import car from "./images/lorry-standing-outdoors-near-warehouse.png";
import transport from "./images/many-transport-trucks-parked-service-station-sunset-ai-generative.png";
import order from "./images/182155-indicador-otif-o-que-e-e-como-calcular-a-performance-de-logistica.png";
import forward from "./images/Fig-01-Freight-Forwarding-1.png";
import clearce from "./images/35-min.png";
import about from "./images/temp_2844 1.png";
import contactImage from "./images/marcin-jozwiak-oh0DITWoHi4-unsplash 1.png";
function App() {
  return (
    <>
      <div className=" lg:container md:container max-sm:container  sm:container font-[Inter] mx-auto pt-8">
        <Header></Header>
      </div>
      <div className="relative mt-8 mb-14 max-sm:m-0">
        <img src={banner} alt="banner" className="w-full " />
        <p className="font-semibold lg:text-3xl left-20  text-white top-[20%] max-sm:text-base  max-sm:top-[8%] max-sm:left-5 absolute sm:text-2xl  ">
          Your Trusted Logistics
        </p>
        <p className="font-semibold lg:text-3xl left-20 sm:text-2xl max-sm:text-base max-sm:top-[20%] text-white top-[30%]   max-sm:left-5 absolute">
          We move the world
        </p>
        <p className=" lg:text-xl sm:text-base text-white top-[40%] max-w-md sm:max-w-sm left-20 absolute  max-sm:left-5 max-sm:text-xs max-sm:max-w-xs">
          Logistics companies play a crucial role in the global economy. They
          help businesses to get their products to market quickly and
          efficiently
        </p>
      </div>
      <div className="lg:container md:container max-sm:container sm:container text-[#262627] font-[Inter] mx-auto pt-8">
        <div className="flex flex-col items-center mb-8">
          <hr className="border-[#9C422B] w-32 h-2 border-t-2"></hr>
          <p className="text-2xl font-semibold max-sm:text-lg">
            Our Logistics Services
          </p>
        </div>
        <div className="flex justify-between mb-6 max-sm:block">
          <div className="p-5 bg-[#F5F5F5] w-[32%] rounded-md max-sm:flex max-sm:items-center max-sm:w-full max-sm:p-2 max-sm:mb-5">
            <img src={transport} alt="" className="w-full max-sm:w-[40%]" />
            <div className="max-sm:ml-2">
              <p className="font-medium text-xl py-3 max-sm:text-base max-sm:py-0 ">
                Transportation
              </p>
              <p className=" text-sm max-sm:font-light ">
                Moving goods from one location to another using a variety of
                modes of transport, such as trucks, trains, ships, and
                airplanes.
              </p>
            </div>
          </div>
          <div className="p-5 bg-[#F5F5F5] w-[32%] rounded-md max-sm:flex max-sm:items-center max-sm:w-full max-sm:p-2 max-sm:mb-5">
            <img src={car} alt="" className="w-full max-sm:w-[40%]" />
            <div className="max-sm:ml-2">
              <p className="font-medium text-xl py-3 max-sm:text-base max-sm:py-0">
                Warehousing
              </p>
              <p className=" text-sm max-sm:font-light">
                Warehousing can help businesses to improve their inventory
                management and ensure that they have the products they need
                available when they need them.
              </p>
            </div>{" "}
          </div>
          <div className="p-5 bg-[#F5F5F5] w-[32%] rounded-md max-sm:flex max-sm:items-center max-sm:w-full max-sm:p-2 max-sm:mb-5">
            <img src={manager} alt="" className="w-full max-sm:w-[40%]" />
            <div className="max-sm:ml-2">
              <p className="font-medium text-xl py-3 max-sm:text-base max-sm:py-0">
                Inventory management
              </p>
              <p className=" text-sm max-sm:font-light">
                Inventory management can help businesses to reduce costs,
                improve customer service, and make better decisions about their
                supply chain.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mb-14 max-sm:block">
          <div className="p-5 bg-[#F5F5F5] w-[32%] rounded-md max-sm:flex max-sm:items-center max-sm:w-full max-sm:p-2 max-sm:mb-5">
            <img src={order} alt="" className="w-full max-sm:w-[40%]" />
            <div className="max-sm:ml-2">
              <p className="font-medium text-xl py-3  max-sm:text-base max-sm:py-0">
                Order fulfillment
              </p>
              <p className=" text-sm max-sm:font-light">
                Processing customer orders and ensuring that they are delivered
                on time and in full
              </p>
            </div>
          </div>
          <div className="p-5 bg-[#F5F5F5] w-[32%] rounded-md  max-sm:flex max-sm:items-center max-sm:w-full max-sm:p-2 max-sm:mb-5">
            <img src={forward} alt="" className="w-full max-sm:w-[40%]" />
            <div className="max-sm:ml-2">
              <p className="font-medium text-xl py-3 max-sm:text-base max-sm:py-0">
                Freight forwarding
              </p>
              <p className=" text-sm max-sm:font-light">
                Managing the transportation and logistics of goods on behalf of
                businesses.
              </p>
            </div>
          </div>
          <div className="p-5 bg-[#F5F5F5] w-[32%] rounded-md  max-sm:flex max-sm:items-center max-sm:w-full max-sm:p-2 max-sm:mb-5">
            <img src={clearce} alt="" className="w-full max-sm:w-[40%]" />
            <div className="max-sm:ml-2">
              <p className="font-medium text-xl py-3 max-sm:text-base max-sm:py-0">
                Customs clearance
              </p>
              <p className=" text-sm max-sm:font-light">
                Assisting businesses with the process of clearing their goods
                through customs.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mb-8">
          <hr className="border-[#9C422B] w-32 h-2 border-t-2"></hr>
          <p className="text-2xl font-semibold max-sm:text-lg">About Us</p>
        </div>
        <div className="lg:flex items-center md:items-stretch justify-between lg:mb-14 max-sm:block sm:block md:flex ">
          <img src={about} className="lg:w-[50%] md:w-[50%] sm:w-full" />
          <div className="md:w-[48%] lg:w-[45%] ">
            <p className="font-bold lg:text-2xl mb-8 md:mb-6 max-sm:mb-4 max-sm:mt-4 max-sm:text-lg sm:mb-4 sm:text-xl sm:mt-4">
              Solution for Logistics
            </p>
            <p className="lg:mb-5 lg:text-base md:text-sm md:mb-4 max-sm:mb-4 sm:mb-4">
              At a Company, we're committed to ensuring that our customers
              receive their orders in a timely and cost-effective manner. That's
              why we take logistics very seriously and have developed an
              extensive logistics network to meet our customers' needs.
            </p>
            <p className="lg:mb-5 lg:text-base  md:text-sm md:mb-4 max-sm:mb-4 sm:mb-4">
              We work closely with a range of logistics partners to ensure that
              our products are shipped efficiently and safely to our customers
              around the world. Our logistics team has years of experience in
              managing transportation and customs clearance, and we're able to
              provide our customers with flexible delivery options that meet
              their specific requirements.
            </p>
            <p className=" lg:text-base md:text-sm ">
              We offer a range of transportation options to ensure that our
              customers receive their orders on time and in good condition. Our
              products are typically transported via road, sea, or air,
              depending on the specific requirements of each customer. We work
              with trusted transportation partners to ensure that our products
              are transported safely and efficiently.
            </p>
          </div>
        </div>
      </div>
      <div className=" back-image  py-7 mt-14">
        <div className="lg:container md:container max-sm:container sm:container text-[#262627] font-[Inter] mx-auto pt-8">
          <div className="flex justify-between max-sm:flex-col max-sm:order-1 ">
            <div className="md:w-48% max-sm:order-2 max-sm:mt-6 sm:w-[45%]">
              <p className="font-semibold lg:text-3xl md:text-2xl text-white ">
                Connect with Us Today for Expert <br></br> Industrial Solutions!
              </p>
              <div className="flex items-center mt-8">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="6" fill="white" />
                  <path
                    d="M24 24H8C6.89543 24 6 23.1046 6 22V9.913C6.04661 8.84255 6.92853 7.99899 8 8H24C25.1046 8 26 8.89543 26 10V22C26 23.1046 25.1046 24 24 24ZM8 11.868V22H24V11.868L16 17.2L8 11.868ZM8.8 10L16 14.8L23.2 10H8.8Z"
                    fill="#2B354B"
                  />
                </svg>
                <p className="text-white ml-6">newcompany@gmail.com</p>
              </div>
              <div className="flex items-center mt-5">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="6" fill="white" />
                  <path
                    d="M12.7421 12.6819C11.669 13.5937 11.2758 15.2567 12.2024 16.5908C13.0695 17.8392 14.1618 18.9313 15.4099 19.798C16.7441 20.7244 18.407 20.3311 19.3187 19.2579L19.3289 19.2626C20.4934 19.8021 21.7304 20.1718 23 20.3603V23L22.9989 23L22.9961 23C15.0215 23.0113 8.99148 16.9111 9.00001 9.00359V9H11.6394L11.6395 9.00117C11.828 10.2706 12.1976 11.5065 12.7371 12.6711L12.7421 12.6819ZM22.9989 25H24C24.5523 25 25 24.5523 25 24V19.4977C25 19.0021 24.637 18.5813 24.1468 18.5086L23.2926 18.3818C22.2123 18.2215 21.1605 17.9069 20.1695 17.4478L19.4166 17.0991C18.9804 16.897 18.462 17.034 18.1826 17.4253L17.8418 17.9024C17.5431 18.3206 16.9728 18.4484 16.5506 18.1552C15.4984 17.4245 14.5761 16.5024 13.845 15.4499C13.5518 15.0277 13.6796 14.4574 14.0978 14.1587L14.5748 13.8181C14.9661 13.5386 15.1031 13.0202 14.901 12.5839L14.5518 11.8303C14.0927 10.8394 13.7782 9.78774 13.6179 8.70749L13.491 7.85316C13.4183 7.36296 12.9974 7 12.5019 7H8.00001C7.44773 7 7.00001 7.44772 7.00001 8V9.00143C6.99029 18.0079 13.9102 25.0129 22.9989 25Z"
                    fill="#2B354B"
                  />
                </svg>

                <p className="text-white ml-6">+993-12-34-56</p>
              </div>
              <div className="flex items-center mt-5">
                <p className="text-white      mr-4">Social links :</p>{" "}
                <svg
                  className="mr-4 hover:cursor-pointer"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="6" fill="white" />
                  <path
                    d="M6.00195 16.002C6.00312 20.9214 9.58036 25.1101 14.439 25.881V18.892H11.902V16.002H14.442V13.802C14.3284 12.7596 14.6845 11.7206 15.4136 10.967C16.1427 10.2133 17.1693 9.82306 18.215 9.90204C18.9655 9.91417 19.7141 9.98101 20.455 10.102V12.561H19.191C18.7558 12.504 18.3183 12.6478 18.0017 12.9517C17.6851 13.2557 17.5237 13.6869 17.563 14.124V16.002H20.334L19.891 18.893H17.563V25.881C22.8174 25.0506 26.502 20.2518 25.9475 14.9611C25.3929 9.67041 20.7932 5.73997 15.4808 6.01722C10.1683 6.29447 6.0028 10.6824 6.00195 16.002Z"
                    fill="#13151D"
                  />
                </svg>
                <svg
                  className="mr-4 hover:cursor-pointer"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="6" fill="white" />
                  <path
                    d="M23.995 10.688C24.8914 10.1521 25.5622 9.30823 25.882 8.31399C25.0397 8.81379 24.118 9.16587 23.157 9.35499C21.8246 7.94552 19.7135 7.60251 18.0034 8.51764C16.2933 9.43277 15.4075 11.3795 15.841 13.27C12.3906 13.0968 9.17598 11.4669 6.99702 8.78599C5.85986 10.7474 6.44097 13.2548 8.32502 14.516C7.64373 14.4941 6.97754 14.3096 6.38202 13.978C6.38202 13.996 6.38202 14.014 6.38202 14.032C6.38241 16.0751 7.82239 17.8351 9.82502 18.24C9.19308 18.4119 8.53022 18.4372 7.88702 18.314C8.45022 20.0613 10.0606 21.2583 11.896 21.294C10.3758 22.4871 8.49849 23.1342 6.56602 23.131C6.22349 23.1315 5.88123 23.1118 5.54102 23.072C7.50341 24.333 9.78738 25.0023 12.12 25C15.3653 25.0223 18.484 23.7429 20.7787 21.448C23.0734 19.1531 24.3526 16.0342 24.33 12.789C24.33 12.603 24.3257 12.418 24.317 12.234C25.1575 11.6266 25.8828 10.8741 26.459 10.012C25.676 10.3591 24.8455 10.5869 23.995 10.688Z"
                    fill="#13151D"
                  />
                </svg>
                <svg
                  className="mr-4 hover:cursor-pointer"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="32" height="32" rx="6" fill="white" />
                  <path
                    d="M16.002 25.041C13.542 25.041 13.252 25.028 12.292 24.986C11.5433 24.9614 10.8044 24.8092 10.107 24.536C8.90026 24.0664 7.94609 23.1119 7.47695 21.905C7.21426 21.205 7.07257 20.4655 7.05795 19.718C7.00195 18.76 7.00195 18.446 7.00195 16.005C7.00195 13.538 7.01495 13.25 7.05795 12.295C7.07289 11.5485 7.21457 10.81 7.47695 10.111C7.94558 8.90253 8.9013 7.94718 10.11 7.479C10.8086 7.21521 11.5473 7.07315 12.294 7.059C13.249 7.005 13.563 7.005 16.002 7.005C18.482 7.005 18.767 7.018 19.712 7.059C20.4605 7.07327 21.2012 7.21531 21.902 7.479C23.1103 7.94771 24.0658 8.90288 24.535 10.111C24.8021 10.8202 24.9445 11.5703 24.956 12.328C25.012 13.286 25.012 13.599 25.012 16.039C25.012 18.479 24.998 18.799 24.956 19.746C24.9411 20.4942 24.799 21.2344 24.536 21.935C24.0656 23.1427 23.11 24.0976 21.902 24.567C21.2022 24.8292 20.4631 24.9709 19.716 24.986C18.761 25.041 18.448 25.041 16.002 25.041ZM15.968 8.588C13.522 8.588 13.268 8.6 12.313 8.643C11.7429 8.65056 11.1784 8.75575 10.644 8.954C9.85471 9.25601 9.23018 9.878 8.92495 10.666C8.72517 11.2063 8.61996 11.777 8.61395 12.353C8.56095 13.322 8.56095 13.576 8.56095 16.005C8.56095 18.405 8.56995 18.696 8.61395 19.659C8.62291 20.2292 8.72805 20.7938 8.92495 21.329C9.23063 22.1165 9.85505 22.738 10.644 23.04C11.1781 23.2396 11.7428 23.3448 12.313 23.351C13.281 23.407 13.536 23.407 15.968 23.407C18.421 23.407 18.675 23.395 19.622 23.351C20.1924 23.3441 20.7573 23.2389 21.292 23.04C22.0764 22.7354 22.6969 22.1153 23.002 21.331C23.2014 20.7903 23.3065 20.2193 23.313 19.643H23.324C23.367 18.687 23.367 18.432 23.367 15.989C23.367 13.546 23.356 13.289 23.313 12.334C23.304 11.7645 23.1988 11.2005 23.002 10.666C22.6976 9.88058 22.077 9.2593 21.292 8.954C20.7574 8.75475 20.1924 8.64953 19.622 8.643C18.655 8.588 18.402 8.588 15.968 8.588ZM16.002 20.624C14.1319 20.6252 12.4454 19.4997 11.7288 17.7725C11.0123 16.0452 11.4069 14.0563 12.7286 12.7335C14.0503 11.4106 16.0388 11.0143 17.7667 11.7293C19.4946 12.4444 20.6215 14.13 20.622 16C20.6192 18.5511 18.553 20.619 16.002 20.624ZM16.002 12.998C14.3451 12.998 13.002 14.3412 13.002 15.998C13.002 17.6549 14.3451 18.998 16.002 18.998C17.6588 18.998 19.002 17.6549 19.002 15.998C18.9981 14.3427 17.6572 13.0019 16.002 12.998ZM20.802 12.285C20.2074 12.2828 19.7269 11.7996 19.728 11.205C19.7291 10.6104 20.2114 10.129 20.806 10.129C21.4005 10.129 21.8828 10.6104 21.884 11.205C21.8842 11.4919 21.7702 11.767 21.5672 11.9697C21.3642 12.1723 21.0888 12.2858 20.802 12.285Z"
                    fill="#13151D"
                  />
                </svg>
              </div>
            </div>

            <div className="  md:w-2/4 max-sm:order-1 sm:w-[48%]">
              <div className="lg:mb-8 md:w-full md:mb-4 lg:flex ">
                <input
                  type="text"
                  className="lg:w-60 md:w-full md:mb-4 h-12 rounded-md lg:mr-5  md:mr-0 max-sm:w-full max-sm:mb-4 sm:w-full sm:mb-4 "
                  placeholder="Name-Surname"
                ></input>
                <input
                  type="email"
                  className="lg:w-60 h-12 md:w-full md:mb-0 rounded-md  max-sm:w-full max-sm:mb-4 sm:w-full sm:mb-4"
                  placeholder="Email"
                ></input>
              </div>
              <div className="lg:mb-8  md:mb-4 max-sm:w-full">
                <input
                  type="text"
                  className="lg:w-60 h-12 rounded-md lg:mr-5 md:w-full md:mb-4 max-sm:w-full max-sm:mb-4 sm:w-full sm:mb-4"
                  placeholder="Company"
                ></input>
                <input
                  type="tel"
                  className="lg:w-60 h-12 rounded-md md:w-full md:mb-4 max-sm:w-full max-sm:mb-4 sm:w-full sm:mb-4 "
                  placeholder="Phone"
                ></input>
              </div>
              <textarea
                placeholder="Content"
                rows={25}
                className="w-full h-64 p-4 rounded-md"
              ></textarea>
              <button className="bg-[#9C422B] w-full text-white rounded-md h-12 ">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:container md:container max-sm:container sm:container font-[Inter] mx-auto pt-8 ">
        <div className="bg-[#2B354B]  flex flex-col items-center w-3/5  mx-auto py-8 md:w-3/5 max-sm:w-full sm:w-[80%]">
          <p className="font-semibold text-2xl mb-5 md:text-xl text-white max-sm:text-base">
            Lorem ipsum dolor sit amet consectetur
          </p>
          <p className="  mb-5 w-2/3 text-center text-white max-sm:text-xs">
            Lorem ipsum dolor sit amet consectetur. Senectus quam nibh accumsan
            ac egestas id odio enim aliquam.
          </p>
          <button className="bg-[#9C422B] text-white w-44 h-12 rounded-md text-xl max-sm:w-28 max-sm:text-sm">
            Book Now
          </button>
        </div>
      </div>
      <div className="bg-[#13151D] pb-10 ">
        <div className=" lg:container md:container max-sm:container sm:container  font-[Inter] mx-auto pt-8">
          <div className="h-12 w-32 bg-white flex max-sm:w-20 max-sm:h-10"></div>
          <div className="flex justify-between items-center max-sm:flex-col">
            <div className="flex items-end justify-between w-2/3 max-sm:w-full ">
              <p className="text-white">Privacy policy</p>
              <div className="flex text-white flex-col">
                <p className="mb-4">Abu-Dhabi</p>
                <p className="mb-4">0164,Coli</p>
                <p>Norway</p>
              </div>
              <div className="flex text-white flex-col">
                <p className="mb-4">test@gmail.com</p>
                <p>+996-12-34-56</p>
              </div>
            </div>
            <div className="flex max-sm:mt-5 ">
              <svg
                className="mr-4 hover:cursor-pointer"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="6" fill="white" />
                <path
                  d="M6.00195 16.002C6.00312 20.9214 9.58036 25.1101 14.439 25.881V18.892H11.902V16.002H14.442V13.802C14.3284 12.7596 14.6845 11.7206 15.4136 10.967C16.1427 10.2133 17.1693 9.82306 18.215 9.90204C18.9655 9.91417 19.7141 9.98101 20.455 10.102V12.561H19.191C18.7558 12.504 18.3183 12.6478 18.0017 12.9517C17.6851 13.2557 17.5237 13.6869 17.563 14.124V16.002H20.334L19.891 18.893H17.563V25.881C22.8174 25.0506 26.502 20.2518 25.9475 14.9611C25.3929 9.67041 20.7932 5.73997 15.4808 6.01722C10.1683 6.29447 6.0028 10.6824 6.00195 16.002Z"
                  fill="#13151D"
                />
              </svg>
              <svg
                className="mr-4 hover:cursor-pointer"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="6" fill="white" />
                <path
                  d="M23.995 10.688C24.8914 10.1521 25.5622 9.30823 25.882 8.31399C25.0397 8.81379 24.118 9.16587 23.157 9.35499C21.8246 7.94552 19.7135 7.60251 18.0034 8.51764C16.2933 9.43277 15.4075 11.3795 15.841 13.27C12.3906 13.0968 9.17598 11.4669 6.99702 8.78599C5.85986 10.7474 6.44097 13.2548 8.32502 14.516C7.64373 14.4941 6.97754 14.3096 6.38202 13.978C6.38202 13.996 6.38202 14.014 6.38202 14.032C6.38241 16.0751 7.82239 17.8351 9.82502 18.24C9.19308 18.4119 8.53022 18.4372 7.88702 18.314C8.45022 20.0613 10.0606 21.2583 11.896 21.294C10.3758 22.4871 8.49849 23.1342 6.56602 23.131C6.22349 23.1315 5.88123 23.1118 5.54102 23.072C7.50341 24.333 9.78738 25.0023 12.12 25C15.3653 25.0223 18.484 23.7429 20.7787 21.448C23.0734 19.1531 24.3526 16.0342 24.33 12.789C24.33 12.603 24.3257 12.418 24.317 12.234C25.1575 11.6266 25.8828 10.8741 26.459 10.012C25.676 10.3591 24.8455 10.5869 23.995 10.688Z"
                  fill="#13151D"
                />
              </svg>
              <svg
                className="mr-4 hover:cursor-pointer"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="6" fill="white" />
                <path
                  d="M16.002 25.041C13.542 25.041 13.252 25.028 12.292 24.986C11.5433 24.9614 10.8044 24.8092 10.107 24.536C8.90026 24.0664 7.94609 23.1119 7.47695 21.905C7.21426 21.205 7.07257 20.4655 7.05795 19.718C7.00195 18.76 7.00195 18.446 7.00195 16.005C7.00195 13.538 7.01495 13.25 7.05795 12.295C7.07289 11.5485 7.21457 10.81 7.47695 10.111C7.94558 8.90253 8.9013 7.94718 10.11 7.479C10.8086 7.21521 11.5473 7.07315 12.294 7.059C13.249 7.005 13.563 7.005 16.002 7.005C18.482 7.005 18.767 7.018 19.712 7.059C20.4605 7.07327 21.2012 7.21531 21.902 7.479C23.1103 7.94771 24.0658 8.90288 24.535 10.111C24.8021 10.8202 24.9445 11.5703 24.956 12.328C25.012 13.286 25.012 13.599 25.012 16.039C25.012 18.479 24.998 18.799 24.956 19.746C24.9411 20.4942 24.799 21.2344 24.536 21.935C24.0656 23.1427 23.11 24.0976 21.902 24.567C21.2022 24.8292 20.4631 24.9709 19.716 24.986C18.761 25.041 18.448 25.041 16.002 25.041ZM15.968 8.588C13.522 8.588 13.268 8.6 12.313 8.643C11.7429 8.65056 11.1784 8.75575 10.644 8.954C9.85471 9.25601 9.23018 9.878 8.92495 10.666C8.72517 11.2063 8.61996 11.777 8.61395 12.353C8.56095 13.322 8.56095 13.576 8.56095 16.005C8.56095 18.405 8.56995 18.696 8.61395 19.659C8.62291 20.2292 8.72805 20.7938 8.92495 21.329C9.23063 22.1165 9.85505 22.738 10.644 23.04C11.1781 23.2396 11.7428 23.3448 12.313 23.351C13.281 23.407 13.536 23.407 15.968 23.407C18.421 23.407 18.675 23.395 19.622 23.351C20.1924 23.3441 20.7573 23.2389 21.292 23.04C22.0764 22.7354 22.6969 22.1153 23.002 21.331C23.2014 20.7903 23.3065 20.2193 23.313 19.643H23.324C23.367 18.687 23.367 18.432 23.367 15.989C23.367 13.546 23.356 13.289 23.313 12.334C23.304 11.7645 23.1988 11.2005 23.002 10.666C22.6976 9.88058 22.077 9.2593 21.292 8.954C20.7574 8.75475 20.1924 8.64953 19.622 8.643C18.655 8.588 18.402 8.588 15.968 8.588ZM16.002 20.624C14.1319 20.6252 12.4454 19.4997 11.7288 17.7725C11.0123 16.0452 11.4069 14.0563 12.7286 12.7335C14.0503 11.4106 16.0388 11.0143 17.7667 11.7293C19.4946 12.4444 20.6215 14.13 20.622 16C20.6192 18.5511 18.553 20.619 16.002 20.624ZM16.002 12.998C14.3451 12.998 13.002 14.3412 13.002 15.998C13.002 17.6549 14.3451 18.998 16.002 18.998C17.6588 18.998 19.002 17.6549 19.002 15.998C18.9981 14.3427 17.6572 13.0019 16.002 12.998ZM20.802 12.285C20.2074 12.2828 19.7269 11.7996 19.728 11.205C19.7291 10.6104 20.2114 10.129 20.806 10.129C21.4005 10.129 21.8828 10.6104 21.884 11.205C21.8842 11.4919 21.7702 11.767 21.5672 11.9697C21.3642 12.1723 21.0888 12.2858 20.802 12.285Z"
                  fill="#13151D"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="h-9 flex items-center flex-col justify-center bg-white">
        <p className="text-[#13151D] text-center">
          © 2023 Company. All rights reserved.
        </p>
      </div>
    </>
  );
}

export default App;
