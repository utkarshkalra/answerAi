import React, { useEffect, useState } from "react";
import type { Variable, VariableCategory } from "./Dashboard";
import Variables from "./Variables";
import AccordionButton from "./AccordionButton";
interface EditVariablesModalProps {
  open: boolean;
  onClose: () => void;
  variables: VariableCategory[];
  setVariables: (variables: VariableCategory[]) => void;
}

const EditVariablesModal: React.FC<EditVariablesModalProps> = ({
  open,
  onClose,
  variables,
  setVariables,
}) => {
  const [stateVariables, setStateVariables] = useState(variables);
  const [primaryVariablesOpen, setPrimaryVariablesOpen] = useState(false);
  const [secondaryVariablesOpen, setSecondaryVariablesOpen] = useState(false);

  const primarySecBtnClass =
    "w-full flex justify-between items-center bg-graph-background px-4 py-4 rounded text-left text-[#cbe972] border border-card-border text-xl font-medium";
  const togglePrimaryVariables = () => {
    setPrimaryVariablesOpen(!primaryVariablesOpen);
  };

  const toggleSecondaryVariables = () => {
    setSecondaryVariablesOpen(!secondaryVariablesOpen);
  };

  const toggleVariable = (
    variable: Variable,
    variablesArg: VariableCategory[]
  ) => {
    const newVariables = [...variablesArg].map((category) => {
      return {
        ...category,
        variables: category.variables.map((v) => {
          if (v.id === variable.id) {
            return { ...v, active: !v.active };
          }
          return v;
        }),
      };
    });
    setStateVariables(newVariables);
    setVariables(newVariables);
  };

  useEffect(() => {
    setStateVariables(variables);
  }, [variables]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <div>
      <div
        className={`z-40 backdrop-blur-xs fixed inset-0 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      ></div>
      <div
        className={`fixed inset-0 z-50 flex items-end justify-end ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`
      relative ml-auto h-full w-[700px] bg-[#0E0D0D] border border-[#363637] p-8 overflow-y-auto
      transform transition-transform duration-300 ease-in-out
      ${open ? "translate-x-0" : "translate-x-full"}
    `}
          style={{ willChange: "transform" }}
        >
          {" "}
          <button className="absolute top-8 right-8 text-2xl" onClick={onClose}>
            ✕
          </button>
          <h2 className="text-2xl  mb-6 text-white inter-font">
            Edit Variables
          </h2>
          <div className="flex gap-2 mb-6">
            <input
              className="flex-1 bg-[#242424] rounded px-4 py-2 text-white border border-[#363637]"
              placeholder="Search..."
            />
            <div className="flex items-center gap-2">
              <button className="bg-[#242424] text-white px-4 py-2 rounded border border-button-border flex items-center gap-2">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.7273 0L13.6964 2.25L11.4545 3.27273L13.6964 4.30364L14.7273 6.54545L15.75 4.30364L18 3.27273L15.75 2.25M6.54545 2.45455L4.5 6.95455L0 9L4.5 11.0455L6.54545 15.5455L8.59091 11.0455L13.0909 9L8.59091 6.95455M14.7273 11.4545L13.6964 13.6964L11.4545 14.7273L13.6964 15.75L14.7273 18L15.75 15.75L18 14.7273L15.75 13.6964"
                    fill="#B9B9B9"
                  />
                </svg>
                Autofill
              </button>
            </div>
            <div className="rounded bg-gradient-to-b from-[#C8E972] to-[#577113] p-[0.67px] ">
              <div className="px-4 py-2 flex items-center justify-center bg-[#23291E] rounded rerun-inner-shadow">
                <img src="/src/assets/icons/reload.svg" alt="rerun" />

                <button className="text-[#C9FF3B] rounded ml-4">Rerun</button>
              </div>
            </div>
          </div>
          {/* Variable categories */}
          <div>
            <Variables
              propsVariables={stateVariables}
              toggleVariable={toggleVariable}
            />

            {/* Accordions */}
            <div className="mb-6">
              <button className={primarySecBtnClass}>
                Primary Variables{" "}
                <AccordionButton
                  onClick={togglePrimaryVariables}
                  open={primaryVariablesOpen}
                />
              </button>
              {primaryVariablesOpen && (
                <Variables
                  propsVariables={stateVariables}
                  toggleVariable={toggleVariable}
                />
              )}
            </div>
            <div>
              <button className={primarySecBtnClass}>
                Secondary Variables{" "}
                <AccordionButton
                  onClick={toggleSecondaryVariables}
                  open={secondaryVariablesOpen}
                />
              </button>
              {secondaryVariablesOpen && (
                <Variables
                  propsVariables={stateVariables}
                  toggleVariable={toggleVariable}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditVariablesModal;
