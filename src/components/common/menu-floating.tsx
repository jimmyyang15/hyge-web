import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const MenuFloating = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="px-4 py-2 flex gap-2 items-center whitespace-nowrap text-xs rounded-full flex-[0.5] border border-white/20 border-neutral-600  text-white transition duration-200">
        Menu
        <Menu size={12} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-[#2c3f5a] text-white border-white/20 flex flex-col space-y-2">
        <DropdownMenuItem>Home</DropdownMenuItem>
        <DropdownMenuItem>Services</DropdownMenuItem>
        <DropdownMenuItem>Why Us</DropdownMenuItem>
        <DropdownMenuItem>Our Process</DropdownMenuItem>
        <DropdownMenuItem>Our Work</DropdownMenuItem>
        <DropdownMenuItem>FAQs</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default MenuFloating;
