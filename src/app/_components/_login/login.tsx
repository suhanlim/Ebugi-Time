"use client";

import { Button } from "../_common/Button";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "~/utils/actions";

function Login() {
  const [code, action] = useFormState(authenticate, undefined);
  return (
    <form action={action} className="bg-white-200  w-1/2 p-8">
      <h2 className="mb-4 text-center text-2xl font-bold">LOG IN</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          이메일
        </label>
        <input
          type="email"
          className="input-bordered input-info mt-1 w-full rounded border p-2"
          placeholder="Type here"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          비밀번호
        </label>
        <input
          type="password"
          placeholder="Type here"
          className="input-bordered input-info mt-1 w-full rounded border p-2"
        />
      </div>

      <LoginButton />

      <div className="flex h-8 items-end space-x-1">
        {/* Add form errors here */}
        {code === "CredentialSignin" && (
          <>
            <p aria-live="polite" className="text-sm text-red-500">
              Invalid credentials
            </p>
          </>
        )}
      </div>
      <div className="mt-8 text-center text-xl font-semibold text-blue-900">
        <span className="mr-2 text-gray-600">에부기타임이 처음이신가요?</span>
        <Link href="/register">회원가입</Link>
      </div>
    </form>
  );
}

function LoginButton() {
  const { pending } = useFormStatus();

  return (
    <Button className="mt-4 w-full" aria-disabled={pending}>
      <Link href="/">로그인</Link>
    </Button>
  );
}

export default Login;
