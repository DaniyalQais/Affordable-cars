import Layout from "@/components/layout/Layout"
import BrowseByMode from "@/components/sections/BrowseByMode"
import CarBannerV1 from "@/components/sections/CarBannerV1"
import CarListV2 from "@/components/sections/CarListV2"
import CounterCar from "@/components/sections/CounterCar"
import FeaturesCar from "@/components/sections/FeaturesCar"
import FooterCtaBanner from "@/components/sections/FooterCtaBanner"
import IconBox from "@/components/sections/IconBox"
import InquiryForm from "@/components/sections/InquiryForm"
import MobileStickyCta from "@/components/sections/MobileStickyCta"
import Quote from "@/components/sections/Quote"
import SellingCar from "@/components/sections/SellingCar"
import Slide from "@/components/sections/Slide"
import SlideSearchCar from "@/components/sections/SlideSearchCar"
import TabCarService from "@/components/sections/TabCarService"
import TestimonialCar from "@/components/sections/TestimonialCar"
export default function Home() {

    return (
        <>

            <Layout headerStyle={3} footerStyle={1}>
                <Slide />
                <SlideSearchCar />
                <IconBox />
                <TabCarService />
                <BrowseByMode />
                <CarListV2 />
                <Quote />
                <SellingCar />
                <CounterCar />
                <TestimonialCar />
                <InquiryForm />
                <FeaturesCar />
                <CarBannerV1 />
                <FooterCtaBanner />
                <MobileStickyCta />
            </Layout>
        </>
    )
}