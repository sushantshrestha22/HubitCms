import { Button } from "./components/ui/button";
import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Error from "./components/error";
import LoginForm from "./components/(auth)/login";
import Logout from "./components/(auth)/logout";
import NotFound from "./components/not-found";
import Home from "./components/(main)/home/home";
import Loading from "./components/loading";
import Dashboard from "./components/(main)/dashboard/page";
import LoginLayout from "./layout/loginLayout";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loading />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/home",
        element: (
          <Suspense fallback={<Loading />}>
            <Home />
          </Suspense>
        ),
      },
      // {
      //   path: "/user/create",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <CreateUser />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/user/read/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <ReadUser />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/user/update/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <UpdateUser />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/about",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <AboutRotaract />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/blogs",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <Blogs />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/blogs/create",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <CreateBlogs />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/blogs/update/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <UpdateBlogs />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/blogs/read/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <ReadBlogs />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/setting",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <Setting />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/associatedclub",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <AssociatedClub />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/associatedclub/read/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <ReadAssociatedClub />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/associatedclub/create",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <CreateAssociatedClub />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/associatedclub/update/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <UpdateAssociatedClub />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/avenues",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <Avenues />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/avenues/create",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <CreateAvenues />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/avenues/read/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <ReadAvenues />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/avenues/update/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <UpdateAvenues />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/clubmembers",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <ClubMembers />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/clubmembers/create",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <CreateClubMembers />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/clubmembers/update/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <UpdateClubMembers />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/clubmembers/read/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <ReadClubMember />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/message",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <Message />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/message/create",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <CreateMessage />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/message/read/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <ReadMessage />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/message/update/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <UpdateMessage />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/leader",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <Leader />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/leader/create",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <CreateLeader />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/leader/update/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <UpdateLeader />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/tenures",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <Tenures />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/tenures/create",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <CreateTenures />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/tenures/read/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <ReadTenure />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/tenures/update/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <UpdateTenures />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/contact",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <Contact />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/contact/read/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <ReadContact />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/membership",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <Membership />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/membership/read/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <ReadMembership />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/clubmembers/membersdesignation/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <MembersDesignation />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/designations",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <Designation />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/designations/create",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <CreateDesignation />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/designations/update/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <UpdateDesignation />
      //     </Suspense>
      //   ),
      // },
      // {
      //   path: "/designations/read/:id",
      //   element: (
      //     <Suspense fallback={<Loading />}>
      //       <ReadDesignation />
      //     </Suspense>
      //   ),
      // },
    ],
  },
  {
    element: <LoginLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <LoginForm />,
      },
    ],
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
