import Link from 'next/link'

const Home = async () => {
  return (
    <div className="relative overflow-hidden pt-20">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white dark:text-white py-3">
            幻水総選挙2023
          </h1>
          <h3 className="text-4xl sm:text-4xl font-bold text-white dark:text-white py-3">
            投票対象リスト
          </h3>
          <div className="my-6">
            <hr />
          </div>
          <p className="text-3xl py-4">
            {/* リンクに下線を引きたい。下線と文字の縦の間隔は少し空けたい  */}
            <Link
              href="/cities"
              passHref
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '0.2em',
              }}
            >
              本拠地施設キャラ部門
            </Link>
          </p>
          <p className="text-3xl py-4">
            <Link
              href="/cities"
              passHref
              style={{
                textDecoration: 'underline',
                textUnderlineOffset: '0.2em',
              }}
            >
              街部門
            </Link>
          </p>
          <div className="my-6">
            <hr />
          </div>
          <div className="py-2">2023 （株）幻水総選挙</div>
        </div>
      </div>
    </div>
  )
}

export default Home
