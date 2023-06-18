import cities from '@/app/resource/cities.json'

async function mySrvComponent() {
  return cities
}
// export const generateStaticParams = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const users: any = await response.json()

//   return users.map((user: any) => ({
//     id: user.id.toString(),
//   }))
//   // const filePath = './resource/cities.json'

//   // return cities
// }

const Home = async () => {
  const holidays: any = await mySrvComponent()

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
        <select className="py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
          <option selected>全て</option>
          <option>I</option>
          <option>II</option>
          <option>III</option>
          <option>IV</option>
          <option>V</option>
        </select>
      </div>

      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-black py-2">
          キャラ
        </h1>

        {/* holidaysを箇条書き */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {holidays.map((city: any, index: number) => (
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

export default Home

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
