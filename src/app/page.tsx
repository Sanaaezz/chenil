"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaDog, FaTrashAlt } from "react-icons/fa";

export default function Home() {
    const { push } = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <span onClick={() => push("/Animals/view")} className="mx-2">
        <FaDog />
        <FaTrashAlt color="#fca311" size={32} />
      </span>
      <a onClick={() => push("/Login")}>Login</a>
      <a onClick={() => push("/Register")}>Register</a>
    </main>
  );
}
