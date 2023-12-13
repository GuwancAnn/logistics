import React, { useEffect, useState } from "react";
import ClientHeader from "./ClientHeader";
import Chart from "./Chart";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { useVehicle } from "./hooks/useVehicle";
import StatusList from "./StatusList";
import { useStatus } from "./hooks/useStatus";

const ClientHome = () => {
  const [isActiveImage, setIsActiveImage] = useState(false);
  const [filteredLocationData, setFilteredLocationData] = useState({});
  const [AllLocActive, setAllLocActive] = useState(true);
  const [SearchData, setSearchData] = useState("");
  const [locationStatusCountData, setLocationStatusCountData] = useState();

  const navigate = useNavigate();
  const { vehicleData, setVehicleData } = useVehicle();
  const { statusData } = useStatus();

  // const uniqueLocationId = [...new Set(vehicleData.map((item) => item.loc.id))];
  //
  useEffect(() => {
    const tokenLocal = localStorage.getItem("access");
    if (tokenLocal == null) {
      navigate("/login");
    }

    const LocationStatusCountF = () => {
      fetch(`http://132.148.79.178/api/v1/status-location-count/`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNjM3NjEwLCJpYXQiOjE2OTcwODU2MTAsImp0aSI6ImI5M2NjMGNlNzBkNDQ3ZWU4YjE4MjhkYzM4MGFhYmZkIiwidXNlcl9pZCI6MX0.BAjC4rd4uZ8IVr-b-0B9F8kHx1UWnIojaHMbNqots6E",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data here
          setLocationStatusCountData(data);
          console.log(data);
          setAllLocActive(true);
        })
        .catch((error) => {
          // Handle any errors here
          console.error(error);
        });
    };
    LocationStatusCountF();
  }, []);

  const handleClickImage = () => {
    setIsActiveImage(!isActiveImage);
  };
  const filterLocation = (id) => {
    console.log(id);
    if (id == 0) {
      fetch(`http://132.148.79.178/api/v1/status-location-count/`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNjM3NjEwLCJpYXQiOjE2OTcwODU2MTAsImp0aSI6ImI5M2NjMGNlNzBkNDQ3ZWU4YjE4MjhkYzM4MGFhYmZkIiwidXNlcl9pZCI6MX0.BAjC4rd4uZ8IVr-b-0B9F8kHx1UWnIojaHMbNqots6E",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data here
          setLocationStatusCountData(data);
          console.log(data);
          setAllLocActive(true);
        })
        .catch((error) => {
          // Handle any errors here
          console.error(error);
        });
    } else {
      fetch(`http://132.148.79.178/api/v1/location-detail/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNjM3NjEwLCJpYXQiOjE2OTcwODU2MTAsImp0aSI6ImI5M2NjMGNlNzBkNDQ3ZWU4YjE4MjhkYzM4MGFhYmZkIiwidXNlcl9pZCI6MX0.BAjC4rd4uZ8IVr-b-0B9F8kHx1UWnIojaHMbNqots6E",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data here
          setFilteredLocationData(data);
          console.log(data);
          setAllLocActive(false);
        })
        .catch((error) => {
          // Handle any errors here
          console.error(error);
        });
    }

    fetch(`http://132.148.79.178/api/v1/location-detail/${id}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNjM3NjEwLCJpYXQiOjE2OTcwODU2MTAsImp0aSI6ImI5M2NjMGNlNzBkNDQ3ZWU4YjE4MjhkYzM4MGFhYmZkIiwidXNlcl9pZCI6MX0.BAjC4rd4uZ8IVr-b-0B9F8kHx1UWnIojaHMbNqots6E",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        setFilteredLocationData(data);
        console.log(data);
        setAllLocActive(false);
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };

  const vehicle = vehicleData?.results ?? [];

  const LocationArray = locationStatusCountData?.location ?? [];
  const statusArray = locationStatusCountData?.status ?? [];
  const FilteredLocArray = filteredLocationData?.status ?? [];
  console.log(statusArray);
  const allStatusData = [
    ...statusArray,
    {
      id: 0,
      title: "All Vehicles",
      qty: statusArray.reduce((total, item) => total + item.qty, 0),
    },
  ];
  //count : arrayin icine total var gosya (0)- total = 0 , arrayn icinda count lary  alya total ustine gosya we count :ahlisinin jemi cykya
  // const groupedVehicles = filteredLocationData.reduce((acc, vehicle) => {
  //   const { id, title } = vehicle.status;
  //   if (acc[id]) {
  //     acc[id].count += 1;
  //   } else {
  //     acc[id] = { id, title, count: 1 };
  //   }
  //   return acc;
  // }, {});
  // const allstatusfilterloc = [
  //   ...Object.values(groupedVehicles).map((group) => group),
  // ];
  //console.log(allstatusfilterloc);

  // const updatedStatusData = allStatusData.map((item) => {
  //   const filterItem = allstatusfilterloc.find(
  //     (filter) => filter.id === item.id
  //   );
  //   return filterItem ? filterItem : { ...item, count: 0 };
  // });

  // console.log(updatedStatusData);

  // ekranda "All location " we beyleki location lar cykmaly
  // default all location active bolmaly
  // asagynda statuslar cykmaly
  // statusda bar bolanlan vehicle sany cykmaly
  // yok bolsa sany 0 gorkezmeli
  // haysy location basylsa shol location stutusdaky vehicle sany  cykmaly yoklarynda 0 gorkezmeli

  // Elimizde nameler bar
  // const uniqueLocation = [...new Set(vehicleData.map((item) => item.loc))];
  // const updatedDataLoc = [
  //   { id: 0, name: "All Location" },
  //   ...uniqueLocation.filter(
  //     (item, index, self) =>
  //       index === self.findIndex((obj) => obj.id === item.id)
  //   ),
  // ];
  //
  const allLocationData = [
    {
      id: 0,
      name: "All Locations",
      qty: LocationArray.reduce((total, item) => total + item.qty, 0),
    },
    ...LocationArray,
  ];
  console.log(FilteredLocArray);
  const Search = () => {
    fetch(`http://132.148.79.178/api/v1/vehicle-list/?search=${SearchData}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzEyNjM3NjEwLCJpYXQiOjE2OTcwODU2MTAsImp0aSI6ImI5M2NjMGNlNzBkNDQ3ZWU4YjE4MjhkYzM4MGFhYmZkIiwidXNlcl9pZCI6MX0.BAjC4rd4uZ8IVr-b-0B9F8kHx1UWnIojaHMbNqots6E",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        setVehicleData(data);
        console.log(data);
        navigate("/vehicle");
      })
      .catch((error) => {
        // Handle any errors here
        console.error(error);
      });
  };

  return (
    <>
      <div className="text-[#2E3A59] container mx-auto">
        <ClientHeader></ClientHeader>

        <div className="flex items-center justify-between flex-wrap ">
          <button className="flex-grow   mr-4 flex   border mt-4 justify-center border-regal-blue text-regal-blue p-[14px] h-12 rounded-md  items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-white hover:stroke-white hover:bg-white"
            >
              <path
                d="M15.0002 18.3332H5.00016C4.07969 18.3332 3.3335 17.587 3.3335 16.6665V3.33317C3.3335 2.4127 4.07969 1.6665 5.00016 1.6665H10.8335C10.8426 1.6669 10.8516 1.66858 10.8602 1.6715C10.8683 1.67402 10.8767 1.67569 10.8852 1.6765C10.9587 1.68121 11.0312 1.6955 11.101 1.719L11.1243 1.7265C11.1432 1.73291 11.1616 1.7407 11.1793 1.74984C11.2701 1.79019 11.3528 1.84666 11.4235 1.9165L16.4235 6.9165C16.4933 6.98716 16.5498 7.06988 16.5902 7.16067C16.5985 7.179 16.6043 7.19817 16.611 7.21734L16.6185 7.239C16.6418 7.3085 16.6555 7.38082 16.6593 7.454C16.6606 7.46166 16.6626 7.46919 16.6652 7.4765C16.6666 7.48419 16.6672 7.49202 16.6669 7.49984V16.6665C16.6669 17.587 15.9206 18.3332 15.0002 18.3332ZM5.00016 3.33317V16.6665H15.0002V8.33317H10.8335C10.3733 8.33317 10.0002 7.96007 10.0002 7.49984V3.33317H5.00016ZM11.6668 4.5115V6.6665H13.8218L11.6668 4.5115Z"
                fill="#2E3A59"
              />
            </svg>
            <p className="pl-[14px] "> See invoices</p>
          </button>
          <button className="flex border flex-grow   mr-4  mt-4 border-regal-blue justify-center text-regal-blue p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <p className="text-xl font-medium ">$</p>
            <p className="pl-[14px] "> Total Balance</p>
          </button>
          <button className="flex border  flex-grow   mr-4  mt-4 border-regal-blue text-regal-blue justify-center p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <p className="text-xl font-medium ">$</p>
            <p className="pl-[14px] "> Damage Claim</p>
          </button>
          <button className="flex border flex-grow   mr-4  mt-4 border-regal-blue text-regal-blue justify-center p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <p className="text-xl font-medium ">$</p>
            <p className="pl-[14px] "> Storage Claim</p>
          </button>
          <button className="flex border flex-grow   mr-4  mt-4 border-regal-blue text-regal-blue p-[14px] justify-center h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <p className="text-xl font-medium ">$</p>
            <p className="pl-[14px] "> Key Missing Claim</p>
          </button>
          <button className="flex border flex-grow   mr-4  mt-4 border-regal-blue text-regal-blue justify-center p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-white hover:stroke-white"
            >
              <path
                d="M16.6663 14.1668H13.333V10.8335H16.6663V14.1668ZM11.6663 14.1668H8.33301V10.8335H11.6663V14.1668ZM6.66634 14.1668H3.33301V10.8335H6.66634V14.1668ZM16.6663 9.16683H13.333V5.8335H16.6663V9.16683ZM11.6663 9.16683H8.33301V5.8335H11.6663V9.16683ZM6.66634 9.16683H3.33301V5.8335H6.66634V9.16683Z"
                fill="#2E3A59"
              />
            </svg>

            <p className="pl-[14px] "> All Containers</p>
          </button>
          <button className="flex border flex-grow   mr-4 mt-4 border-regal-blue text-regal-blue p-[14px]  justify-center h-12 rounded-md  items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-white hover:stroke-white"
            >
              <path
                d="M15.0002 18.3332H5.00016C4.07969 18.3332 3.3335 17.587 3.3335 16.6665V3.33317C3.3335 2.4127 4.07969 1.6665 5.00016 1.6665H10.8335C10.8426 1.6669 10.8516 1.66858 10.8602 1.6715C10.8683 1.67402 10.8767 1.67569 10.8852 1.6765C10.9587 1.68121 11.0312 1.6955 11.101 1.719L11.1243 1.7265C11.1432 1.73291 11.1616 1.7407 11.1793 1.74984C11.2701 1.79019 11.3528 1.84666 11.4235 1.9165L16.4235 6.9165C16.4933 6.98716 16.5498 7.06988 16.5902 7.16067C16.5985 7.179 16.6043 7.19817 16.611 7.21734L16.6185 7.239C16.6418 7.3085 16.6555 7.38082 16.6593 7.454C16.6606 7.46166 16.6626 7.46919 16.6652 7.4765C16.6666 7.48419 16.6672 7.49202 16.6669 7.49984V16.6665C16.6669 17.587 15.9206 18.3332 15.0002 18.3332ZM5.00016 3.33317V16.6665H15.0002V8.33317H10.8335C10.3733 8.33317 10.0002 7.96007 10.0002 7.49984V3.33317H5.00016ZM11.6668 4.5115V6.6665H13.8218L11.6668 4.5115Z"
                fill="#2E3A59"
              />
            </svg>
            <p className="pl-[14px] "> Inventory Report</p>
          </button>
          <button className="flex border flex-grow   mr-4 mt-4 border-regal-blue text-regal-blue p-[14px] h-12 rounded-md justify-center items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-white hover:stroke-white"
            >
              <path d="M7.5 7.5H5.83333V9.16667H7.5V7.5Z" fill="#2E3A59" />
              <path
                d="M9.16667 7.5H10.8333V9.16667H9.16667V7.5Z"
                fill="#2E3A59"
              />
              <path d="M14.1667 7.5H12.5V9.16667H14.1667V7.5Z" fill="#2E3A59" />
              <path
                d="M2.5 4.16667V17.5L6.5 14.5C6.78818 14.283 7.13928 14.166 7.5 14.1667H15.8333C16.7538 14.1667 17.5 13.4205 17.5 12.5V4.16667C17.5 3.24619 16.7538 2.5 15.8333 2.5H4.16667C3.24619 2.5 2.5 3.24619 2.5 4.16667ZM4.16667 14.1667V4.16667H15.8333V12.5H6.945C6.58423 12.499 6.23304 12.6161 5.945 12.8333L4.16667 14.1667Z"
                fill="#2E3A59"
              />
            </svg>

            <p className="pl-[14px] "> Feedback</p>
          </button>
          <button className="flex border flex-grow   mr-4  mt-4 border-regal-blue justify-center text-regal-blue p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <p className="text-xl font-medium ">!</p>
            <p className="pl-[14px] "> Complain</p>
          </button>
          <button className="flex  flex-grow   mr-4  border mt-4 justify-center border-regal-blue text-regal-blue p-[14px] h-12 rounded-md  items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-white hover:stroke-white"
            >
              <path
                d="M15.0002 18.3332H5.00016C4.07969 18.3332 3.3335 17.587 3.3335 16.6665V3.33317C3.3335 2.4127 4.07969 1.6665 5.00016 1.6665H10.8335C10.8426 1.6669 10.8516 1.66858 10.8602 1.6715C10.8683 1.67402 10.8767 1.67569 10.8852 1.6765C10.9587 1.68121 11.0312 1.6955 11.101 1.719L11.1243 1.7265C11.1432 1.73291 11.1616 1.7407 11.1793 1.74984C11.2701 1.79019 11.3528 1.84666 11.4235 1.9165L16.4235 6.9165C16.4933 6.98716 16.5498 7.06988 16.5902 7.16067C16.5985 7.179 16.6043 7.19817 16.611 7.21734L16.6185 7.239C16.6418 7.3085 16.6555 7.38082 16.6593 7.454C16.6606 7.46166 16.6626 7.46919 16.6652 7.4765C16.6666 7.48419 16.6672 7.49202 16.6669 7.49984V16.6665C16.6669 17.587 15.9206 18.3332 15.0002 18.3332ZM5.00016 3.33317V16.6665H15.0002V8.33317H10.8335C10.3733 8.33317 10.0002 7.96007 10.0002 7.49984V3.33317H5.00016ZM11.6668 4.5115V6.6665H13.8218L11.6668 4.5115Z"
                fill="#2E3A59"
              />
            </svg>
            <p className="pl-[14px] "> Title Report</p>
          </button>
          <button className="flex border mr-4 flex-grow     mt-4 border-regal-blue text-regal-blue justify-center p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <p className="text-xl font-medium ">$</p>
            <p className="pl-[14px] "> Shipping Rates</p>
          </button>
          <button className="flex border mr-4 flex-grow     mt-4 border-regal-blue text-regal-blue justify-center p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <p className="text-xl font-medium ">$</p>
            <p className="pl-[14px] "> Towing Rates</p>
          </button>
          <button className="flex  border  flex-grow   mr-4  mt-4 border-regal-blue text-regal-blue justify-center p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <p className="text-xl font-medium ">$</p>
            <p className="pl-[7px] ">Single Vehicle Rate</p>
          </button>
          <button className="flex      mr-4 border mt-4 justify-center border-regal-blue text-regal-blue p-[14px] h-12 rounded-md  items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-white hover:stroke-white"
            >
              <path
                d="M5.87344 13.5609C6.68438 13.5609 7.45312 13.8797 8.03437 14.4609C8.61562 15.0422 8.93438 15.8109 8.93438 16.6219C8.93438 17.4328 8.61562 18.2016 8.03437 18.7828C7.45312 19.3641 6.68438 19.6828 5.87344 19.6828C5.0625 19.6828 4.29375 19.3641 3.7125 18.7828C3.13125 18.2063 2.8125 17.4375 2.8125 16.6266C2.8125 15.8156 3.13125 15.0469 3.7125 14.4656C4.29375 13.8844 5.0625 13.5609 5.87344 13.5609ZM5.87344 12.2484C3.46875 12.2484 1.5 14.2172 1.5 16.6219C1.5 19.0313 3.46875 21 5.87344 21C8.27813 21 10.2469 19.0313 10.2469 16.6266C10.2516 14.2172 8.28281 12.2484 5.87344 12.2484ZM14.9906 5.99063C15.825 5.99063 16.4906 5.325 16.4906 4.49063C16.4906 3.65625 15.8344 3 15 3C14.1656 3 13.4906 3.65625 13.4906 4.49063C13.4906 5.32031 14.1609 5.99063 14.9906 5.99063ZM18.1266 13.5609C18.9375 13.5609 19.7062 13.8797 20.2875 14.4609C20.8687 15.0422 21.1875 15.8109 21.1875 16.6219C21.1875 17.4328 20.8687 18.2016 20.2875 18.7828C19.7062 19.3688 18.9375 19.6875 18.1266 19.6875C17.3156 19.6875 16.5469 19.3687 15.9656 18.7875C15.3844 18.2062 15.0656 17.4375 15.0656 16.6266C15.0656 15.8156 15.3844 15.0469 15.9656 14.4656C16.5422 13.8844 17.3109 13.5609 18.1266 13.5609ZM18.1266 12.2484C15.7219 12.2484 13.7531 14.2172 13.7531 16.6219C13.7531 19.0266 15.7219 20.9953 18.1266 20.9953C20.5313 20.9953 22.5 19.0266 22.5 16.6219C22.5 14.2172 20.5313 12.2484 18.1266 12.2484Z"
                fill="#2E3A59"
              />
              <path
                d="M17.25 9H15L13.6172 6.18281C13.3547 5.74687 12.8719 5.4375 12.3469 5.4375C11.9531 5.4375 11.5594 5.61094 11.2969 5.87344L7.93594 9.1125C7.67344 9.375 7.5 9.76875 7.5 10.1625C7.5 10.9781 8.09062 11.2687 8.36719 11.4328C10.5 12.6609 11.25 12.7969 11.25 13.4109V16.5C11.25 16.9125 11.5875 17.25 12 17.25C12.4125 17.25 12.75 16.9125 12.75 16.5V12.2812C12.75 11.6625 11.325 11.1562 10.4859 10.5L12.7781 8.08594C13.6547 9.42188 14.0578 10.5 14.5594 10.5H17.25C17.6625 10.5 18 10.1625 18 9.75C18 9.3375 17.6625 9 17.25 9Z"
                fill="#2E3A59"
              />
            </svg>

            <p className="pl-[14px] ">Bike Towing</p>
          </button>
          <button className="flex   mr-4     border mt-4 justify-center border-regal-blue text-regal-blue p-[14px] h-12 rounded-md  items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hover:fill-white hover:stroke-white"
            >
              <path
                d="M18.9004 5.49998C18.7002 4.89989 18.1504 4.5 17.5 4.5H6.50002C5.84963 4.5 5.29983 4.89989 5.09962 5.49998L3 11V18.5C3 19.0498 3.45019 19.5 3.99998 19.5H5.00002C5.54981 19.5 6 19.0498 6 18.5V18H18V18.5C18 19.0498 18.4502 19.5 19 19.5H20C20.5498 19.5 21 19.0498 21 18.5V11L18.9004 5.49998ZM6.50002 15C5.65041 15 5.00002 14.3501 5.00002 13.5C5.00002 12.6499 5.65041 12 6.50002 12C7.34963 12 8.00002 12.65 8.00002 13.5C8.00002 14.35 7.34963 15 6.50002 15ZM17.5 15C16.6504 15 16 14.3501 16 13.5C16 12.6499 16.6504 12 17.5 12C18.3496 12 19 12.65 19 13.5C19 14.35 18.3496 15 17.5 15ZM5.00002 9.99998L6.50002 6H17.5L19 9.99998H5.00002Z"
                fill="#2E3A59"
              />
            </svg>

            <p className="pl-[14px] ">Destination Rate</p>
          </button>
          <button className="flex border      mr-4  mt-4 border-regal-blue text-regal-blue justify-center p-[14px] h-12 rounded-md items-center  hover:fill-white hover:stroke-white hover:text-white hover:bg-regal-blue">
            <p className="text-xl font-medium ">$</p>
            <p className="pl-[14px] "> Full Cont. Rate</p>
          </button>
        </div>
        <div className="flex justify-start items-center mt-11">
          <button
            onClick={handleClickImage}
            className={`flex  w-52  border mt-4 justify-center p-[14px] h-12 rounded-md items-center mr-4
        ${
          isActiveImage
            ? "bg-regal-blue text-white"
            : "border-regal-blue text-regal-blue"
        }`}
          >
            Image
          </button>

          <button className="flex  w-52  border border-regal-blue mr-4 mt-4 justify-center p-[14px] h-12 rounded-md items-center ">
            Track
          </button>
          <button className="flex  w-52   border  border-regal-blue mr-4 mt-4 justify-center p-[14px] h-12 rounded-md items-center ">
            Copart
          </button>
        </div>
        <div className="flex items-center mt-6">
          <input
            type="text"
            placeholder=" Vehicle search by vin/lot/Ar/Cont No"
            className="w-2/3 border p-[14px] h-12  border-regal-blue rounded-md"
            onChange={(e) => setSearchData(e.target.value)}
          />
          <button
            onClick={Search}
            className="border  border-regal-blue ml-4  justify-center p-[14px] h-12   rounded-md hover:bg-regal-blue hover:text-white"
          >
            Search
          </button>
        </div>
        <StatusList allStatusData={allStatusData}></StatusList>
        <div className="mt-11 ">
          <h1 className="text-2xl font-semibold mb-5">Vehicle Status</h1>
          <div className="flex justify-between ">
            {allLocationData.map((loc) => {
              return (
                <button
                  onClick={() => filterLocation(loc.id)}
                  className="border border-regal-blue p-3 text-lg rounded-md flex-1 hover:bg-regal-blue hover:text-white mr-6"
                >
                  {loc.name}
                </button>
              );
            })}
          </div>
          <table className="table-auto w-full text-center mt-6">
            <thead className="h-12 bg-gray-300  border-gray-400  ">
              <tr>
                <th>Sort type</th>
                <th>Quantity</th>
                <th>Inventory</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {AllLocActive
                ? allStatusData.map((a) => {
                    return (
                      <tr className="hover:cursor-pointer border hover:bg-gray-200 h-10">
                        <td>
                          <p>{a.title}</p>
                        </td>
                        <td>
                          {" "}
                          <p>{a.qty}</p>
                        </td>
                        <td>
                          <div className="flex justify-center items-center ">
                            <svg
                              className="mr-1 "
                              width="24"
                              height="24"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.0002 18.3332H5.00016C4.07969 18.3332 3.3335 17.587 3.3335 16.6665V3.33317C3.3335 2.4127 4.07969 1.6665 5.00016 1.6665H10.8335C10.8426 1.6669 10.8516 1.66858 10.8602 1.6715C10.8683 1.67402 10.8767 1.67569 10.8852 1.6765C10.9587 1.68121 11.0312 1.6955 11.101 1.719L11.1243 1.7265C11.1432 1.73291 11.1616 1.7407 11.1793 1.74984C11.2701 1.79019 11.3528 1.84666 11.4235 1.9165L16.4235 6.9165C16.4933 6.98716 16.5498 7.06988 16.5902 7.16067C16.5985 7.179 16.6043 7.19817 16.611 7.21734L16.6185 7.239C16.6418 7.3085 16.6555 7.38082 16.6593 7.454C16.6606 7.46166 16.6626 7.46919 16.6652 7.4765C16.6666 7.48419 16.6672 7.49202 16.6669 7.49984V16.6665C16.6669 17.587 15.9206 18.3332 15.0002 18.3332ZM5.00016 3.33317V16.6665H15.0002V8.33317H10.8335C10.3733 8.33317 10.0002 7.96007 10.0002 7.49984V3.33317H5.00016ZM11.6668 4.5115V6.6665H13.8218L11.6668 4.5115Z"
                                fill="#2E3A59"
                              />
                            </svg>
                            <p>See invoices</p>
                          </div>
                        </td>
                        <td>
                          <svg
                            className="mx-auto"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 18.9999C10.3599 19.0203 8.7367 18.6663 7.254 17.9649C6.10469 17.4041 5.07265 16.6296 4.213 15.6829C3.30243 14.704 2.58547 13.5615 2.1 12.3159L2 11.9999L2.105 11.6839C2.59082 10.4393 3.30624 9.29713 4.214 8.31686C5.07334 7.37017 6.10504 6.59572 7.254 6.03486C8.73671 5.33345 10.3599 4.97947 12 4.99986C13.6401 4.9795 15.2633 5.33348 16.746 6.03486C17.8953 6.59559 18.9274 7.37005 19.787 8.31686C20.6993 9.29441 21.4165 10.4372 21.9 11.6839L22 11.9999L21.895 12.3159C20.3262 16.3996 16.3742 19.0692 12 18.9999ZM12 6.99986C8.59587 6.89319 5.47142 8.87495 4.117 11.9999C5.4712 15.125 8.59579 17.1068 12 16.9999C15.4041 17.1062 18.5284 15.1246 19.883 11.9999C18.5304 8.87344 15.4047 6.89094 12 6.99986ZM12 14.9999C10.5573 15.0094 9.30937 13.9972 9.02097 12.5836C8.73256 11.17 9.48427 9.74988 10.8154 9.19352C12.1465 8.63716 13.6852 9.09999 14.4885 10.2984C15.2919 11.4967 15.1354 13.0959 14.115 14.1159C13.5563 14.6811 12.7948 14.9994 12 14.9999Z"
                              fill="#2E3A59"
                            />
                          </svg>
                        </td>
                      </tr>
                    );
                  })
                : FilteredLocArray.map((st) => {
                    return (
                      <tr className="hover:cursor-pointer border hover:bg-gray-200 h-10">
                        <td>{st.title}</td>
                        <td>{st.count}</td>
                        <td>
                          <div className="flex justify-center items-center ">
                            <svg
                              className="mr-1 "
                              width="24"
                              height="24"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M15.0002 18.3332H5.00016C4.07969 18.3332 3.3335 17.587 3.3335 16.6665V3.33317C3.3335 2.4127 4.07969 1.6665 5.00016 1.6665H10.8335C10.8426 1.6669 10.8516 1.66858 10.8602 1.6715C10.8683 1.67402 10.8767 1.67569 10.8852 1.6765C10.9587 1.68121 11.0312 1.6955 11.101 1.719L11.1243 1.7265C11.1432 1.73291 11.1616 1.7407 11.1793 1.74984C11.2701 1.79019 11.3528 1.84666 11.4235 1.9165L16.4235 6.9165C16.4933 6.98716 16.5498 7.06988 16.5902 7.16067C16.5985 7.179 16.6043 7.19817 16.611 7.21734L16.6185 7.239C16.6418 7.3085 16.6555 7.38082 16.6593 7.454C16.6606 7.46166 16.6626 7.46919 16.6652 7.4765C16.6666 7.48419 16.6672 7.49202 16.6669 7.49984V16.6665C16.6669 17.587 15.9206 18.3332 15.0002 18.3332ZM5.00016 3.33317V16.6665H15.0002V8.33317H10.8335C10.3733 8.33317 10.0002 7.96007 10.0002 7.49984V3.33317H5.00016ZM11.6668 4.5115V6.6665H13.8218L11.6668 4.5115Z"
                                fill="#2E3A59"
                              />
                            </svg>
                            <p>See invoices</p>
                          </div>
                        </td>
                        <td>
                          <svg
                            className="mx-auto"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 18.9999C10.3599 19.0203 8.7367 18.6663 7.254 17.9649C6.10469 17.4041 5.07265 16.6296 4.213 15.6829C3.30243 14.704 2.58547 13.5615 2.1 12.3159L2 11.9999L2.105 11.6839C2.59082 10.4393 3.30624 9.29713 4.214 8.31686C5.07334 7.37017 6.10504 6.59572 7.254 6.03486C8.73671 5.33345 10.3599 4.97947 12 4.99986C13.6401 4.9795 15.2633 5.33348 16.746 6.03486C17.8953 6.59559 18.9274 7.37005 19.787 8.31686C20.6993 9.29441 21.4165 10.4372 21.9 11.6839L22 11.9999L21.895 12.3159C20.3262 16.3996 16.3742 19.0692 12 18.9999ZM12 6.99986C8.59587 6.89319 5.47142 8.87495 4.117 11.9999C5.4712 15.125 8.59579 17.1068 12 16.9999C15.4041 17.1062 18.5284 15.1246 19.883 11.9999C18.5304 8.87344 15.4047 6.89094 12 6.99986ZM12 14.9999C10.5573 15.0094 9.30937 13.9972 9.02097 12.5836C8.73256 11.17 9.48427 9.74988 10.8154 9.19352C12.1465 8.63716 13.6852 9.09999 14.4885 10.2984C15.2919 11.4967 15.1354 13.0959 14.115 14.1159C13.5563 14.6811 12.7948 14.9994 12 14.9999Z"
                              fill="#2E3A59"
                            />
                          </svg>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
          <div className="flex justify-between items-center">
            <div className="bg-gray-200 flex items-top w-2/5 h-[400px] border rounded-md justify-between p-5 mt-11">
              <div className="flex flex-col">
                <p className="text-xl font-medium mb-5">Order Overview</p>
                <div className="flex items-center mb-3">
                  <div className="bg-blue-600 rounded-full w-4 h-4 mr-5"></div>
                  <p className="">Picked Up</p>
                </div>
                <div className="flex items-center  mb-3">
                  <div className="bg-yellow-400   rounded-full w-4 h-4 mr-5"></div>
                  <p className="">Car on the way</p>
                </div>
                <div className="flex items-center  mb-3">
                  <div className="bg-red-400 rounded-full w-4 h-4 mr-5"></div>
                  <p className="">Car on hand</p>
                </div>
                <div className="flex items-center  mb-3">
                  <div className="bg-blue-300 rounded-full w-4 h-4 mr-5"></div>
                  <p className="">Manifest</p>
                </div>
                <div className="flex items-center  mb-3">
                  <div className="bg-violet-400 rounded-full w-4 h-4 mr-5"></div>
                  <p className="">Shipped</p>
                </div>
                <div className="flex items-center  mb-3">
                  <div className="bg-green-400 rounded-full w-4 h-4 mr-5"></div>
                  <p className="">Arrived</p>
                </div>
                <div className="flex items-center  mb-3">
                  <div className="bg-green-300 rounded-full w-4 h-4 mr-5"></div>
                  <p className="">Handed over</p>
                </div>
                <div className="flex items-center  mb-3">
                  <div className="bg-gray-600 rounded-full w-4 h-4 mr-5"></div>
                  <p className="">All Inventory</p>
                </div>
              </div>

              <Chart></Chart>
            </div>
            <div className="bg-gray-200 flex items-top w-2/5 h-[400px] border rounded-md justify-between p-5 mt-11">
              <div className="flex flex-col">
                <p className="text-xl font-medium mb-5">Invoice Overview</p>
                <div className="flex items-center mb-3">
                  <div className="bg-green-600 rounded-full w-4 h-4 mr-5"></div>
                  <p className="">Paid</p>
                </div>
                <div className="flex items-center  mb-3">
                  <div className="bg-blue-600 rounded-full w-4 h-4 mr-5"></div>
                  <p className="">Partially </p>
                </div>
                <div className="flex items-center  mb-3">
                  <div className="bg-red-600 rounded-full w-4 h-4 mr-5"></div>
                  <p className="">Unpaid</p>
                </div>
              </div>

              <Chart></Chart>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ClientHome;
