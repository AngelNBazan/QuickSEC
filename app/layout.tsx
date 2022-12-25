import '../styles/global.css'
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
      <body>{children}</body>
    </html>
  )
}
