import React from "react";

export default function HeartIcon({ filled = false, ...props }) {
  return filled ? (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="var(--color-primary)"
      stroke="var(--color-primary)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 21s-6.2-5.2-8.5-8.1C1.2 10.1 2.1 7 4.7 5.6c2.1-1.1 4.3-.2 5.6 1.3C11.6 4.4 13.8 3.5 15.9 4.6c2.6 1.4 3.5 4.5 1.2 7.3C18.2 15.8 12 21 12 21z" />
    </svg>
  ) : (
    <svg
      viewBox="0 0 24 24"
      width="28"
      height="28"
      fill="none"
      stroke="var(--color-primary)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 21s-6.2-5.2-8.5-8.1C1.2 10.1 2.1 7 4.7 5.6c2.1-1.1 4.3-.2 5.6 1.3C11.6 4.4 13.8 3.5 15.9 4.6c2.6 1.4 3.5 4.5 1.2 7.3C18.2 15.8 12 21 12 21z" />
    </svg>
  );
}
