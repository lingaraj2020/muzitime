"use client";

import { Music, Router } from "lucide-react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function Appbar() {
  const session = useSession();
  const router = useRouter();

  return (
    <div className="w-full flex justify-between items-center px-5">
      <div onClick={()=>
        router.push("/")
      } className="text-xl font-bold text-purple-300 cursor-pointer">Muzitime</div>
      <div>
        {session.data?.user && (
          <Button
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            onClick={() => signOut({ redirect: false }).then(() => {
              router.push("/");
            })}
          >
            Logout
          </Button>
        )}
        {!session.data?.user && (
          <Button
            className="bg-purple-600 text-white hover:bg-purple-700 transition-colors"
            onClick={() => signIn()}
          >
            Signin
          </Button>
        )}
      </div>
    </div>
  );
}
