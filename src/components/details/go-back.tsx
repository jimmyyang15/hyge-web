'use client'


import React from "react";
import { Button } from "../ui/button";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
const GoBack = () => {
    const router = useRouter();
  return (
    <Button className="text[#C5C5C5] " onClick={()=>router.back()}>
      <MoveLeft className="mr-6 h-4 w-4" />
      Go Back
    </Button>
  );
};

export default GoBack;
