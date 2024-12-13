import Link from 'next/link';

export default function NavItem({ icon, href, children }) {
  return (
    <li>
      <Link className="flex items-center gap-2 py-1 transition bg-zinc-700 hover:bg-blue-900 hover:-translate-y-0.5 px-4 rounded-lg" href={href}>
        <i className={icon}></i>
        <span>{children}</span>
      </Link>
    </li>
  )
}