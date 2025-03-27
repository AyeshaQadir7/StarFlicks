"use client";
import { useState, useEffect } from "react";
import Preloader from "@/components/Loader/Preloader";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 4000); 
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Preloader /> : children}</>;
}
