/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jXm32oteiDc
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { JSX, SVGProps } from "react"

export default function Home() {
  return (
    <div className="grid min-h-screen place-content-center gap-4 px-4 text-center md:px-6">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">Legal Information</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Link
          className="flex items-center p-4 rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm hover:shadow transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="./privacy-policy"
        >
          <FoldVerticalIcon className="w-6 h-6 mr-2 flex-shrink-0" />
          <div className="grid gap-1.5">
            <h2 className="text-base text-white font-semibold">Privacy Policies</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">View our Privacy Policies</p>
          </div>
        </Link>
        <Link
          className="flex items-center p-4 rounded-lg border border-gray-200 border-gray-200 bg-white shadow-sm hover:shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
          href="./terms&conditions"
        >
          <FoldVerticalIcon className="w-6 h-6 mr-2 flex-shrink-0" />
          <div className="grid gap-1.5">
            <h2 className="text-base text-white font-semibold">Terms and Conditions</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">View our Terms and Conditions</p>
          </div>
        </Link>
      </div>
      <span className="text-sm font-semibold underline hover:text-slate-700"><Link href={"./account-deletion-request"}>Account Deletion</Link></span>
      <div className="mx-auto max-w-sm text-xs text-gray-500 dark:text-gray-400">
        © 2024 Wow Health
      </div>
    </div>
  )
}

function FoldVerticalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22v-6" />
      <path d="M12 8V2" />
      <path d="M4 12H2" />
      <path d="M10 12H8" />
      <path d="M16 12h-2" />
      <path d="M22 12h-2" />
      <path d="m15 19-3-3-3 3" />
      <path d="m15 5-3 3-3-3" />
    </svg>
  )
}
