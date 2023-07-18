'use client'

import React, { useEffect } from 'react'
import { SvgAccordionUp } from '@/app/components/SvgAccordionUp'
import { SvgAccordionDown } from '@/app/components/SvgAccordionDown'

export const HelloWorld = () => {
  useEffect(() => {
    // @ts-ignore
    import('preline')
  }, [])

  return (
    <>
      <div className="hs-accordion-group">
        <div
          className="hs-accordion active"
          id="hs-basic-with-arrow-heading-one"
        >
          <button
            className="hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center gap-x-3 w-full font-semibold text-left text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400"
            aria-controls="hs-basic-with-arrow-collapse-one"
          >
            <SvgAccordionUp />
            <SvgAccordionDown />
            <span>Accordion #1</span>
          </button>
          <div
            id="hs-basic-with-arrow-collapse-one"
            className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
            aria-labelledby="hs-basic-with-arrow-heading-one"
          >
            <div className="text-gray-800 dark:text-gray-200">
              <em>This is the third items accordion body.</em> It is hidden by
              default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
