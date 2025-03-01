
import { 
    signUp,
    signIn,
    signOut, 
    confirmSignUp, 
    resendSignUpCode,
    getCurrentUser 
} from "aws-amplify/auth";

export const createUser = async (email: string, password: string) => {
  return await signUp({
    username: email,
    password: password  
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