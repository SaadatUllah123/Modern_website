import Link from "next/link";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/features"}>features</Link>
          </li>
          <li>
            <Link href={"/pricing"}>pricing</Link>
          </li>
          <li>
            <Link href={"/blog"}>blog</Link>
          </li>
          <li>
            <Link href={"/contact"}>contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
