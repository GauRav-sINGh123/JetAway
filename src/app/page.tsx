import {Hero,FeaturedPosts,DestinationsSection,TravelGuidesSection,GallerySection,TravelTipsSection,NewsletterSection,About} from '@/components/index';

export default function Home() {
  return (
    <div >
     <Hero/>
     <FeaturedPosts/>
     <DestinationsSection/>
     <TravelGuidesSection/>
     <GallerySection/>
     <TravelTipsSection/>
     <NewsletterSection/>
     <About/>
    </div>
  );
}
