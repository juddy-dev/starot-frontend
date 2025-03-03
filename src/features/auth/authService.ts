
import { User } from "@/types/User";
import { 
    signUp,
    signIn,
    signOut, 
    confirmSignUp, 
    resendSignUpCode,
    getCurrentUser, 
    autoSignIn,
    fetchUserAttributes
} from "aws-amplify/auth";

export const createUser = async (user: User, password: string) => {
  const userLocale = navigator.language;

  return await signUp({
    username: user.email,
    password: password,
    options: {
      userAttributes: {
        email: user.email,
        locale: userLocale,
        birthdate: user.birthdate,
        nickname: user.nickname,
        "custom:birthcountry": user.birthcountry,
        "custom:birthhour": user.birthhour,
        "custom:birthcity": user.birthcity           
      },
      autoSignIn: {
        enabled: true
      }
    }
  });
};

export const confirmEmail = async (email: string, code: string) => {
  return await confirmSignUp({
    username: email,
    confirmationCode: code
  });
};

export const resendConfirmCode = async (email: string) => {
    return await resendSignUpCode({
        username: email
    });
};


export const loginBySignUp = async () => {
  return await autoSignIn();
};

export const logIn = async (email: string, password: string) => {
  return await signIn({
    username: email,
    password: password,
    options: {
      authFlowType: 'USER_SRP_AUTH'
    }
  })
};

export const logOut = async () => {
  return await signOut({ global: true });
};

export const getUser = async () => {
    return await getCurrentUser();
};

export const getDataUser = async () => {
  return await fetchUserAttributes();
};