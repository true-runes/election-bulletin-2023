import './globals.css'
import Script from 'next/script'

const siteName = '幻水総選挙2023 投票対象リスト'
const description =
  '幻水総選挙2023における投票対象のリストを紹介しているサイトです。'
const url = 'https://election-bulletin.suikoden.info/'

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteName,
    description,
    site: '@gensosenkyo',
    creator: '@gensosenkyo',
  },
  alternates: {
    canonical: url,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GTM-52G88WJ"
          strategy="lazyOnload"
        />
        <Script
          id="google"
          dangerouslySetInnerHTML={{
            __html: ` window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'GTM-52G88WJ');`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
