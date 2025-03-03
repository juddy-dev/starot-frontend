import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getUser } from "@/features/auth/authService";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      try {
        await getUser();
        setIsAuthenticated(true);
      } catch (error) {
        router.push("/");
      } finally {
        //setLoading(false);
      }
    };

    checkUser();
  }, [router]);

  if (!isAuthenticated) return null;

  return <>{children}</>;
};

export default ProtectedRoute;
