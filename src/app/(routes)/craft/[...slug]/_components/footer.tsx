import React from "react"
import Image from "next/image"
import Link from "next/link"
import AhmedLogo from "~/../public/images/ahmed-logo.png"
import KnockAbidLogo from "~/../public/images/knockabid-logo.jpg"

import { personalConfig } from "~/config/personal"

export default function Footer() {
  return (
    <footer className="mt-20 flex w-full justify-center border-t pt-5">
      <div className="flex items-center text-neutral-600 dark:text-neutral-400">
        <p>Crafted by</p>
        <Link
          href={personalConfig.socialLinks.twitter}
          target="_blank"
          className="ml-2 flex items-center underline-offset-4 hover:underline"
        >
          <Image
            src={AhmedLogo}
            className="inline-block aspect-square h-auto max-w-[24px] rounded-full object-cover"
            width={20}
            height={20}
            alt=""
          />
          <p className="ml-1 text-black dark:text-white">Ahmed</p>
        </Link>
        <p className="ml-2">and</p>
        <Link
          href={`https://x.com/knockabid`}
          target="_blank"
          className="ml-2 flex items-center underline-offset-4 hover:underline"
        >
          <Image
            src={KnockAbidLogo}
            className="inline-block aspect-square h-auto max-w-[24px] rounded-full object-cover"
            width={20}
            height={20}
            alt=""
          />
          <p className="ml-1 text-black dark:text-white">Knockabid</p>
        </Link>
      </div>
    </footer>
  )
}
