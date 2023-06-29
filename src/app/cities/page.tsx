'use client'
import cities from '@/app/resource/cities.json'
import React, { useState, useEffect } from 'react'

// async function mySrvComponent() {
//   return cities
// }
// export const generateStaticParams = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const users: any = await response.json()

//   return users.map((user: any) => ({
//     id: user.id.toString(),
//   }))
//   // const filePath = './resource/cities.json'

//   // return cities
// }

// const hogeBar = (event) => {
//   console.log({ event })

//   console.log(cities)
// }

const Cities = () => {
  // list と setList を定義する (useState)
  const [myList, setMyList] = useState(cities)




        const styler = async (event: any) => {
    // もしvalueがoneだったら"幻水I"のみ表示させる
    // もしvalueがtwoだったら"幻水II"のみ表示させる
    // もしvalueがthreeだったら"幻水III"のみ表示させる
    // もしvalueがfourだったら"幻水IV"のみ表示させる
    // もしvalueがfiveだったら"幻水V"のみ表示させる
    // もしvalueがallだったら全て表示させる

    // holidays の title と比較する
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

    // return (
    //   <>
    //     {selected.map((city: any, index: number) => (
    //       <div className="hoge" key={index}>
    //         <p className="fuga" style={{ display: 'none' }}>
    //           {city.city}（{city.title}）
    //         </p>
    //       </div>
    //     ))}
    //   </>
    // )

    // selectedをsetListする
    setMyList(selected)
  }

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-black py-2">
            幻水総選挙2023 街部門
          </h1>
          <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-black py-2">
            対象名所一覧
          </h1>
        </div>
        <div className="my-6">
          <hr />
        </div>

        <h2 className="pl-1 pb-1">五十音</h2>
        <select className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
          <option selected>全て</option>
          <option>ア行</option>
          <option>カ行</option>
          <option>サ行</option>
          <option>その他</option>
        </select>

        <div className="my-6" />

        <h2 className="pl-1 pb-1">作品名</h2>
        {/* 選択されたときに発火するメソッド hakka() */}
        <select
          onChange={styler}
          className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
        >
          <option value="one">全て</option>
          <option value="one">I</option>
          <option value="two">II</option>
          <option value="three">III</option>
          <option value="four">IV</option>
          <option value="five">V</option>
        </select>
      </div>

      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-black py-2">
          キャラ
        </h1>

        {/* holidaysを箇条書き */}
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
