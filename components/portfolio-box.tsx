"use client"

import Image from "next/image"
import Link from "next/link"
import { CardContainer, CardBody, CardItem } from "@/components/3d-card"
import { Info, X } from "lucide-react"
import { useState, useEffect } from "react"

interface PortfolioBoxProps {
  data: {
    id: number
    title: string
    image: string
    urlGithub: string
    urlDemo: string
    description: string
    icon: JSX.Element
  }
  index: number
}

const PortfolioBox = ({ data, index }: PortfolioBoxProps) => {
  const { id, title, image, urlDemo, urlGithub, description, icon } = data
  const [isHovering, setIsHovering] = useState(false)
  const [showInfo, setShowInfo] = useState(false)
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const toggleInfo = () => setShowInfo(!showInfo)
  
  const isEven = index % 2 === 0
  const isXlScreen = windowWidth >= 1280

  return (
    <CardContainer className="transition-all inter-var">
      <CardBody className="relative bg-gray-50 w-full max-sm:w-[20rem] sm:w-[30rem] lg:w-[35rem] h-auto rounded-md p-4 border border-black/[0.1] dark:bg-black dark:border-white/[0.2] group/card">
        {showInfo && (
          <div className="absolute inset-0 bg-black/40 rounded-md transition-all duration-300 z-[45]" />
        )}
        
        <div className="flex justify-center items-center mb-2 relative">
          <CardItem translateZ="50" className="text-lg font-bold text-neutral-600 dark:text-white mb-2">
            {title}
          </CardItem>
        </div>
        <CardItem 
          translateZ="80" 
          className="w-full mb-2 relative"
        >
          <Image
            src={image || "/placeholder.svg"}
            height={1000}
            width={1000}
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>

        <div className="flex justify-between items-center mt-5 relative">
          <CardItem
            translateZ={20}
            as={Link}
            href={urlGithub}
            target="_blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            GitHub
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold relative z-[60]"
            onClick={toggleInfo}
            aria-label="Toggle project information"
          >
            <span className="hidden xl:block">
              {showInfo ? <X size={16} /> : <Info size={16} />}
            </span>
            <span className="block xl:hidden">
              <Info size={16} />
            </span>
          </CardItem>

          <CardItem
            translateZ={20}
            as={Link}
            href={urlDemo}
            target="_blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold"
          >
            Demo
          </CardItem>
        </div>

        {showInfo && (
          <div className="fixed inset-0 flex items-center justify-center" style={{ zIndex: 1000 }}>
            <div 
              className="absolute inset-0 xl:bg-opacity-0"
              onClick={toggleInfo}
            ></div>
            {isXlScreen ? (
              // Versión xl sin cambios
              <div 
                className={`
                  absolute bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg 
                  w-[90%] max-w-md max-h-[90%] overflow-auto 
                  transition-all duration-300 transform
                  xl:max-w-sm
                  ${isEven 
                    ? 'xl:translate-x-[-100%] xl:left-0' 
                    : 'xl:translate-x-[100%] xl:right-0'
                  }
                  ${!isEven && 'xl:left-auto'}
                `}
                style={{
                  left: isEven ? '0' : 'auto',
                  right: isEven ? 'auto' : '0',
                  transform: `translateX(${isEven ? '160%' : '-160%'})`,
                  zIndex: 1001
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-bold">{title}</h3>
                  <button
                    onClick={toggleInfo}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 xl:hidden"
                    aria-label="Close information"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="text-xs">{description}</p>
              </div>
            ) : (
              // Versión móvil modificada con z-index garantizado
              <div 
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" 
                style={{ zIndex: 1001 }}
              >
                <div className="relative" style={{ zIndex: 1002 }}>
                  <CardItem
                    translateZ="50"
                    className={`
                      bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg 
                      w-[90vw] max-w-md overflow-auto 
                      transition-all duration-300
                      relative
                    `}
                    style={{ zIndex: 1003 }}
                  >
                    <div 
                      className="flex justify-between items-center mb-2"
                      style={{ transform: 'translateZ(0)' }}
                    >
                      <h3 className="text-sm font-bold">{title}</h3>
                      <button
                        onClick={toggleInfo}
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                        aria-label="Close information"
                      >
                        <X size={20} />
                      </button>
                    </div>
                    <p className="text-xs">{description}</p>
                  </CardItem>
                </div>
              </div>
            )}
          </div>
        )}
      </CardBody>
    </CardContainer>
  )
}

export default PortfolioBox