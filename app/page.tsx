'use client';
import Button from "@/components/ui/button";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";


const isAuth = false;
export default function Home() {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/login");
  }

  if (!isAuth) {
    redirect('/login')
  }
  return (
    <main>
      <ul>
        <li>
          <Link href="/login">
            <Button >Login</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </li>
      </ul>

    </main>
  );
}
