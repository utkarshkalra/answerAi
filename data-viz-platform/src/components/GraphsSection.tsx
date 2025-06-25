import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { DotProps } from "recharts";
import type { TooltipProps } from "recharts";
import type { ValueType } from "recharts/types/component/DefaultTooltipContent";
import type { NameType } from "recharts/types/component/DefaultTooltipContent";

interface CustomDotProps extends DotProps {
  index?: number;
}

const data = [
  { name: "Apr", uv: 4000, pv: 2400, amt: 2400 },
  { name: "May", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Jun", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Jul", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Aug", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Sep", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Oct", uv: 3490, pv: 4300, amt: 2100 },
];

const GraphsSection = () => {
  const target = 4500;
  const Info = (value: number) => {
    const percentage = (Math.abs(value - target) * 100.0) / target;
    return [percentage.toFixed(2), value > target];
  };
  const CustomTooltip = ({
    active,
    payload,
  }: TooltipProps<ValueType, NameType>) => {
    const [percentage, isAboveTarget] = Info(payload?.[0]?.value as number);
    if (active && payload && payload.length) {
      return (
        <div className=" bg-[#22232433] border border-card-border p-6 rounded-md backdrop-blur-lg">
          <h1 className="text-white text-xl font-bold flex items-center gap-2">
            {`$${((payload[0].value as number) * 1.0) / 1000}k`}
            <span>
              <img src="/src/assets/icons/info.svg" alt="info" />
            </span>
          </h1>
          <p className="text-base font-normal text-[#878787] flex items-center gap-2 mt-3">
            <span
              className={`text-white border ${
                isAboveTarget
                  ? "bg-[#C8E97233] border-[#C8E972]"
                  : "bg-[#FF000033] border-[#ad0808]"
              }  rounded-full p-1 w-6 h-6 flex items-center justify-center`}
            >
              <svg
                width="8"
                height="7"
                viewBox="0 0 8 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                transform={isAboveTarget ? "rotate(0)" : "rotate(180)"}
              >
                <path
                  d="M4.41672 6.83334H3.58339V1.83334L1.29172 4.125L0.700058 3.53334L4.00006 0.233337L7.30006 3.53334L6.70839 4.125L4.41672 1.83334V6.83334Z"
                  fill={isAboveTarget ? "#C8E972" : "#ff0000"}
                />
              </svg>
            </span>
            {percentage}% {isAboveTarget ? "above target" : "below target"}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-full">
      <h2 className="text-xl font-bold h-1/10 roobert-font mb-2">Graphs</h2>

      <div className="bg-graph-background p-6 rounded-md h-9/10 border border-card-border relative">
        <div className="flex justify-between items-center mb-2 h-15">
          <select className="bg-[#18181A80] rounded-md border border-button-border absolute top-6 right-6 pl-1 pr-8 py-2">
            <option>Unsatisfied Demand % </option>
            <option>Growth % </option>
            <option>Charging Stations </option>
          </select>
        </div>
        <div style={{ width: "100%", height: "87%" }}>
          <ResponsiveContainer>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="#363637" />
              <XAxis dataKey="name" stroke="#575757" />
              <YAxis stroke="#575757" />
              <Tooltip content={CustomTooltip} />
              <Line
                type="linear"
                dataKey="pv"
                stroke="#C8E972"
                dot={(props: CustomDotProps) => {
                  const { cx, cy } = props;
                  return (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={4}
                      stroke="#C8E972"
                      strokeWidth={2}
                    />
                  );
                }}
                activeDot={(props: CustomDotProps) => {
                  const { cx, cy } = props;
                  return (
                    <circle cx={cx} cy={cy} r={8} fill="#C8E972" stroke="#" />
                  );
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default GraphsSection;
