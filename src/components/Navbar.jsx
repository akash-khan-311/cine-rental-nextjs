import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav className=" flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src="/logo.svg" width={139} height={26} alt="Logo" />
        </Link>
        <ul className="flex items-center space-x-5">
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image src="/ring.svg" width={24} height={24} alt="ring" />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src="/icons/sun.svg"
                width={24}
                height={24}
                alt="sun icon"
              />
            </Link>
          </li>
          <li>
            <Link
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <Image
                src="/shopping-cart.svg"
                width={24}
                height={24}
                alt="shopping cart icon"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
