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
      <div className="mx-auto flex max-w-[1450px] items-start gap-1">
        {/* sidebar */}
        <div className="sticky inset-x-0 top-0 hidden flex-1 py-28 lg:flex lg:flex-col lg:items-start">
          <div className="mx-auto px-4 xl:px-10">
            <Link
              href="/craft"
              className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-400"
            >
              <Icons.arrowBendUpLeft className="h-4 w-4" />
              <p>Craft</p>
            </Link>
            <Topics items={toc} />
          </div>
        </div>
        <section className="flex-[2] px-4 py-28 sm:px-10 md:px-16 lg:px-2">
          <Link
            href="/craft"
            className="mb-6 flex items-center justify-start gap-2 text-sm text-neutral-700 dark:text-neutral-400 lg:hidden"
          >
            <Icons.arrowBendUpLeft className="h-4 w-4" />
            <p>Craft</p>
          </Link>
          <CraftPageHeader title={craft.title} date={craft.date} />
          <div className="mt-6">
            <Mdx code={craft.body.code} />
          </div>
        </section>
        <div className="hidden lg:block lg:flex-[0.5] xl:flex-1" />
      </div>
    </main>
  )
}
