import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import NewsletterBox from '../components/NewsletterBox'
import ShopBy from '../components/ShopBy'
import FeatureSection from '../components/Features'
import EcommerceChatbot from '../components/EcomChatbot'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection/>
      <BestSeller/>
      <FeatureSection />
      <ShopBy />
      <OurPolicy/>
      {/* <NewsletterBox/> */}
      <EcommerceChatbot />
    </div>
  )
}

export default Home
