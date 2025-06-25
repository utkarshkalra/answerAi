import { memo, useState, useRef } from "react";
import type { Variable, VariableCategory } from "./Dashboard";
import VariableContext from "./VariableContext";

const TickIcon = memo(() => {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.2497 1.58301L3.24969 8.58301L0.041687 5.375L0.863953 4.55273L3.24969 6.93262L9.42743 0.760742L10.2497 1.58301Z"
        fill="#C8E972"
      />
      <path
        d="M10.2497 1.58301L3.24969 8.58301L0.041687 5.375L0.863953 4.55273L3.24969 6.93262L9.42743 0.760742L10.2497 1.58301Z"
        stroke="#C8E972"
      />
    </svg>
  );
});

export const SparkleIcon = memo(({ active }: { active: boolean }) => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.93007 0L7.37496 1.21154L6.16783 1.76224L7.37496 2.31734L7.93007 3.52448L8.48077 2.31734L9.69231 1.76224L8.48077 1.21154M3.52448 1.32168L2.42308 3.74476L0 4.84615L2.42308 5.94755L3.52448 8.37063L4.62587 5.94755L7.04895 4.84615L4.62587 3.74476M7.93007 6.16783L7.37496 7.37496L6.16783 7.93007L7.37496 8.48077L7.93007 9.69231L8.48077 8.48077L9.69231 7.93007L8.48077 7.37496"
        fill={active ? "#C8E972" : "#D5D5D5"}
      />
    </svg>
  );
});

const Variables: React.FC<{
  propsVariables: VariableCategory[];
  toggleVariable: (
    variable: Variable,
    variablesArg: VariableCategory[]
  ) => void;
}> = ({ propsVariables, toggleVariable }) => {
  const [variableContext, setVariableContext] = useState<{
    visible: boolean;
    variable: Variable | null;
  }>({
    visible: false,
    variable: null,
  });

  // Timer ref for hover delay
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (variable: Variable) => {
    hoverTimer.current = setTimeout(() => {
      setVariableContext({
        visible: true,
        variable,
      });
    }, 1500);
  };

  const handleMouseLeave = () => {
    if (hoverTimer.current) {
      clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }
    setVariableContext({
      visible: false,
      variable: null,
    });
  };

  return (
    <div className="bg-[#161618] rounded-lg  mb-6 border border-[#525252]">
      <div className="p-6">
        {propsVariables?.map((category, index) => {
          return (
            <div key={index} className="mb-4">
              <div className=" mb-4">{category.name}</div>
              <div className="flex flex-wrap gap-2">
                {category.variables.map((variable: Variable, index: number) => {
                  return (
                    <p
                      key={index}
                      className={` border  bg-[#5959594D]  px-3 py-2 rounded-full flex items-center gap-2 mr-2 mb-3 font-normal ${
                        variable.active
                          ? "bg-[#CCFF001A] border-[#C9FF3B] text-[#C8E972FD]"
                          : "border-[#EEEEEE] text-[#D5D5D5]"
                      }`}
                      onClick={() => toggleVariable(variable, propsVariables)}
                      onMouseEnter={() => handleMouseEnter(variable)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className="mr-3">{variable.name}</span>
                      <SparkleIcon active={variable.active} />

                      {variable.active ? <TickIcon /> : "+"}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <VariableContext variableContext={variableContext} />
    </div>
  );
};

export default Variables;
