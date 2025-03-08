import { useLoader } from "@/context/LoaderContext";
import ConstellationBackground from "@/features/auth/components/ConstelationBackground";
import SignUpForm from "@/features/auth/components/SignUpForm";
import { useEffect } from "react";

export default function Login() {

    const loader = useLoader();

    useEffect( ()=> {
        loader.setIsLoading(false);
    }, []);
    
    return (
        <div className="flex flex-row flex-wrap space-y-4 space-x-4">

        <ConstellationBackground>
            <SignUpForm></SignUpForm>
        </ConstellationBackground>

      </div>
    );
}