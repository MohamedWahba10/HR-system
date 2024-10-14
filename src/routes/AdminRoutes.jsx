import React from "react";
import { Navigate } from "react-router-dom";
import Home from "../Pages/Home";
import Clients from "../Apps/Client/Clients";
import ClientSetup from "../Apps/Client/ClientSetup";
import AddingEmploye from "../Apps/Client/AddingEmploye";
import SetupPackages from "../Apps/Setup/Packages"; // Aliased import
import Modules from "../Apps/Setup/Modules";
import AppPage from "../Apps/Setup/AppPage";
import Sales from "../Apps/Sales/Sales";
import SalesHistory from "../Apps/Sales/Components/SalesHistory";
import PlansPackages from "../Apps/Plans Management/Packages/Packages"; // Aliased import
import PlansModules from "../Apps/Plans Management/Modules/Modules";
import Management from "../Apps/Plans Management/Management/Management";
import SubscriptionHistory from "../Apps/Plans Management/Subscription History/SubscriptionHistory";
import AddPackage from "../Apps/Plans Management/Packages/Components/AddPackage";
import ViewPackage from "../Apps/Plans Management/Packages/Components/ViewPackage";
import AddModule from "../Apps/Plans Management/Modules/Components/AddModule";
import ViewModule from "../Apps/Plans Management/Modules/Components/ViewModule";
import EditManaement from "../Apps/Plans Management/Management/EditManaement";
import AppFeatures from "../Apps/AppFeatures/AppFeatures";
import ClientsReport from "../Apps/Reports/ClientsReport";
import PackagesReport from "../Apps/Reports/PackagesReport";
import ModuleAndFeaturesReport from "../Apps/Reports/ModuleAndFeaturesReport";
import SubscriptionHistoryReport from "../Apps/Reports/SubscriptionHistoryReport";
import SalesReport from "../Apps/Reports/SalesReport";

const routes = [
  { path: "/", element: <Navigate to="/home" /> },
  { path: "/home", element: <Home /> },
  //Client Routes
  { path: "/client/*", element: <Clients /> },
  { path: "/client/client-setup/*", element: <ClientSetup /> },
  { path: "/client/AddEmployees/*", element: <AddingEmploye /> },

  // Setup Routes
  {
    path: "/setup",
    children: [
      { path: "", element: <Navigate to="packages" /> }, // Redirect to /setup/packages
      { path: "packages", element: <SetupPackages /> },
      { path: "modules", element: <Modules /> },
      { path: "app", element: <AppPage /> },
    ],
  },

  // Slaes
  { path: "/sales/*", element: <Sales /> },
  { path: "newsales/history", element: <SalesHistory /> },

  // Plans Management
  {
    path: "/plansManagement/packages/*",
    element: <PlansPackages />,
    children: [
      { path: "create", element: <AddPackage /> },
      { path: "view", element: <ViewPackage /> },
      // Add more nested routes as needed
    ],
  },
  {
    path: "/plansManagement/modules/*",
    element: <PlansModules />,
    children: [
      { path: "create", element: <AddModule /> },
      { path: "view", element: <ViewModule /> },
    ],
  },
  {
    path: "/plansManagement/management/*",
    element: <Management />,
    children: [{ path: "edit", element: <EditManaement /> }],
  },
  {
    path: "/plansManagement/subscription_history",
    element: <SubscriptionHistory />,
  },

  //App Features
  {path:"/app" , element:<AppFeatures/>},

  //Reports
  {path:"/report/clients" , element:<ClientsReport/>},
  {path: "/report/sales", element: <SalesReport /> },
  {path: "/report/packages", element: <PackagesReport />},
  {path: "/report/modules", element: <ModuleAndFeaturesReport />},
  {path: "/report/subscription_history", element: <SubscriptionHistoryReport />},


  //{ path: '*', element: <Navigate to="/home" /> },
];

export default routes;
