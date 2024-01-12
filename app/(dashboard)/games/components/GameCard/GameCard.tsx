"use client";
import { Game } from "@/app/types/games";
import Image from "next/image";
import "react-loading-skeleton/dist/skeleton.css";
export const GameCard = ({
  date,
  home_team,
  home_team_score,
  period,
  status,
  visitor_team,
  visitor_team_score,
}: Game) => {
  const isHomeTeamWinner = home_team_score > visitor_team_score;

  const originalDate = new Date(date);
  const formattedDate = `${originalDate.getFullYear()}-${(
    originalDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${originalDate.getDate().toString().padStart(2, "0")}`;
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.detail);
    switch (event.detail) {
      case 1: {
        console.log("single click");
        break;
      }
      case 2: {
        console.log("double click");
        break;
      }
      case 3: {
        console.log("triple click");
        break;
      }
      default: {
        break;
      }
    }
  };
  return (
    <button
      onClick={handleClick}
      className=" flex h-96 max-w-sm flex-col items-center justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-lg  transition-transform hover:scale-105 sm:w-1/2 md:w-1/3 lg:w-1/4 dark:bg-gray-800 "
    >
      <div className="mb-4 flex justify-between">
        <div className={`max-w-[90%] text-lg font-semibold`}>
          <span
            className={`${
              isHomeTeamWinner ? "text-green-400" : "text-red-400"
            }`}
          >
            {home_team.full_name}
          </span>{" "}
          @{" "}
          <span
            className={`${
              !isHomeTeamWinner ? "text-green-400" : "text-red-400"
            }`}
          >
            {visitor_team.full_name}
          </span>
        </div>
        <div className="text-gray-500">{status}</div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-500">Date</div>
        <div className="text-lg">{formattedDate}</div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-500">Score</div>
        <div className="text-lg">
          {home_team.full_name} {home_team_score} - {visitor_team_score}{" "}
          {visitor_team.full_name}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-500">Period</div>
        <div className="text-lg">{period}</div>
      </div>

      {/* Add more details as needed */}

      <div className="flex justify-center ">
        <Image
          src="/nba-logo.webp"
          alt="NBA Logo"
          width="0"
          height="0"
          sizes="100vw"
          className="h-[54px] w-[96px]"
        />
      </div>
    </button>
  );
};
