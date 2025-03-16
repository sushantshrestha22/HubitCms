import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { Link, Outlet } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/context/context";
import Logo from "@/assets/images/logo.png";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { API_URL } from "@/constants/constant";
import { Button } from "@/components/ui/button";
// import NepaliDate from "nepali-date-converter";

// import { useContext, useEffect, useState } from "react";
// import { TenureContext } from "@/context/getCurrentTenure";

export default function Layout() {
  // const { user } = useAuth();
  // const { currentTenure } = useContext(TenureContext);

  // // English Date
  // const today = new Date();
  // const formattedDate = today.toLocaleDateString("en-GB", {
  //   day: "numeric",
  //   month: "short",
  //   year: "numeric",
  // });

  // const [Time, setTime] = useState(new Date().toLocaleTimeString());

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setTime(new Date().toLocaleTimeString());
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, []);

  // // Nepali Date
  // var nepaliDate = new NepaliDate(today);
  // const nepaliDateConverter = nepaliDate.format("dd, DD MMMM YYYY");

  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarInset>
          <div className="flex justify-between items-center p-4 border-b border-gray-200 ">
            <SidebarTrigger className="" />
            {/* <div className="flex gap-2 w-full max-sm:px-10 sm:justify-center items-center mt-2 flex-wrap">
              <Button
                variant="link"
                className="text-xs font-bold bg-gradient-to-r from-primary to-accent text-white"
              >
                {currentTenure?.title} hello
              </Button>
              <Button
                variant="link"
                className="text-xs font-bold bg-gradient-to-r from-primary to-accent  text-white"
              >
                {nepaliDateConverter} B.S, {Time} world
              </Button>
              <Button
                variant="link"
                className="text-xs font-bold bg-gradient-to-r from-primary to-accent text-white"
              >
                {formattedDate} A.D  1234
              </Button>
            </div> */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center cursor-pointer">
                <Avatar>
                  <AvatarImage src={Logo} alt="error Image" />
                  <AvatarFallback>
                    {/* {user?.fullName
                      ? user?.fullName.split(" ")[0][0].toUpperCase()
                      : "U"}
                    {user?.fullName
                      ? user?.fullName.split(" ")[1][0].toUpperCase()
                      : ""} */}
                    SU
                  </AvatarFallback>
                </Avatar>
                <Button className="max-sm:hidden text-sm font-semibold text-gray-800 p-1 bg-white hover:bg-white shadow-none">
                  {/* {user?.fullName} */}
                   sushant shrestha
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>
                  {" "}
                  {/* {user?.fullName}  */}
                  sushant shrestha
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  {/* <Link to={`/changePassword/${user?.id}`}> */}
                  <Link to="#">Change Password</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {/* <Link to="/logout">Logout</Link> */}
                  <Link to="#">Logout</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="relative min-h-[80vh] bg-[#F2F3F8]">
            {/* <div className="flex gap-2 w-full max-sm:px-10 sm:justify-center items-center mt-2 flex-wrap">
              <Button
                variant="link"
                className="text-xs font-bold bg-gradient-to-r from-primary to-accent text-white"
              >
                {settingData?.tenure?.title}
              </Button>
              <Button
                variant="link"
                className="text-xs font-bold bg-gradient-to-r from-primary to-accent  text-white"
              >
                {nepaliDateConverter} B.S, {Time}
              </Button>
              <Button
                variant="link"
                className="text-xs font-bold bg-gradient-to-r from-primary to-accent text-white"
              >
                {formattedDate} A.D
              </Button>
            </div> */}
            <Outlet />
          </div>
          <div>{/* <Footer /> */}</div>
        </SidebarInset>
      </main>
    </SidebarProvider>
  );
}
