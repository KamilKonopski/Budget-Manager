import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import DashboardView from "./views/DashboardView.tsx";
import TransactionsView from "./views/TransactionsView";
import RaportsView from "./views/RaportsView.tsx";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index path="" element={<DashboardView />} />
      <Route path="transactions" element={<TransactionsView />} />
      <Route path="raports" element={<RaportsView />} />
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
