import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-peach p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Youth Vote</Link>
        <ul className="flex space-x-4">
          <li><Link href="/organize" className="hover:underline">Organize</Link></li>
          <li><Link href="/engage" className="hover:underline">Engage</Link></li>
          <li><Link href="/incentivize" className="hover:underline">Incentivize</Link></li>
        </ul>
      </nav>
    </header>
  )
}

