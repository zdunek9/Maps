import "./app.css";
import Address from "./components/Pages/Address/Address";
import Menu from "./components/Pages/Menu/Menu";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
function App() {
  const queryClient = new QueryClient();
  const [selectedTab, setSelectedTab] = useState("1");
  return (
    <div className="Wrapper">
      <QueryClientProvider client={queryClient}>
        <Menu selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <Address selectedTab={selectedTab} setSelectedTab={setSelectedTab} />;
      </QueryClientProvider>
    </div>
  );
}

export default App;
