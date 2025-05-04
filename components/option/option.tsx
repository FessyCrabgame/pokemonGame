"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface WrapperProps {
  wrapperName: string;
  className?: string;
  children: React.ReactNode;
}

export const Option: React.FC<WrapperProps> = ({
  wrapperName,
  className = "",
  children,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={clsx(
        "bg-white min-w-full rounded-2xl p-4 flex flex-col shadow-[16px_16px_16px_16px_rgba(58,58,58,0.05)]",
        className
      )}
    >
      <div className="flex justify-between w-full">
        <p>{wrapperName}</p>
        <ChevronDown
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && children}
    </div>
  );
};
