import React from "react"
import Image from "next/image"
import Image1 from "~/../public/images/photos/1.jpg"
import Image2 from "~/../public/images/photos/2.jpg"
import Image3 from "~/../public/images/photos/3.jpg"
import Image4 from "~/../public/images/photos/4.jpg"
import Image5 from "~/../public/images/photos/5.jpg"
import Image6 from "~/../public/images/photos/6.jpg"
import Image7 from "~/../public/images/photos/7.jpg"
import Image8 from "~/../public/images/photos/8.jpg"
import Image9 from "~/../public/images/photos/9.jpg"
import Image10 from "~/../public/images/photos/10.jpg"
import Image11 from "~/../public/images/photos/11.jpg"
import Image12 from "~/../public/images/photos/12.jpg"
import Image13 from "~/../public/images/photos/13.jpg"
import Image14 from "~/../public/images/photos/14.jpg"
import Image15 from "~/../public/images/photos/15.jpg"
import Image16 from "~/../public/images/photos/16.jpg"
import Image17 from "~/../public/images/photos/17.jpg"
import Image18 from "~/../public/images/photos/18.jpg"
import Image19 from "~/../public/images/photos/19.jpg"

export default function PhotosPage() {
  var photos = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
  ]

  return (
    <main className="px-2">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-2">
        {photos.map((photo, i) => {
          return (
            <div key={`photo-${i}`}>
              <Image
                src={photo}
                alt=""
                placeholder="blur"
                quality={50}
                width={700}
                className="min-w-full h-auto"
              />
            </div>
          )
        })}
      </div>
    </main>
  )
}
