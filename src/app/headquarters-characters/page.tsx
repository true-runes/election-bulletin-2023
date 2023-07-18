import productToHeadquartersCharacters from '@/app/resource/headquartersCharacters.json'

import { ToTopPageFooter } from '@/app/components/ToTopPageFooter'
import { GensosenkyoFooter } from '@/app/components/GensosenkyoFooter'
import { HelloWorld } from '@/app/components/HelloWorld'
import { SvgAccordionUp } from '@/app/components/SvgAccordionUp'
import { SvgAccordionDown } from '@/app/components/SvgAccordionDown'

export const metadata = {
  title: '本拠地施設キャラ部門',
}

const Cities = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:pt-24 pb-4">
        <div className="text-center">
          <h1 className="text-5xl sm:text-5xl font-bold text-white py-2">
            幻水総選挙2023
          </h1>
          <h2 className="text-4xl sm:text-4xl font-bold text-white py-2">
            投票対象リスト
          </h2>
          <h2 className="text-3xl sm:text-3xl font-bold text-white py-2">
            本拠地施設キャラ部門
          </h2>
        </div>
        <div className="my-4">
          <hr />
        </div>
        <HelloWorld />
      </div>

      <div className="text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* key である product を h1 とし、values を並べる */}
          {Object.entries(productToHeadquartersCharacters).map(
            ([product, headquartersCharacters]) => (
              <div className="cities-and-titles" key={product}>
                <h1 className="city-and-title text-2xl px-6 py-4 underline underline-offset-8">
                  {product}
                </h1>
                {headquartersCharacters.map(
                  (headquartersCharacter: any, index: number) => (
                    <div className="city-and-title px-6 py-1" key={index}>
                      <div className="flex flex-col bg-white border shadow-sm rounded-xl p-2 md:p-3 dark:bg-gray-900 dark:border-gray-700 dark:shadow-slate-700/[.7] dark:text-white my-2">
                        <div className="hs-accordion-group">
                          <div
                            className="hs-accordion active ml-2"
                            id="hs-basic-with-arrow-heading-one"
                          >
                            <button
                              className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
                              aria-controls="hs-basic-with-arrow-collapse-one"
                            >
                              <SvgAccordionUp />
                              <SvgAccordionDown />
                              <span> {headquartersCharacter}</span>
                            </button>
                            <div
                              id="hs-basic-with-arrow-collapse-one"
                              className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                              aria-labelledby="hs-basic-with-arrow-heading-one"
                            >
                              <div className="text-left text-gray-800 dark:text-gray-200 pb-4">
                                本拠地で働く＊＊。いつも忙しそうにしている。好きな食べ物はメロン。
                              </div>
                            </div>
                          </div>
                        </div>
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
