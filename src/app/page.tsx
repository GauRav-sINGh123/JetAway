import {Hero,FeaturedPosts,DestinationsSection,TravelGuidesSection,GallerySection,TravelTipsSection} from '@/components/index';

export default function Home() {
  return (
    <div >
     <Hero/>
     <FeaturedPosts/>
     <DestinationsSection/>
     <TravelGuidesSection/>
     <GallerySection/>
     <TravelTipsSection/>
    </div>
  );
}
