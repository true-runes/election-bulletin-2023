import cities from '@/app/resource/cities.json'
import { ToTopPageFooter } from '../components/ToTopPageFooter'
import { GensosenkyoFooter } from '@/app/components/GensosenkyoFooter'

export const metadata = {
  title: '街部門',
}

const Cities = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:pt-24 pb-10">
        <div className="text-center">
          <h1 className="text-5xl sm:text-5xl font-bold text-white py-2">
            幻水総選挙2023
          </h1>
          <h2 className="text-4xl sm:text-4xl font-bold text-white py-2">
            投票対象リスト
          </h2>
          <h2 className="text-3xl sm:text-3xl font-bold text-white py-2">
            街部門
          </h2>
        </div>
        <div className="mt-4">
          <hr />
        </div>
      </div>
      <div className="text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* key である product を h1 とし、values を並べる */}
          {Object.entries(cities).map(([city, characters]) => (
            <div className="cities-and-titles" key={city}>
              <h1 className="city-and-title text-2xl px-6 my-4 underline underline-offset-8">
                {city}
              </h1>
              {characters.map((character: any, index: number) => (
                <p className="city-and-title px-6 py-1" key={index}>
                  {character}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-10 mb-4">
        <hr />
      </div>

      <ToTopPageFooter />
      <GensosenkyoFooter />
    </div>
  )
}

export default Cities
