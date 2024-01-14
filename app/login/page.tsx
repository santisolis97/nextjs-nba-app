import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center  ">
      <Card className="w-full max-w-md space-y-6 rounded-xl p-8 shadow-lg ">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-gray-100">
          Sign In
        </h2>
        <Button
          className="flex w-full items-center justify-center"
          variant="outline"
        >
          <FcGoogle className="mr-2 h-5 w-5" />
          Sign in with Google
        </Button>
        <div className="flex items-center justify-between">
          <span className="w-1/5 border-b lg:w-1/4" />
          <span className="text-center text-xs uppercase text-gray-500">
            or sign in with email
          </span>
          <span className="w-1/5 border-b lg:w-1/4" />
        </div>
        <form className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Password</Label>
            <Input id="password" required type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign In
          </Button>
        </form>
        <div className="text-center">
          <Link
            className="text-sm text-gray-600 underline dark:text-gray-400"
            href="#"
          >
            Forgot password?
          </Link>
        </div>
      </Card>
    </div>
  );
}
