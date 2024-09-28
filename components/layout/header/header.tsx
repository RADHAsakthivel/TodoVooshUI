"use client";
import React from "react";
import { PiNotepadFill } from "react-icons/pi";
import { usePathname } from "next/navigation";
import { Button } from "../../shared/button";
import Link from "next/link";
import { Bounded } from "@/components/shared";

function Header() {
  const router = usePathname();
  return (
    <header>
      <Bounded cssClass="bg-bgPrimary flex h-[50px] items-center justify-between">
        <div>
          <PiNotepadFill color="white" size={30} />
        </div>
        <div>
          <Link href="/dashboard">
            <Button type="DEFAULT" cssClass="mr-[10px]">
              dashboard
            </Button>
          </Link>
          {router != "/login" && (
            <Link href="/login">
              <Button type="DEFAULT">login</Button>
            </Link>
          )}
          {router != "/signup" && (
            <Link href="/signup">
              <Button type="DEFAULT" cssClass="mr-[10px]">
                signup
              </Button>
            </Link>
          )}
        </div>
      </Bounded>
    </header>
  );
}

export default Header;
