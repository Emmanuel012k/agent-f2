"use client"

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";

function Header() {
    const { user } = useUser();
    return (
      <header>
        {/* {Left Side} */}

        {/* {Right Side} */}
        <div>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <Button asChild variant="secondary" >
              <SignInButton />
            </Button>
          </SignedOut>
        </div>
      </header>
    );
}

export default Header;