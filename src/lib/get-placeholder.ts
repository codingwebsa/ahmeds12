import fs from "node:fs/promises"
import { getPlaiceholder } from "plaiceholder"

export async function getPlaceholderFromLocalImage({
  src,
  size = 4,
}: {
  src: string
  size?: number
}) {
  // Read image file as a buffer
  const buffer = await fs.readFile(`./public${src}`)
  // Use getPlaiceholder to get base64 representation of the placeholder
  const data = await getPlaiceholder(buffer, { size: size, autoOrient: true })

  return data
}
