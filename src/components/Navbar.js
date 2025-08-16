import Link from "next/link";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { LiaShoePrintsSolid } from "react-icons/lia";

export default function Navbar() {
  return (
    <nav className="bg-transparent text-white fixed w-screen top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4 w-full">
        <div className="flex justify-start w-3/5 font-montserrat">
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link href="/" className="hover:text-orange-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/men" className="hover:text-orange-400">
                Men
              </Link>
            </li>
            <li>
              <Link href="/women" className="hover:text-orange-400">
                Women
              </Link>
            </li>
            <li>
              <Link href="/kids" className="hover:text-orange-400">
                Kids
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-4xl flex font-oswald font-semibold gap-1">
          <h1>SPA</h1>
          <span>
            <LiaShoePrintsSolid size={30} />
          </span>{" "}
          <h1 className="text-orange-400">TOO</h1>
        </div>

        <div className="flex gap-6 w-3/5 justify-end">
          <button className="flex items-center justify-end cursor-pointer">
            <IoBagHandleOutline size={20} />
          </button>
          <button className="bg-orange-400 p-2 rounded-full hover:bg-orange-500 transition-colors duration-200 cursor-pointer">
            <FaRegUser />
          </button>
        </div>
      </div>
    </nav>
  );
}
