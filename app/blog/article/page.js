import Image from 'next/image';
import { readFileSync } from 'node:fs';
import { compileMDX } from 'next-mdx-remote/rsc'

import rehypeImgSize from 'rehype-img-size'
import path from 'node:path';

export default async function Home() {
  const fileContents = readFileSync(path.join(process.cwd(), "data", "posts", "example.mdx"))
  const { content, frontmatter } = await compileMDX({
    source: fileContents,
    mdxOptions: {
      rehypePlugins: [
        [rehypeImgSize, { dir: 'public' }],
      ],
    },
    options: {
      parseFrontmatter: true
    },
    components: {
      Image,
    }
  })

  return (
    <main>
      <h1>{frontmatter.title}</h1>
      {content}
    </main>
  )
}
