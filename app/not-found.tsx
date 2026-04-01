import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-black text-[#E8450A] mb-4">404</h1>
        <p className="text-xl text-[#F0F0F0] mb-2">Page not found</p>
        <p className="text-[#C0C0C0] mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="px-6 py-3 bg-[#E8450A] text-white font-bold rounded-full hover:bg-[#d13d09] transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
