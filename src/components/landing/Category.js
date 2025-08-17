// import { bgCat } from "@/assets/background";
import { background, category } from "@/lib/images";

export default function Category() {
  const categories = [
    { name: "Men's", image: "/assets/category/men4.jpg" },
    { name: "Women's", image: "/assets/category/women2.jpg" },
    { name: "Kids", image: "/assets/category/kids.jpg" },
  ];

  return (
    <section
      className="p-16 bg-cover bg-fixed bg-center relative w-screen flex justify-center"
      style={{ backgroundImage: `url(${background.category})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80 backdrop-blur-xs" />
      <div className="relative flex flex-col items-center justify-center gap-6">
        <div className="w-full flex">
          <h2 className="text-2xl font-montserrat text-white tracking-wider">
            Category
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="relative w-72 h-96 rounded-2xl overflow-hidden group shadow-lg"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500"></div>

              <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-2">
                <h3 className="text-xl font-quicksand text-white drop-shadow-lg">
                  {cat.name}
                </h3>

                <button className="rounded-full px-4 py-0.5 bg-transparent border border-white text-white hover:bg-white hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                  Shop now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
