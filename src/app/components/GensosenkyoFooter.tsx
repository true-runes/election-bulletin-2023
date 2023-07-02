import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'

export const GensosenkyoFooter = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="text-center">
        <h1 className="font-bold text-white dark:text-white pt-2 pb-6 pl-4">
          <div className="flex flex-row justify-center">
            <Link href="https://election.suikoden.info/" passHref>
              幻水総選挙2023
            </Link>
            <BiLinkExternal className="pt-1" />
          </div>
        </h1>
      </div>
    </div>
  )
}
