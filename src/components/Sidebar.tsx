import React from "react";
import SidebarListItem from "./SidebarListItem";

const Sidebar: React.FC<SidebarProps> = ({ genres }) => {
  return (
    <div className="overflow-y-scroll font-sans bottom-0 bg-gray-900 hidden md:block md:fixed md:top-[81.33px] w-48 md:left-0 z-50 p-4">
      <h5 className="font-bold text-slate-200">Genre</h5>

      <ul>
        {genres.map(genre => (
          <SidebarListItem key={genre.id} genre={genre} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
