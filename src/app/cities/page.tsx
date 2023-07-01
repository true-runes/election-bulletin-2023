'use client'

import cities from '@/app/resource/cities.json'
import React, { useState, useEffect } from 'react'

const Cities = () => {
  const [myList, setMyList] = useState(cities)

  const styler = async (event: any) => {
    let selected: any
    switch (event.target.value) {
      case 'one':
        selected = cities.filter((holiday: any) => {
          return holiday.title === '幻水I'
        })
        break
      case 'two':
        selected = cities.filter((holiday: any) => {
          return holiday.title === '幻水II'
        })
        break
      case 'three':
        selected = cities.filter((holiday: any) => {
          return holiday.title === '幻水III'
        })
        break
      case 'four':
        selected = cities.filter((holiday: any) => {
          return holiday.title === '幻水IV'
        })
        break
      case 'five':
        selected = cities.filter((holiday: any) => {
          return holiday.title === '幻水V'
        })
        break
      default:
        selected = cities.filter((holiday: any) => {
          return holiday.title === '幻水I'
        })
        break
    }

    setMyList(selected)
  }

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
          {myList.map((city: any, index: number) => (
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

{
  /* // return (
//   <div>
//     {/* cities を回す indexをユニークにつける */
}
//     {holidays.map((city: any, index: number) => (
//       <div classNameName="hoge" key={index}>
//         <p classNameName="fuga">
//           {city.title}::{city.country}::{city.city}
//         </p>
//       </div>
//     ))}
//   </div>
// ) */}
