'use client'

import { animateScroll as scroll } from 'react-scroll'
import { BiChevronsUp } from 'react-icons/bi'
import { useEffect, useState } from 'react'

export const BackToTopButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  const [isButtonActive, setIsButtonActive] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', scrollWindow)
    return () => {
      window.removeEventListener('scroll', scrollWindow)
    }
  }, [])

  const scrollWindow = () => {
    const top = 100 // ボタンを表示させたい位置
    let scroll = 0
    scroll = window.scrollY
    if (top <= scroll) {
      setIsButtonActive(true)
    } else {
      setIsButtonActive(false)
    }
  }

  const normalStyle = {
    opacity: 0,
    transition: '0.5s',
    pointerEvents: 'none',
  }
  const activeStyle = {
    opacity: 1,
    transition: '0.5s',
  }
  const style = isButtonActive ? activeStyle : normalStyle

  return (
    <>
      <div id="back-to-top-btn" style={style} onClick={scrollToTop}>
        <BiChevronsUp size="2rem" color="white" />
      </div>
      <style jsx>{`
        #back-to-top-btn {
          position: fixed;
          bottom: 20px;
          right: 20px;
          z-index: 10000;
          background-color: #333;
          border-radius: 4rem;
          padding: 0.6rem;
          box-shadow: 0 2px 8px #4385bb88;
        }
        #back-to-top-btn:hover {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
