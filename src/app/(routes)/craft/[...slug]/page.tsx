import Link from "next/link"
import { notFound } from "next/navigation"
import { allCrafts } from "contentlayer/generated"

import { getTableOfContents } from "~/lib/toc"
import { Mdx } from "~/components/mdx-components"

import "~/styles/mdx.css"

import { Icons } from "~/components/icons"

import CraftPageHeader from "./_components/craft-page-header"
import Topics from "./_components/topics"

interface CraftPageProps {
  params: {
    slug: string[]
  }
}

async function getCraftFromParams(params: CraftPageProps["params"]) {
  const slug = params.slug?.join("/") || ""
  const doc = allCrafts.find((craft) => craft.slugAsParams === slug)

  if (!doc) {
    null
  }
  return doc
}

export async function generateStaticParams(): Promise<
  CraftPageProps["params"][]
> {
  return allCrafts.map((craft) => ({
    slug: craft.slugAsParams.split("/"),
  }))
}

export default async function CraftPage({ params }: CraftPageProps) {
  const craft = await getCraftFromParams(params)

  if (!craft) {
    notFound()
  }

  const toc = await getTableOfContents(craft.body.raw)
  // const craftHeadingLinks = toc.items
  //   ? toc.items.flatMap((item) =>
  //       [item.url, item?.items?.map((item) => item.url)]
  //         .flat()
  //         .filter(Boolean)
  //         .map((id) => id?.split("#")[1])
  //     )
  //   : []

  return (
    <main className="min-h-[100dvh] scroll-smooth">
      <div className="flex items-start gap-1 mx-auto max-w-[1450px]">
        {/* sidebar */}
        <div className="flex-1 inset-x-0 sticky top-0 py-28 hidden lg:flex lg:flex-col lg:items-start">
          <div className="mx-auto px-4 xl:px-10">
            <Link
              href="/craft"
              className="flex gap-2 dark:text-neutral-400 text-neutral-700 items-center text-sm"
            >
              <Icons.arrowBendUpLeft className="h-4 w-4" />
              <p>Craft</p>
            </Link>
            <Topics items={toc} />
          </div>
        </div>
        <section className="flex-[2] lg:px-2 py-28 px-4 sm:px-10 md:px-16">
          <Link
            href="/craft"
            className="flex gap-2 dark:text-neutral-400 text-neutral-700 justify-start text-sm items-center lg:hidden mb-6"
          >
            <Icons.arrowBendUpLeft className="h-4 w-4" />
            <p>Craft</p>
          </Link>
          <CraftPageHeader title={craft.title} date={craft.date} />
          <div className="mt-6">
            <Mdx code={craft.body.code} />
          </div>
        </section>
        <div className="xl:flex-1 hidden lg:block lg:flex-[0.5]" />
      </div>
    </main>
  )
}
