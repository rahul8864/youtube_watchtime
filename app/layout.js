import './globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Watch Time Increase',
  description: 'WatchTime Increase the youtube video',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
