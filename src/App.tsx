import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import DashboardView from "./views/DashboardView/DashboardView";
import TransactionsView from "./views/TransactionsView/TransactionsView";
import ReportsView from "./views/ReportsView/ReportsView";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="" element={<DashboardView />} />
      <Route path="transakcje" element={<TransactionsView />} />
      <Route path="raporty" element={<ReportsView />} />
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
