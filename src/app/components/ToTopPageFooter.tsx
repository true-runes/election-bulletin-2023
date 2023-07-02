import Link from 'next/link'

export const ToTopPageFooter = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="text-center">
        <h1 className="font-bold text-white pt-2 pb-6">
          <Link
            href="/"
            passHref
            style={{
              textDecoration: 'underline',
              textUnderlineOffset: '0.2em',
            }}
          >
            トップページへ
          </Link>
        </h1>
      </div>
    </div>
  )
}
