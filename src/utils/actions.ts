import { signIn } from "next-auth/react";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    console.log(formData);
    await signIn("credentials", Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialSignin";
    }
    throw error;
  }
}
