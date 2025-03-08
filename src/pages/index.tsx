import HeroSection from "@/components/landing/HeroSection";
import { useLoader } from "@/context/LoaderContext";
import '@/styles/landing.module.css';
import { useEffect } from "react";

export default function Landing() {
    const loader = useLoader();

    useEffect( ()=> {
        loader.setIsLoading(false);
    }, []);

  return (
    <HeroSection></HeroSection>
  );
}
