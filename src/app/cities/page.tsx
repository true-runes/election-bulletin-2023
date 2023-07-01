'use client'

import cities from '@/app/resource/cities.json'
import { ToTopPageFooter } from '../components/ToTopPageFooter'
import { GensosenkyoFooter } from '@/app/components/GensosenkyoFooter'

const Cities = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div className="text-center">
          <h1 className="text-5xl sm:text-5xl font-bold text-white py-2">
            幻水総選挙2023
          </h1>
          <h1 className="text-3xl sm:text-3xl font-bold text-white py-2">
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
            <div className="cities-and-titles" key={index}>
              <p className="city-and-title px-6">
                {city.city}（{city.title}）
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-6">
        <hr />
      </div>

      <ToTopPageFooter />
      <GensosenkyoFooter />
    </div>
  )
}

export default Cities
