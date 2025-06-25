const Sidebar = () => {
  const activeClass =
    "border border-color-[#525252] bg-[#FFFFFF1A] rounded-xl border-card-border";
  const sideBarNavClass = "w-[40px] h-[40px] flex items-center justify-center";
  return (
    <div className="w-20 bg-color-1 flex flex-col items-center justify-between">
      <div className="text-3xl h-1/10 flex items-center justify-center">
        <img src=" icons/menu.svg" alt="logo" />
      </div>
      <div className="space-y-8 flex flex-col items-center justify-between h-9/10">
        <SidebarNav
          activeClass={activeClass}
          sideBarNavClass={sideBarNavClass}
        />
      </div>
      <div className={`${sideBarNavClass} mb-8`}>
        <img src=" icons/account-circle.svg" alt="logo" />
      </div>
    </div>
  );
};

const SidebarNav = ({
  activeClass,
  sideBarNavClass,
}: {
  activeClass: string;
  sideBarNavClass: string;
}) => {
  return (
    <div className="space-y-6 flex flex-col items-center">
      <div className={`${activeClass} ${sideBarNavClass}`}>
        <img src=" icons/home.svg" alt="logo" />
      </div>
      <div className={`${sideBarNavClass}`}>
        <img src=" icons/bell.svg" alt="logo" />
      </div>
      <div className={`${sideBarNavClass}`}>
        <img src=" icons/clipboard-text-clock.png" alt="logo" />
      </div>
      <div className={`${sideBarNavClass}`}>
        <img src=" icons/cloud-upload.svg" alt="logo" />
      </div>
      <div className={`${sideBarNavClass}`}>
        <img src=" icons/cog.png" alt="logo" />
      </div>
    </div>
  );
};

export default Sidebar;
