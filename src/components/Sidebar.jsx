import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="">
      <ul className="space-y-2">
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
            href="#"
          >
            <Image
              src="/icons/trending.svg"
              width={24}
              height={24}
              alt="Trending Icon"
            />
            <span>Trending</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="/icons/newRelease.svg"
              width={24}
              height={24}
              alt="Relase"
            />
            <span>New Releases</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="/icons/commingSoon.svg"
              width={24}
              height={24}
              alt="comming soon icon"
            />
            <span>Coming Soon</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="/icons/favourite.svg"
              width={24}
              height={24}
              alt="favourite icon"
            />
            <span>Favourites</span>
          </Link>
        </li>
        <li>
          <Link
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg"
            href="#"
          >
            <Image
              src="/icons/watchLater.svg"
              width={24}
              height={24}
              alt="watchLater icon"
            />
            <span>Watch Later</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
export default Sidebar;
