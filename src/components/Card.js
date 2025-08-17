export default function Card({ item }) {
  const [isList, setIsList] = useState(false);

  return (
    <div className="group relative rounded-xl border border-gray-200 bg-white shadow-md hover:shadow-2xl transition-all duration-300">
      <button
        className="absolute right-5 top-5"
        onClick={() => setIsList(!isList)}
      >
        {!isList ? (
          <FaRegHeart size={20} className="text-orange-400" />
        ) : (
          <FaHeart size={20} className="text-orange-400" />
        )}
      </button>

      <img
        src={item.image}
        alt={item.name}
        className="w-full aspect-[1/1] object-cover rounded-xl"
      />

      <div className="p-6 flex flex-col gap-3">
        <h3 className="text-lg font-semibold text-gray-500 transition">
          {item.name}
        </h3>
        <p className="text-gold font-bold">{item.price}</p>
        <div className="flex w-full gap-2">
          <button className="border border-orange-400 bg-orange-400 text-white rounded-lg p-2 cursor-pointer hover:bg-transparent hover:text-orange-400 transition duration-300">
            <FaCartPlus size={20} />
          </button>
          <button className="w-full border border-orange-400 rounded-lg text-orange-400 hover:bg-orange-400 hover:text-white transition duration-300 cursor-pointer">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
