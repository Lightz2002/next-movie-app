import Link from "next/link";
import React from "react";

const SidebarListItem: React.FC<SidebarListItemProps> = ({ genre }) => {
  return (
    <li className="text-gray-600 hover:text-gray-400 list-none">
      <Link href={`genre/${genre.id.toString()}`}>{genre.name}</Link>
    </li>
  );
};

export default SidebarListItem;
