import Image from "next/image";
import React from "react";
import BrandImage from "../BrandImage";

export default function Brand() {
  return (
    <div className="w-full flex h-30 px-4 space-x-10">
      <BrandImage src="/assets/brand/nike.png" alt="nike" width={200} />
      <BrandImage src="/assets/brand/cons.png" alt="converse" width={250} />
    </div>
  );
}
