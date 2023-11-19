import { notFound } from "next/navigation"
import { allCrafts } from "contentlayer/generated"

import { getTableOfContents } from "~/lib/toc"
import { Mdx } from "~/components/mdx-components"

import "~/styles/mdx.css"

import Link from "next/link"

import { Icons } from "~/components/icons"

import CraftPageHeader from "./_components/craft-page-header"

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

  return (
    <main className="min-h-[100dvh]">
      <div className="flex items-start gap-1">
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
            <aside className="mt-6 flex flex-col gap-2">
              {toc.items?.[0].items?.map((item, i) => (
                <Link
                  className="text-sm dark:text-neutral-400 text-neutral-700 line-clamp-2 [text-wrap:balance]"
                  href={item.url}
                  key={`toc-${i}`}
                >
                  {item.title}
                </Link>
              ))}
            </aside>
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
