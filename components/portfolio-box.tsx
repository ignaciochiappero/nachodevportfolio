
//components\portfolio-box.tsx


"use client"

import Image from "next/image"
import Link from "next/link"
import { CardContainer, CardBody, CardItem } from "@/components/3d-card"
import { Info, X } from "lucide-react"
import { useState } from "react"

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
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { id, title, image, urlDemo, urlGithub, description, icon } = data
  const [isHovering, setIsHovering] = useState(false)
  const [showInfo, setShowInfo] = useState(false)


  const toggleInfo = () => setShowInfo(!showInfo)
  
  return (
    <CardContainer className="transition-all inter-var ">
      <CardBody className="relative bg-gray-50 w-full sm:w-[24rem] lg:w-[30rem] h-auto rounded-xl p-4 border border-black/[0.1] dark:bg-black dark:border-white/[0.2] group/card">
        
        <div className="flex justify-center items-center mb-2">

          <CardItem translateZ="50" className="text-lg font-bold   text-neutral-600 dark:text-white mb-2">
            {title}
          </CardItem>
        </div>
        <CardItem translateZ="80" className="w-full mb-2">
          <Image
            src={image || "/placeholder.svg"}
            height={1000}
            width={1000}
            className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt={title}
          />
        </CardItem>

        <div className="flex justify-between items-center mt-5">
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
            className="px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold relative"
            onClick={toggleInfo}
            aria-label="Toggle project information"
          >
            <Info size={16} />
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
          <CardItem translateZ="100" className="absolute inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg w-[90%] max-h-[90%] overflow-auto">
              <div className="flex justify-between items-center mb-2">
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
            </div>
          </CardItem>
        )}
      </CardBody>
    </CardContainer>
  )
}

export default PortfolioBox

