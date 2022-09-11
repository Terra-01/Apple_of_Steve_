import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
/* import { signIn, signOut, useSession } from "next-auth/react"; */

function Header() {
  /* const session = false; */
  const items = useSelector(selectBasketItems);

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-opacity-85 bg-[#353535] p-4">
        <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
        <div className="relative h-10 w-5 cursor-pointer brightness-51 transition 
        // hover:brightness-125">
          <Image src="https://raw.githubusercontent.com/Terra-01/Terra-01/main/Assets/Apple-rainbow.png" layout="fill" objectFit="contain"/>
          
        </div>
        </Link>
        </div>
        <div className="hidden flex-1 items-center text-slate-200 justify-center space-x-1 md:flex">
            <Link href="https://terra01.vercel.app/"><a className="headerLink">Website</a></Link>
            <Link href="https://github.com/Terra-01"><a className="headerLink">GitHub</a></Link>
            <Link href="https://www.linkedin.com/in/shivam91s"><a className="headerLink">LinkedIn</a></Link>
            <Link href="mailto:thisisshivam@icloud.com"><a className="headerLink">Mail</a></Link>
            <Link href="https://discordapp.com/users/Terra#5293/"><a className="headerLink">Discord</a></Link>
        </div>
        <div className="flex items-center justify-center gap-x-4 md:w-1/5">
            <Link href="/checkout">
              <div className="relative cursor-pointer">
              {items.length > 0 && (
              <span className="absolute -right-2 -top-2 z-50 flex h-5 w-5 items-center justify-center rounded-full bg-slate-300 text-[70%]">
                <b>{items.length}</b>
              </span>
            )}
                <ShoppingBagIcon className="headerIcon text-slate-100" />
              </div>
            </Link>

            {/* {session ? (
          <Image
            src={
              session.user?.image ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt=""
            className="cursor-pointer rounded-full"
            width={34}
            height={34}
            onClick={() => signOut()}
          />
        ) : (
          <UserIcon className="headerIcon text-slate-100" onClick={() => signIn()} />
        )} */}
      </div>
    </header>
  );
}

export default Header;
