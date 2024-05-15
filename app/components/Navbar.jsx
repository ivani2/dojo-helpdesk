import Image from "next/image"
import Link from "next/link"

import Logo from './dojo-logo.png'
export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="tickets helpdesk"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h2>dojo helpdesk</h2>
      <Link href={"/"}>Dashboard</Link>
      <Link href={"/tickets"}>Tickets</Link>
    </nav>
  )
}
