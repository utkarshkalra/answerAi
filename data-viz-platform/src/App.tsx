import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="bg-page-background flex w-full h-screen text-color-textColor text-white">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-color-2 h-full">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
