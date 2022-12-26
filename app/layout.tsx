import '../styles/global.css'
import NavBar from "../components/NavBar"

import {Inter} from '@next/font/google';
const  Mfont  = Inter({subsets:['latin']})
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={Mfont.className}>
      <head />
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
