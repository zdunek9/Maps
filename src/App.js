import "./app.css";
import Address from "./components/Pages/Address/Address";
import Menu from "./components/Pages/Menu/Menu";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import DesiredAddress from "./components/Pages/DesiredAddress/DesiredAddress";
function App() {
  const queryClient = new QueryClient();
  const [selectedTab, setSelectedTab] = useState("1");
  const [history, setHistory] = useState([{}]);
  const [currentSearch, setCurrentSearch] = useState([]);

  console.log(currentSearch);
  return (
    <div className="Wrapper">
      <QueryClientProvider client={queryClient}>
        <Menu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        {selectedTab === "1" && (
          <Address
            setSelectedTab={setSelectedTab}
            setCurrentSearch={setCurrentSearch}
            currentSearch={currentSearch}
          />
        )}

        {selectedTab === "2" && (
          <DesiredAddress
            setSelectedTab={setSelectedTab}
            currentSearch={currentSearch}
            setCurrentSearch={setCurrentSearch}
          />
        )}
      </QueryClientProvider>
    </div>
  );
}

export default App;
