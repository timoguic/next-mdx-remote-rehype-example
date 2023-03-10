import Link from 'next/Link'

const Home = () => (
  <>
    <h1>Homepage</h1>
    <Link href="/blog/article">
      Blog
    </Link>
  </>
)

export default Home