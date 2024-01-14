import { HomeButton } from "@/components/ui/HomeButton/HomeButton";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="mx-auto max-w-sm rounded-lg bg-white p-10 shadow-lg">
        <h1 className="text-center text-9xl font-bold text-gray-800">404</h1>
        <p className="mt-4 text-center text-2xl font-medium text-gray-600">
          Page Not Found
        </p>
        <p className="mt-2 text-center text-gray-500">
          We can't seem to find the page you're looking for.
        </p>
        <div className="mt-6 flex justify-center">
          <HomeButton />
        </div>
      </div>
    </div>
  );
}
