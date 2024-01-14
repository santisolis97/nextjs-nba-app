import { useRouter } from "next/navigation";
import { Button } from "../button";
import Link from "next/link";

export const HomeButton = () => {
  return (
    <Link href="/">
      <Button className="w-full" variant="default">
        Go Home
      </Button>
    </Link>
  );
};
