'use client'

import cities from '@/app/resource/cities.json'

const Cities = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white dark:text-white py-2">
            幻水総選挙2023
          </h1>
          <h1 className="text-4xl sm:text-6xl font-bold text-white dark:text-white py-2">
            街部門
          </h1>
        </div>
        <div className="mt-2">
          <hr />
        </div>
      </div>
      <div className="text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((city: any, index: number) => (
            <div className="hoge" key={index}>
              <p className="fuga">
                {city.city}（{city.title}）
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-6">
        <hr />
      </div>
      <div className="text-center pt-2 pb-6">2023 （株）幻水総選挙</div>
    </div>
  )
}

export default Cities
