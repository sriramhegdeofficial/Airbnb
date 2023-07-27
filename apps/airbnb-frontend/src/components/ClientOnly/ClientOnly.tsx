"use client";

import React from "react";

export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;
  // write rest of your code
  return <>{children}</>;
}
