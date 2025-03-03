import ProtectedRoute from "@/components/hoc/ProtectedRoute";
import ConstellationBackground from "@/features/auth/components/ConstelationBackground";

export default function MySpace() {
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