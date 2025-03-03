import ConstellationBackground from "@/features/auth/components/ConstelationBackground";
import SignUpForm from "@/features/auth/components/SignUpForm";

export default function Login() {
    return (
        <div className="flex flex-row flex-wrap space-y-4 space-x-4">

        <ConstellationBackground>
            <SignUpForm></SignUpForm>
        </ConstellationBackground>

      </div>
    );
}