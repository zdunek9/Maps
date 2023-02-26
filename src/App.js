import "./app.css";
import Address from "./components/Pages/Address/Address";
import Menu from "./components/Pages/Menu/Menu";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import DesiredAddress from "./components/Pages/DesiredAddress/DesiredAddress";
import ResultModal from "./components/Pages/ResultModal/ResultModal";
import History from "./components/Pages/History/History";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const queryClient = new QueryClient();
  const [selectedTab, setSelectedTab] = useState("1");
  const [historyData, setHistoryData] = useState([]);
  const [currentSearch, setCurrentSearch] = useState([]);
  const location = useLocation();
  return (
    <div className="Wrapper">
      <QueryClientProvider client={queryClient}>
        <Menu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <Address
                setSelectedTab={setSelectedTab}
                setCurrentSearch={setCurrentSearch}
                currentSearch={currentSearch}
              />
            }
          />
          <Route
            path="/index"
            element={
              <Address
                setSelectedTab={setSelectedTab}
                setCurrentSearch={setCurrentSearch}
                currentSearch={currentSearch}
              />
            }
          />
          <Route
            path="/desired-address"
            element={
              <DesiredAddress
                currentSearch={currentSearch}
                setCurrentSearch={setCurrentSearch}
                setSelectedTab={setSelectedTab}
              />
            }
          />
          <Route
            path="/history"
            element={
              <History
                historyData={historyData}
                setSelectedTab={setSelectedTab}
              />
            }
          />
          <Route
            path="/result"
            element={
              <ResultModal
                setCurrentSearch={setCurrentSearch}
                historyData={historyData}
                currentSearch={currentSearch}
                setHistoryData={setHistoryData}
                setSelectedTab={setSelectedTab}
              />
            }
          />
          <Route
            path="*"
            element={
              <Address
                setSelectedTab={setSelectedTab}
                setCurrentSearch={setCurrentSearch}
                currentSearch={currentSearch}
              />
            }
          />
        </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;
