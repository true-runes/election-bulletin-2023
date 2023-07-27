import Link from 'next/link'
import { ToTopPageFooter } from '../components/ToTopPageFooter'
import { GensosenkyoFooter } from '@/app/components/GensosenkyoFooter'
import { BackToTopButton } from '@/app/components/BackToTopButton'

import s1 from '@/app/resource/char_s1.json'
import s2 from '@/app/resource/char_s2.json'
import gaiden from '@/app/resource/char_gaiden.json'
import s3 from '@/app/resource/char_s3.json'
import s4 from '@/app/resource/char_s4.json'
import rhapsodia from '@/app/resource/char_rhapsodia.json'
import s5 from '@/app/resource/char_s5.json'
import tk from '@/app/resource/char_tk.json'
import tsumutoki from '@/app/resource/char_tsumutoki.json'

export const metadata = {
  title: '総合部門',
}

const Cities = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:pt-24 pb-10">
        <div className="text-center">
          <h1 className="text-5xl sm:text-5xl font-bold text-white py-2">
            <Link href="/" passHref>
              幻水総選挙2023
            </Link>
          </h1>
          <h2 className="text-4xl sm:text-4xl font-bold text-white py-2">
            <Link href="/" passHref>
              主要キャラリスト
            </Link>
          </h2>
          <h2 className="text-3xl sm:text-3xl font-bold text-white py-2">
            総合部門
          </h2>
          <h4 className="text-2xl sm:text-2xl font-bold text-white py-2">
            ※リスト掲載外のキャラも投票可
          </h4>
        </div>
        <div className="mt-4">
          <hr />
        </div>

        <div className="text-center">
          <div id="select-product-title" className="pb-8">
            <h1
              id="s1"
              className="characters-h1 text-xl px-6 py-6 underline underline-offset-8"
            >
              タイトルジャンプ
            </h1>
            <div className="pt-4 pb-2">
              <a href="#s1">幻想水滸伝</a>
            </div>
            <div className="py-2">
              <a href="#s2">幻想水滸伝II</a>
            </div>
            <div className="py-2">
              <a href="#gaiden">幻想水滸外伝</a>
            </div>
            <div className="py-2">
              <a href="#s3">幻想水滸伝III</a>
            </div>
            <div className="py-2">
              <a href="#s4">幻想水滸伝IV</a>
            </div>
            <div className="py-2">
              <a href="#rhapsodia">Rhapsodia</a>
            </div>
            <div className="py-2">
              <a href="#s5">幻想水滸伝V</a>
            </div>
            <div className="py-2">
              <a href="#tk">幻想水滸伝ティアクライス</a>
            </div>
            <div className="py-2">
              <a href="#tsumutoki">幻想水滸伝 紡がれし百年の時</a>
            </div>
          </div>
          <hr className="py-0" />
        </div>
      </div>

      <div className="text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="characters">
            <h1
              id="s1"
              className="characters-h1 text-3xl px-6 mb-4 underline underline-offset-8"
            >
              幻想水滸伝
            </h1>
            {s1.map((character: any, index: number) => (
              <div className="city-and-title px-6 py-1" key={index}>
                <div className="flex flex-col border shadow-sm rounded-xl p-2 md:p-3 bg-gray-900 border-gray-700 shadow-slate-700/[.7] text-white my-2">
                  <div className="py-2">{character}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="characters">
            <h1
              id="s2"
              className="characters-h1 text-3xl px-6 my-4 underline underline-offset-8"
            >
              幻想水滸伝II
            </h1>
            {s2.map((character: any, index: number) => (
              <div className="city-and-title px-6 py-1" key={index}>
                <div className="flex flex-col border shadow-sm rounded-xl p-2 md:p-3 bg-gray-900 border-gray-700 shadow-slate-700/[.7] text-white my-2">
                  <div className="py-2">{character}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="characters">
            <h1
              id="gaiden"
              className="characters-h1 text-3xl px-6 my-4 underline underline-offset-8"
            >
              幻想水滸外伝
            </h1>
            {gaiden.map((character: any, index: number) => (
              <div className="city-and-title px-6 py-1" key={index}>
                <div className="flex flex-col border shadow-sm rounded-xl p-2 md:p-3 bg-gray-900 border-gray-700 shadow-slate-700/[.7] text-white my-2">
                  <div className="py-2">{character}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="characters">
            <h1
              id="s3"
              className="characters-h1 text-3xl px-6 my-4 underline underline-offset-8"
            >
              幻想水滸伝III
            </h1>
            {s3.map((character: any, index: number) => (
              <div className="city-and-title px-6 py-1" key={index}>
                <div className="flex flex-col border shadow-sm rounded-xl p-2 md:p-3 bg-gray-900 border-gray-700 shadow-slate-700/[.7] text-white my-2">
                  <div className="py-2">{character}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="characters">
            <h1
              id="s4"
              className="characters-h1 text-3xl px-6 my-4 underline underline-offset-8"
            >
              幻想水滸伝IV
            </h1>
            {s4.map((character: any, index: number) => (
              <div className="city-and-title px-6 py-1" key={index}>
                <div className="flex flex-col border shadow-sm rounded-xl p-2 md:p-3 bg-gray-900 border-gray-700 shadow-slate-700/[.7] text-white my-2">
                  <div className="py-2">{character}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="characters">
            <h1
              id="rhapsodia"
              className="characters-h1 text-3xl px-6 my-4 underline underline-offset-8"
            >
              Rhapsodia
            </h1>
            {rhapsodia.map((character: any, index: number) => (
              <div className="city-and-title px-6 py-1" key={index}>
                <div className="flex flex-col border shadow-sm rounded-xl p-2 md:p-3 bg-gray-900 border-gray-700 shadow-slate-700/[.7] text-white my-2">
                  <div className="py-2">{character}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="characters">
            <h1
              id="s5"
              className="characters-h1 text-3xl px-6 my-4 underline underline-offset-8"
            >
              幻想水滸伝V
            </h1>
            {s5.map((character: any, index: number) => (
              <div className="city-and-title px-6 py-1" key={index}>
                <div className="flex flex-col border shadow-sm rounded-xl p-2 md:p-3 bg-gray-900 border-gray-700 shadow-slate-700/[.7] text-white my-2">
                  <div className="py-2">{character}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="characters">
            <h1
              id="tk"
              className="characters-h1 text-3xl px-6 my-4 underline underline-offset-8"
            >
              幻想水滸外ティアクライス
            </h1>
            {tk.map((character: any, index: number) => (
              <div className="city-and-title px-6 py-1" key={index}>
                <div className="flex flex-col border shadow-sm rounded-xl p-2 md:p-3 bg-gray-900 border-gray-700 shadow-slate-700/[.7] text-white my-2">
                  <div className="py-2">{character}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="characters">
            <h1
              id="tsumutoki"
              className="characters-h1 text-3xl px-6 my-4 underline underline-offset-8"
            >
              幻想水滸伝 紡がれし百年の時
            </h1>
            {tsumutoki.map((character: any, index: number) => (
              <div className="city-and-title px-6 py-1" key={index}>
                <div className="flex flex-col border shadow-sm rounded-xl p-2 md:p-3 bg-gray-900 border-gray-700 shadow-slate-700/[.7] text-white my-2">
                  <div className="py-2">{character}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-10 mb-4">
        <hr />
      </div>

      <ToTopPageFooter />
      <GensosenkyoFooter />
      <BackToTopButton />
    </div>
  )
}

export default Cities
