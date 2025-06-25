import type { Variable } from "./Dashboard";

const VariableContext: React.FC<{
  variableContext: {
    visible: boolean;
    variable: Variable | null;
  };
}> = ({ variableContext }) => {
  if (!variableContext?.variable) return null;
  return (
    <div
      className={`bg-[#222324] border-t border-card-border rounded-b-lg overflow-hidden transition-all duration-300 ease-in-out ${
        variableContext.visible ? "opacity-100 max-h-400" : "opacity-0 max-h-0"
      }`}
    >
      <div className="p-9">
        <h3 className="text-white text-xl font-medium inter mb-5 ">
          {variableContext.variable.name}
          <span className="ml-3">ⓘ</span>
        </h3>
        <p className="text-sm text-text-secondary-color">
          {variableContext.variable.context}
        </p>
      </div>
    </div>
  );
};

export default VariableContext;
