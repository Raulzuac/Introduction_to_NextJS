import { ArrowBigLeft } from "lucide-react";
import Link from "next/link";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <Link href="/pokedex" className="w-full flex flex-row"><ArrowBigLeft/> Volver a pokedex </Link>
      <div className="grow p-6 md:overflow-y-auto">{children}</div>
    </div>
  )
}