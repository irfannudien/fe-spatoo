import Brand from "@/components/landing/Brand";
import Category from "@/components/landing/Category";
import Hero from "@/components/landing/Hero";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Brand />
      </section>
      <section>
        <Category />
      </section>
    </>
    // <main className="flex flex-col items-center justify-center px-4 py-20">
    //   <section className="text-center max-w-3xl">
    //     <h1 className="text-5xl font-extrabold mb-6">Welcome to ShoeShop</h1>
    //     <p className="mb-8 text-lg">
    //       Your best choice for quality and stylish shoes. Discover our latest
    //       collections and enjoy comfortable shopping experience.
    //     </p>
    //     <a
    //       href="#"
    //       className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition"
    //     >
    //       Shop Now
    //     </a>
    //   </section>
    // </main>
  );
}
