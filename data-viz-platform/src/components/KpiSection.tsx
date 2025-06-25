import KpiCard from "./KpiCard";

const KpiSection = () => {
  return (
    <div className="h-full">
      <div className="h-1/10 flex justify-between mb-2">
        <h2 className="text-xl roobert-font font-bold">
          Key Performance Indicators
        </h2>
        <button className="bg-[#18181A80] text-sm text-[#fcfcfc] px-3 py-1 h-9 rounded-md flex items-center border-[#5A5A5AA1] border ">
          Variables <span className="ml-2 text-lg font-extralight">+</span>
        </button>
      </div>
      <div className="grid grid-cols-2 gap-8 h-9/10">
        <KpiCard
          title="Infrastructure Units"
          value="€421.07"
          description="This describes variable two and what the shown data means."
        />
        <KpiCard
          title="Charging Growth"
          value="33.07"
          description="This describes variable two and what the shown data means."
        />
        <KpiCard
          title="Localization change"
          value="21.9%"
          description="This describes variable two and what the shown data means."
        />
        <KpiCard
          title="Fleet growth"
          value="7.03%"
          description="This describes variable two and what the shown data means."
        />
      </div>
    </div>
  );
};

export default KpiSection;
