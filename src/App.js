import "./app.css";
import Address from "./components/Pages/Address/Address";
import Menu from "./components/Pages/Menu/Menu";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import DesiredAddress from "./components/Pages/DesiredAddress/DesiredAddress";
import ResultModal from "./components/Pages/ResultModal/ResultModal";
import History from "./components/Pages/History/History";

function App() {
  const queryClient = new QueryClient();
  const [selectedTab, setSelectedTab] = useState("1");
  const [showResult, setShowResult] = useState(false);
  const [historyData, setHistoryData] = useState([]);
  const [currentSearch, setCurrentSearch] = useState([]);
  return (
    <div className="Wrapper">
      <QueryClientProvider client={queryClient}>
        <Menu
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
          setShowResult={setShowResult}
        />
        {selectedTab === "1" && !showResult && (
          <Address
            setSelectedTab={setSelectedTab}
            setCurrentSearch={setCurrentSearch}
            currentSearch={currentSearch}
          />
        )}

        {selectedTab === "2" && !showResult && (
          <DesiredAddress
            currentSearch={currentSearch}
            setCurrentSearch={setCurrentSearch}
            setShowResult={setShowResult}
          />
        )}
        {selectedTab === "3" && !showResult && (
          <History historyData={historyData} />
        )}
        {showResult && (
          <ResultModal
            currentSearch={currentSearch}
            setHistoryData={setHistoryData}
          />
        )}
      </QueryClientProvider>
    </div>
  );
}

export default App;
