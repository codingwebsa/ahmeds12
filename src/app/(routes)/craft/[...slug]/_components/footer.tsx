import React from "react"
import Image from "next/image"
import AhmedLogo from "~/../public/images/ahmed-logo.png"
import KnockAbidLogo from "~/../public/images/knockabid-logo.jpg"

export default function Footer() {
  return (
    <footer className="mt-20 flex w-full justify-center border-t pt-5">
      <div className="flex text-neutral-600 dark:text-neutral-400">
        <p>Crafted by</p>
        <div className="ml-2 flex">
          <Image
            src={AhmedLogo}
            className="inline-block max-w-[20px] rounded-full object-cover"
            width={20}
            height={20}
            alt=""
          />
          <p className="ml-1 text-black dark:text-white">Ahmed</p>
        </div>
        <p className="ml-2">and</p>
        <div className="ml-2 flex">
          <Image
            src={KnockAbidLogo}
            className="inline-block max-w-[20px] rounded-full object-cover"
            width={20}
            height={20}
            alt=""
          />
          <p className="ml-1 text-black dark:text-white">Knockabid</p>
        </div>
      </div>
    </footer>
  )
}
