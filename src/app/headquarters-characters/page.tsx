import Link from 'next/link'
import productToHeadquartersCharacters from '@/app/resource/headquartersCharacters.json'
import { ToTopPageFooter } from '@/app/components/ToTopPageFooter'
import { GensosenkyoFooter } from '@/app/components/GensosenkyoFooter'

export const metadata = {
  title: '本拠地施設キャラ部門',
}

const Cities = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:pt-24 pb-4">
        <div className="text-center">
          <h1 className="text-5xl sm:text-5xl font-bold text-white py-2">
            <Link href="/" passHref>
              幻水総選挙2023
            </Link>
          </h1>
          <h2 className="text-4xl sm:text-4xl font-bold text-white py-2">
            <Link href="/" passHref>
              投票対象リスト
            </Link>
          </h2>
          <h2 className="text-3xl sm:text-3xl font-bold text-white py-2">
            本拠地施設キャラ部門
          </h2>
        </div>
        <div className="my-4">
          <hr />
        </div>
      </div>

      <div className="text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(productToHeadquartersCharacters).map(
            ([product, headquartersCharacters]) => (
              <div className="cities-and-titles" key={product}>
                <h1 className="city-and-title text-3xl px-6 py-4 underline underline-offset-8">
                  {product}
                </h1>
                {headquartersCharacters.map(
                  (headquartersCharacter: any, index: number) => (
                    <div className="city-and-title px-6 py-1" key={index}>
                      <div className="flex flex-col border shadow-sm rounded-xl p-2 md:p-3 bg-gray-900 border-gray-700 shadow-slate-700/[.7] text-white my-2">
                        <div className="py-2">{headquartersCharacter}</div>
                      </div>
                    </div>
                  )
                )}
              </div>
            )
          )}
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
