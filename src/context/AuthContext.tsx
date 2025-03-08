import { createContext, useContext, useEffect, useState } from "react";
import { getDataUser, logOut } from "@/features/auth/authService";
import { useRouter } from "next/router";
import { useLoader } from "./LoaderContext";

interface AuthContextType {
  user: any;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const loader = useLoader();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const checkUser = async () => {
      loader.setIsLoading(true);
      try {
        const authUser = await getDataUser();
        setUser(authUser);
      } catch {
        setUser(null);
      } finally {
        //loader.setIsLoading(false);
      }
    };

    checkUser();
  }, []);

  const signOut = async () => {
    loader.setIsLoading(true);
    await logOut();
    setUser(null);
    router.push("/");
  };

  return (
    <AuthContext.Provider value={{ user, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
