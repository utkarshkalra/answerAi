import { useEffect, useState } from "react";
import BestScenarioResults from "./BestScenarioResults";
import Button from "./Button";
import GraphsSection from "./GraphsSection";
import KpiSection from "./KpiSection";
import EditVariablesModal from "./EditVariablesModal";

export interface Variable {
  id: number;
  name: string;
  active: boolean;
  tags: string[];
  context: string;
}

export interface VariableCategory {
  name: string;
  variables: Variable[];
}

const Dashboard = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [variables, setVariables] = useState<VariableCategory[]>([]);

  useEffect(() => {
    const fetchVariables = async () => {
      const response = await fetch("/variables.json");
      const data = await response.json();
      setVariables(data);
    };
    fetchVariables();
  }, []);

  return (
    <>
      <main className="p-7 bg-dashboard-background border border-card-border rounded-md h-10/11 dashboard inter-font border-r-0 rounded-r-none">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl  font-bold flex items-center roobert-font">
            <span className="mr-3">
              <img src=" icons/lightning-bolt.png" alt="bolt" />
            </span>
            Charging Station
          </h1>
          <div className="flex items-center space-x-4">
            <Button active={true} onClick={() => {}}>
              <img src=" icons/history.svg" alt="refresh" />
            </Button>
            <Button active={true} onClick={() => setShowEditModal(true)}>
              Edit Variables
            </Button>
            <Button active={true} onClick={() => {}}>
              <div className="flex flex-col items-center justify-center">
                <img src=" icons/Arrow21.svg" alt="upload" />
                <img src=" icons/Vector10.svg" alt="upload" />
              </div>
            </Button>
          </div>
        </div>
        <BestScenarioResults />
        <div className="grid grid-cols-5 gap-8 mt-4 h-5/10">
          <div className="col-span-3">
            <GraphsSection />
          </div>
          <div className="col-span-2">
            <KpiSection />
          </div>
        </div>
      </main>
      <EditVariablesModal
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
        variables={variables}
        setVariables={setVariables}
      />
    </>
  );
};

export default Dashboard;
