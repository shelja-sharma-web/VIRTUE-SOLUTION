import { useState, type ReactNode, type MouseEvent } from "react";
import { goToContact } from "@/lib/contact";

type Props = {
  className?: string;
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
};

/** Wraps a button that, when clicked, opens the Get-Free-Consultation dialog. */
export function ConsultButton({ className = "", children, onClick }: Props) {
  // Ensure the button is clickable and on top
  const classes = `${className} cursor-pointer relative z-50 pointer-events-auto`;
  return (
    <button
      type="button"
      onClick={(e) => {
        onClick?.(e);
        // Scroll to #contact if present, else navigate to /contact
        goToContact();
      }}
      className={classes}
      aria-label="Get Free Consultation"
    >
      {children}
    </button>
  );
}
