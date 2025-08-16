import Image from "next/image";

export default function BrandImage({
  src,
  alt,
  containerClass = "",
  imgClass = "",
  width,
}) {
  return (
    <div className={`flex justify-center ${containerClass}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={0}
        className="object-contain"
      />
    </div>
  );
}
