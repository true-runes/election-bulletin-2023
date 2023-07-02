'use client'

import headquartersCharacters from '@/app/resource/headquartersCharacters.json'
import { ToTopPageFooter } from '../components/ToTopPageFooter'
import { GensosenkyoFooter } from '@/app/components/GensosenkyoFooter'

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
            本拠地施設キャラ部門
          </h2>
        </div>
        <div className="mt-4">
          <hr />
        </div>
      </div>

      <div className="text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {headquartersCharacters.map(
            (headquartersCharacter: any, index: number) => (
              <div className="hq-characters" key={index}>
                <p className="hq-character px-6">{headquartersCharacter}</p>
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
