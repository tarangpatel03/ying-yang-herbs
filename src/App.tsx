import { Route, Routes } from "react-router";

import { HomePage } from "@/pages";
import { ROUTE_PATH } from "@/routes";

function App() {
  return (
    <Routes>
      <Route index path={ROUTE_PATH.index} Component={HomePage} />
    </Routes>
  );
}

export default App;
