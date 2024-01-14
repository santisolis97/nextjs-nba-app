import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Component() {
  return (
    <div className="flex h-screen items-center justify-center ">
      <Card className="w-full max-w-md space-y-6 rounded-lg  p-8 shadow-md">
        <h2 className="text-center text-3xl font-extrabold">Sign Up</h2>
        <div>
          <Button
            className="flex w-full items-center justify-center"
            variant="outline"
          >
            <FcGoogle className="mr-2 h-5 w-5" />
            Sign up with Google
          </Button>
        </div>
        <div className="flex items-center justify-between">
          <span className="w-1/5 border-b border-gray-300" />
          <span className="text-xs uppercase ">or sign up with email</span>
          <span className="w-1/5 border-b border-gray-300" />
        </div>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium " htmlFor="email">
              Email
            </label>
            <Input id="email" placeholder="you@example.com" type="email" />
          </div>
          <div>
            <label className="block text-sm font-medium " htmlFor="password">
              Password
            </label>
            <Input id="password" placeholder="Password" type="password" />
          </div>
          <div>
            <label
              className="block text-sm font-medium "
              htmlFor="repeat-password"
            >
              Repeat Password
            </label>
            <Input
              id="repeat-password"
              placeholder="Repeat Password"
              type="password"
            />
          </div>
          <div>
            <Button className="w-full   ">Sign Up</Button>
          </div>
          <div className="text-center">
            Already have an account?{" "}
            <Link
              className="text-sm text-gray-600 underline dark:text-gray-400"
              href="/login"
            >
              Log In
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
}
