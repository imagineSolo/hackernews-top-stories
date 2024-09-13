import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-white shadow mb-6">
      <nav className="container mx-auto flex justify-between items-center py-4 px-6">
        <div>
          <Link href="/" className="sm:text-small md:text-xl font-bold text-gray-800">
            HackerNews Stories
          </Link>
        </div>
        <div>
          <Link href="/feedback">
            <button className="bg-yellow-500 text-white font-semibold py-1 md:py-2 px-1 md:px-4 rounded hover:bg-yellow-600">
              Feedback
            </button>
          </Link>
        </div>
      </nav>
    </header>
  )
}
