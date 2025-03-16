import {
  LayoutDashboard,
  File,
  Settings,
  Waypoints,
  UsersRound,
  MessageSquareMore,
  UserRoundCheck,
  IdCard,
  ListCollapse,
  Dot,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { CgCardClubs } from "react-icons/cg";
import { useState } from "react";
import { TbLogs } from "react-icons/tb";
import { RiUserCommunityLine } from "react-icons/ri";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { MdEvent, MdOutlinePermContactCalendar } from "react-icons/md";
import { Button } from "./ui/button";
import { fetchData } from "@/query/query";
import { useQuery } from "@tanstack/react-query";
import Loading from "./loading";
// import "@/App.css";
import { API_URL } from "@/constants/constant";

import Logo from "@/assets/images/logo.png";
// Menu items.

export function AppSidebar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [open, setOpen] = useState("");

  let Pathname = useLocation().pathname;
  const pathname = Pathname.toLowerCase().split("/")[1];

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  //contact
  // const getContacts = async () => {
  //   const data = await fetchData("api/contact");
  //   return data;
  // };

  // const {
  //   data: contactData,
  //   isLoading,
  //   isError,
  //   error,
  // } = useQuery({
  //   queryKey: ["contact"], // Change the key to contacts
  //   queryFn: () => getContacts(),
  // });

  // console.log(contactData);
  //membership
  // const getMemberShip = async () => {
  //   const data = await fetchData("api/membership");
  //   return data;
  // };

  // const {
  //   data: membershipData,
  //   isLoading: memberLoading,
  //   isError: isErrorMember,
  //   error: errorMember,
  // } = useQuery({
  //   queryKey: ["membership"], // Change the key to contacts
  //   queryFn: () => getMemberShip(),
  // });

  //setting
  // const getSetting = async () => {
  //   const data = await fetchData("api/settings");
  //   return data[0];
  // };

  // const {
  //   data: settingData,
  //   isLoading: settingLoading,
  //   isError: isErrorsetting,
  //   error: errorsetting,
  // } = useQuery({
  //   queryKey: ["setting"], // Change the key to contacts
  //   queryFn: () => getSetting(),
  // });

  // const tenure = settingData?.tenure?.id;

  //tenures
  // const getTenures = async () => {
  //   const data = await fetchData("api/tenures");
  //   return data;
  // };

  // const {
  //   data: tenuresData,
  //   isLoading: tenuresLoading,
  //   isError: isErrortenures,
  //   error: errortenures,
  // } = useQuery({
  //   queryKey: ["tenures"], // Change the key to contacts
  //   queryFn: () => getTenures(),
  // });

  // if (isLoading || memberLoading || tenuresLoading || settingLoading) {
  //   return (
  //     <div>
  //       <Loading />
  //     </div>
  //   );
  // }

  // if (isError || isErrorMember || isErrortenures || isErrorsetting) {
  //   return (
  //     <div>
  //       <div>Error:{"An error occured"}</div>
  //     </div>
  //   );
  // }

  // const contactResult = contactData?.filter(
  //   (item) => item.status === "pending"
  // ).length;

  // const memberResult = membershipData?.filter(
  //   (item) => item.status === "pending"
  // ).length;

  const items = [
    {
      title: "Dashboard",
      url: "/",
      icon: LayoutDashboard,
    },

    {
      title: "about rotaract",
      url: "/about",
      icon: ListCollapse,
    },
    {
      title: "Tenures",
      url: "/tenures",
      icon: MdEvent,
    },

    {
      title: "Blogs",
      url: "/blogs",
      icon: TbLogs,
    },
    {
      title: "Associated Club",
      url: "/associatedclub",
      icon: CgCardClubs,
    },
    {
      title: "Avenues",
      url: "/avenues",
      icon: Waypoints,
    },
    {
      title: "Club Members",
      url: `/clubmembers`,
      icon: UsersRound,
      // dropdown: [
      //   ...tenuresData.map((item) => ({
      //     title: item.title,
      //     url: `/clubmembers/${item.id}`,
      //   })),
      // ],
    },
    {
      title: "Message",
      url: "/message",
      icon: MessageSquareMore,
    },
    {
      title: "Leader",
      url: "/leader",
      icon: RiUserCommunityLine,
    },
    {
      title: "Designation",
      url: "/designations",
      icon: RiUserCommunityLine,
    },
    {
      title: "Contact",
      url: "/contact",
      icon: MdOutlinePermContactCalendar,
      // notify: contactResult,
    },
    {
      title: "Membership",
      url: "/membership",
      icon: IdCard,
      // notify: memberResult,
    },
    {
      title: "Users",
      url: "/user",
      icon: UserRoundCheck,
    },
    {
      title: "Setting",
      url: "/setting",
      icon: Settings,
    },
  ];

  return (
    <div>
      <Sidebar>
        <SidebarContent className="custom-scrollbar">
          <SidebarGroup>
            <SidebarGroupLabel className=" text-secondary font-bold  w-full">
              {/* <img
                // src={`${API_URL}/${settingData.logo}`}
                src={Logo}
                alt="logoError"
                className="border object-center object-cover rounded-lg bg-primary-foreground"
              /> */}
              Hub IT CMS
            </SidebarGroupLabel>

            {/* <hr className="border-2" /> */}
            <SidebarGroupContent className="mt-2 ">
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem
                    className="capitalize group"
                    key={item.title}
                  >
                    <SidebarMenuButton asChild>
                      <Link
                        className={` ${
                          pathname === item.url.toLowerCase().split("/")[1]
                            ? "bg-white text-primary "
                            : "text-white"
                        } `}
                        to={item.url}
                        onClick={() =>
                          item.dropdown && toggleDropdown(item.title)
                        }
                      >
                        {" "}
                        <item.icon />
                        <div className="flex items-center justify-between w-full">
                          <div className="flex items-center">
                            <span>{item.title}</span>
                          </div>
                          {item.notify ? (
                            <div className="text-xs grid place-content-center text-white bg-accent rounded-full px-[5px] font-bold w-4 h-4">
                              {item?.notify}
                            </div>
                          ) : (
                            ""
                          )}

                          {/* <div className="text-sm">{item?.notify}</div> */}
                        </div>
                        {item.dropdown && (
                          <span className="ml-auto">
                            {openDropdown === item.title ? (
                              <FaChevronDown className="me-2" />
                            ) : (
                              <FaChevronRight className="me-2" />
                            )}
                          </span>
                        )}
                      </Link>
                    </SidebarMenuButton>
                    {item.dropdown && openDropdown === item.title && (
                      <SidebarMenu className="mt-2">
                        {item.dropdown?.map((subItem) => (
                          <SidebarMenuItem
                            key={subItem.title}
                            className=" flex justify-end"
                          >
                            <SidebarMenuButton asChild>
                              <Link
                                className={`px-5 w-11/12  ${
                                  Pathname === subItem?.url
                                    ? "bg-white hover:bg-white text-primary hover:text-primary"
                                    : "text-white"
                                } `}
                                to={subItem.url}
                              >
                                <Dot className="mr-2" />
                                {subItem.title}
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    )}
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  );
}
