"use client";

import { usePathname } from "next/navigation";
import TestButton from "./test";

export default function LayoutClient({ children }) {
  const pathname = usePathname();

  return (
    <>
      {/* 🔥 route değişince yeniden mount */}
      <TestButton key={pathname} />
      {children}
    </>
  );
}