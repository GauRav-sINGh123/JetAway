import {Hero,FeaturedPosts,DestinationsSection,TravelGuidesSection,GallerySection,TravelTipsSection,About} from '@/components/index';

export default function Home() {
  return (
    <div >
     <Hero/>
     <FeaturedPosts/>
     <DestinationsSection/>
     <TravelGuidesSection/>
     <GallerySection/>
     <TravelTipsSection/>
     <About/>
    </div>
  );
}
