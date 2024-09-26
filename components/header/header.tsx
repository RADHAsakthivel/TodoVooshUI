import React from "react";
import { PiNotepadFill } from "react-icons/pi";

import { Button } from "../button";
import Link from "next/link";

function Header() {
  return (
    <div className={`bg-bgPrimary flex h-[50px] items-center justify-between`}>
      <div>
        <PiNotepadFill color="white" size={30} />
      </div>
      <div>
        <Link href="/login">
          <Button
            cssClass="text-bgPrimary bg-white m-2 px-[4px] py-[1px] rounded-[5px] hover:bg-bgPrimary hover:text-white hover:border-white hover:border-2"
          >
            login
          </Button>
        </Link>
        <Link href="/signup">
          <Button
            cssClass="text-white bg-bgPrimary m-2 px-[4px] py-[1px] rounded-[5px] hover:bg-bgPrimary hover:text-white hover:border-white hover:border-2"
          >
            signup
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
