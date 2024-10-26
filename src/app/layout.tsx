// app/layout.tsx
import { type Metadata } from 'next'
import { Poppins } from 'next/font/google'
import clsx from 'clsx'
import '@/styles/font.css'
import '@/styles/tailwind.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Dental Hospital',
    default: 'Dental Hospital - Your Smile, Our Priority',
  },
  description:
    'At Dental Hospital, we are committed to providing the highest quality dental care for you and your family. Discover our comprehensive services and meet our experienced team dedicated to your oral health.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        poppins.variable,
        'font-poppins'
      )}
    >
      <body className="flex min-h-full font-poppins">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
