import CTASection from "@/components/CallToAction";
import FeaturesSection from "@/components/FeaturesSection ";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/Hero";
import HowSection from "@/components/HowSection";
import PricingSection from "@/components/PricingSection";
import ReviewSection from "@/components/ReviewSection";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturesSection />
      <HowSection />
      <PricingSection />

      <ReviewSection />
      <CTASection />
      <FooterSection />
    </div>
  );
}
