import { useState } from "react";
import Button from "./Button";

const Header = () => {
  const [active, setActive] = useState(1);

  return (
    <header className="flex justify-between items-center p-4 h-1/11">
      <div className="flex space-x-2">
        <Button
          active={active === 1}
          onClick={() => {
            setActive(1);
          }}
        >
          Charging Stations
        </Button>
        <Button
          active={active === 2}
          onClick={() => {
            setActive(2);
          }}
        >
          Fleet Sizing
        </Button>
        <Button
          active={active === 3}
          onClick={() => {
            setActive(3);
          }}
        >
          Parking
        </Button>
      </div>
      <div className="flex items-center gap-2 bg-[#2C2E334D] p-2 rounded-md border border-button-border overflow-hidden">
        <div>
          <img src=" icons/search.svg" alt="search" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="border-none outline-none bg-transparent"
        />
      </div>
    </header>
  );
};

export default Header;
