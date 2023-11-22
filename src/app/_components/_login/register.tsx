import React, { useState } from "react";
import Link from "next/link";

const entranceYearArray: string[] = [];
for (let i = 2000; i < 2024; i++) {
  entranceYearArray.push(i.toString()); //숫자를 문자열로 변환
}

function Register() {
  const [name, setName] = useState("");
  const [nickname, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState("2023");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputName = e.target.value;
    setName(inputName);
  };

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputNickname = e.target.value;
    setNickName(inputNickname);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  };

  //유효성 검사
  const isValidInput = name.length >= 1 && nickname.length >= 1;
  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const pwNumLetter = /[0-9]/.test(password);
  const pwEngLetter = /[a-zA-Z]/.test(password);
  const isValidPassword =
    password.length >= 1 && password.length <= 20 && pwNumLetter && pwEngLetter;

  const handleSignUp = () => {
    if (!isValidInput || !isValidPassword || !isEmailValid)
      alert("정확히 입력되었는지 다시 확인해주세요.");
    else {
      // 회원 정보 가져오기
      const r_name = name;
      const r_email = email;
      const r_password = password;
      const r_nickname = nickname;
      const r_entrance = option;

      // 기존 사용자 목록 가져오기

      // 새로운 사용자 정보 생성
      const newUser = { r_name, r_nickname, r_email, r_password, r_entrance };

      // 기존 사용자 목록에 새로운 사용자 추가

      // 사용자 정보를 localStorage에 저장

      console.log("회원가입 성공");
      alert("회원가입 성공");
    }
  };

  const getUsers = () => {
    //const storedUsers = localStorage.getItem('users');
    //return storedUsers ? JSON.parse(storedUsers) : [];
  };

  console.log(getUsers());

  return (
    <div className="flex h-screen items-center justify-center">
      <form className="bg-white-200 w-1/3 p-8">
        <h2 className="mr-5 text-2xl font-bold text-blue-700">
          한성대에 오신걸 환영합니다!
        </h2>
        <br></br>
        <h2 className="mb-4 text-2xl font-bold">Register</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            이름
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info mt-1 w-full rounded border p-2"
            value={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            닉네임
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info mt-1 w-full rounded border p-2"
            value={nickname}
            onChange={handleNicknameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            이메일
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered input-info mt-1 w-full rounded border p-2"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">
            비밀번호
          </label>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered input-info mt-1 w-full rounded border p-2"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>

        <label className="block text-sm font-medium text-gray-600">
          입학년도
        </label>

        <select className="select select-info mt-1 w-full rounded border p-2">
          <option disabled selected>
            Entrance Year
          </option>
          {entranceYearArray.map((data, index) => (
            <option value={data} key={index}>
              {data}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="mt-4 w-full rounded bg-blue-800 p-2 text-white"
          onClick={handleSignUp}
        >
          <Link href="/login">Sign up</Link>
        </button>
      </form>
    </div>
  );
}

export default Register;

