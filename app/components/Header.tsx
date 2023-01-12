"use client";

import Link from "next/link";
import { MetaLogo } from "./Logo";
import Image from "next/image";
import { LogoutButton } from "./LogoutButton";
import { usePathname } from "next/navigation";
import { Session } from "next-auth";

interface HeaderProps {
  session: Session | null;
}

export function Header({ session }: HeaderProps) {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white p-10 shadow-sm">
      {session?.user ? (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <Image
              src={session.user.image!}
              alt="avatar image"
              width={45}
              height={45}
              quality={100}
              className="rounded-full object-contain"
            />
            <div className="">
              <p className=" text-blue-500">Logged in as:</p>
              <p className="text-black font-bold text-lg">
                {session.user.name}
              </p>
            </div>
          </div>
          <LogoutButton />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center space-y-5">
          <div className="mx-auto flex space-x-2 items-center">
            <MetaLogo size={30} />
            <p className="text-blue-400">Welcome to Meta MESSENGER</p>
          </div>

          {pathname !== "/auth/signin" && (
            <Link
              href="/auth/signin"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </header>
  );
}
