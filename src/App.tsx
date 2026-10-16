import { Route, Routes } from "react-router";

import { HomePage, QuestionnairePage } from "@/pages";
import { ROUTE_PATH } from "@/routes";

function App() {
  return (
    <Routes>
      <Route index path={ROUTE_PATH.index} Component={HomePage} />
      <Route
        index
        path={ROUTE_PATH.questionnaire}
        Component={QuestionnairePage}
      />
    </Routes>
  );
}

export default App;
