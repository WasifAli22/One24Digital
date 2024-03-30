import Link from 'next/link'
import { headers } from 'next/headers'
 
export default async function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-4xl font-bold text-gray-800 mb-4">Page Not Created</h1>
    <p className="text-lg text-gray-600 mb-4">Sorry, the page you&apos;re looking for does not exist.</p>
    <Link href="/">
        Go back to home page
    </Link>
  </div>
  )
}