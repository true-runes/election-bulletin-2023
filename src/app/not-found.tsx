import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="bg-white h-screen w-screen flex justify-center items-center">
      <div>
        <Image src="/akiramenai_404.png" alt="404" width={500} height={500} />
      </div>
    </div>
  )
}

export default NotFound
