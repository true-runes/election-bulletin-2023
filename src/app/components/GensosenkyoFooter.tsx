import Link from 'next/link'
import { BiLinkExternal } from 'react-icons/bi'

export const GensosenkyoFooter = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="text-center">
        <h1 className="font-bold text-white dark:text-white pt-2 pb-6">
          <Link href="https://election.suikoden.info/" passHref>
            <div className="flex flex-row justify-center">
              幻水総選挙2023
              <BiLinkExternal className="pt-1" />
            </div>
          </Link>
        </h1>
      </div>
    </div>
  )
}
