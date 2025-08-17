import Brand from "@/components/landing/Brand";
import Category from "@/components/landing/Category";
import Hero from "@/components/landing/Hero";
import NewArrivals from "@/components/landing/NewArrivals";

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
      <section>
        <NewArrivals />
      </section>
    </>
  );
}
