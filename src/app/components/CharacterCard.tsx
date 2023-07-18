'use client'

import { useEffect } from 'react'
import { SvgAccordionUp } from '@/app/components/SvgAccordionUp'
import { SvgAccordionDown } from '@/app/components/SvgAccordionDown'

export const CharacterCard = (props: any) => {
  useEffect(() => {
    // @ts-ignore
    import('preline')
  }, [])

  return (
    <div className="city-and-title px-6 py-1" key={props.index}>
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
              <span>{props.headquartersCharacter}</span>
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
}
