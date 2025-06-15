import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-10" >
      <SignInButton>
        <Button> login</Button>
      </SignInButton>
    </div>
  );
}
