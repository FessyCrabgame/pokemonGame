"use client";

import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import css from "./option.module.css";

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
    <div className={clsx(css.wrapper, className)}>
      <div className={css.header}>
        <p className={css.name}>{wrapperName}</p>
        <ChevronDown className={css.icon} onClick={() => setOpen(!open)} />
      </div>
      {open && children}
    </div>
  );
};
