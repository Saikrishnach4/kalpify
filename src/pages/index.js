

import HomePage from '@/Components/HomePage/HomePage'
import Layout from '@/Components/Layout/Layout'
import TopNav from '@/Components/Navbar/TopNav'



export default function Home() {
  return (
    <Layout>
      <div className='lg:hidden'>
        <TopNav />
      </div>
      <HomePage />
    </Layout>
  )
}
