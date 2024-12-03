import "./globals.css";
import GoogleAnalytics from './components/GoogleAnalytics'

export const metadata = {
  title: 'Hedgehog Fundamentals',
  description: 'Where Knowledge Grows Like Compound Interest',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-Z7GNF0YK8Y" />
        {children}
      </body>
    </html>
  )
}
