import React from "react";
import { PiNotepadFill } from "react-icons/pi";

import { Button } from "../../shared/button";
import Link from "next/link";

function Header() {
  return (
    <div className={`bg-bgPrimary flex h-[50px] items-center justify-between`}>
      <div>
        <PiNotepadFill color="white" size={30} />
      </div>
      <div>
        <Link href="/login">
          <Button type="DEFAULT">login</Button>
        </Link>
        <Link href="/signup">
          <Button type="DEFAULT" cssClass="mr-[10px]">
            signup
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
