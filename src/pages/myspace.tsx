import ProtectedRoute from "@/components/hoc/ProtectedRoute";
import { useLoader } from "@/context/LoaderContext";
import ConstellationBackground from "@/features/auth/components/ConstelationBackground";
import { useEffect } from "react";

export default function MySpace() {
    const loader = useLoader();

    useEffect( ()=> {
        loader.setIsLoading(false);
    }, []);

    return (
        <ProtectedRoute>
            <div className="flex flex-row min-h-screen flex-wrap space-y-4 space-x-4">
                <ConstellationBackground>
                    <h1>HAS INGRESAO A UN ESPACIO VACÍO... COMO TU VIDA</h1>
                </ConstellationBackground>
            </div>
        </ProtectedRoute>
    );
}