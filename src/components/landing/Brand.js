import Image from "next/image";
import React from "react";
import BrandImage from "../BrandImage";
import { brand } from "@/lib/images";

export default function Brand() {
  return (
    <div className="w-full flex p-4 gap-16">
      <BrandImage src={brand.nike} alt="nike" width={300} />
      <BrandImage src={brand.jordan} alt="jordan" width={300} />
      <BrandImage src={brand.adidas} alt="adidas" width={300} />
      <BrandImage src={brand.converse} alt="converse" width={500} />
      <BrandImage src={brand.puma} alt="puma" width={300} />
      <BrandImage src={brand.onitsuka} alt="onitsuka tiger" width={300} />
      <BrandImage src={brand.nb} alt="new balance" width={300} />
      <BrandImage src={brand.vans} alt="new balance" width={300} />
    </div>
  );
}
