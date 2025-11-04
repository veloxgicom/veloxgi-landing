import React from 'react'
import Image from 'next/image'

export default function FeatureCard({ imageSrc, title, alt = '' }: { imageSrc: string; title: string; alt?: string }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm text-center transition-transform hover:-translate-y-0.5">
      <div className=" flex items-center justify-center">
        <div className="">
          <Image src={imageSrc} alt={alt || title}   width={90} height={90} />
        </div>
      </div>
      <div className="text-[18px] font-regular">{title}</div>
    </div>
  )
}


