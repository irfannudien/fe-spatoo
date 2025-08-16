import Image from "next/image";

export default function Hero() {
  return (
    <div className="min-h-screen">
      <Image
        src="/assets/bg-nike.jpg"
        alt="spatoo.com"
        fill
        className="object-cover"
      />

      <div className="absolute flex">
        <h1>Welcome</h1>
        <h2>SPA TOO</h2>
      </div>
    </div>
  );
}
