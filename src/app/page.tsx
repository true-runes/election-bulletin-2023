const Home = async () => {
  return (
    <div className="relative overflow-hidden pt-20">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div className="text-center">
          <h1 className="text-6xl sm:text-6xl font-bold text-white dark:text-white py-2">
            幻水総選挙2023
          </h1>
          <h2 className="text-6xl sm:text-6xl font-bold text-white dark:text-white py-2">
            投票対象リスト
          </h2>
          <div className="my-6">
            <hr />
          </div>
          <p className="text-4xl py-4">本拠地施設キャラ部門</p>
          <p className="text-4xl py-4">街部門</p>
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
