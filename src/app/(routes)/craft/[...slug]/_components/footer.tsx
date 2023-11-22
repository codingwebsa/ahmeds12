import React from "react"
import Image from "next/image"
import AhmedLogo from "~/../public/images/ahmed-logo.png"
import KnockAbidLogo from "~/../public/images/knockabid-logo.jpg"

export default function Footer() {
  return (
    <footer className="w-full border-t pt-5 mt-20 flex justify-center">
      <div className="flex dark:text-neutral-400">
        <p>Crafted by</p>
        <div className="flex ml-2">
          <Image
            src={AhmedLogo}
            className="max-w-[20px] rounded-full inline-block object-cover"
            width={20}
            height={20}
            alt=""
          />
          <p className="text-white ml-1">Ahmed</p>
        </div>
        <p className="ml-2">and</p>
        <div className="flex ml-2">
          <Image
            src={KnockAbidLogo}
            className="max-w-[20px] rounded-full inline-block object-cover"
            width={20}
            height={20}
            alt=""
          />
          <p className="text-white ml-1">Knockabid</p>
        </div>
      </div>
    </footer>
  )
}
