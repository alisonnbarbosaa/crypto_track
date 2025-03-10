import Link from "next/link";

export default function NavLink({ CustomLink }) {
  return (
    <nav className={`px-4 ${CustomLink}`}>
      <ul className="flex justify-center gap-4 text_primary font-medium">
        <li>
          <Link href="/" className="flex items-center gap-2">
            Home
          </Link>
        </li>
        <li>
          <Link href="/trending" className="flex items-center gap-2">
            Trending
          </Link>
        </li>
        <li>
          <Link href="/news" className="flex items-center gap-2">
            News
          </Link>
        </li>
        <li>
          <Link href="/learn" className="flex items-center gap-2">
            Learn
          </Link>
        </li>
      </ul>
    </nav>
  );
}
