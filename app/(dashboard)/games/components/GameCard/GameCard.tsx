"use client";
import { Game } from "@/app/types/games";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
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
  const [isLiked, setIsLiked] = useState(false);

  const originalDate = new Date(date);
  const formattedDate = `${originalDate.getFullYear()}-${(
    originalDate.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}-${originalDate.getDate().toString().padStart(2, "0")}`;

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (event.detail === 2) {
      setIsLiked((prev) => !prev);
    }
  };
  return (
    <Card
      onClick={handleClick}
      className="relative flex h-96 max-w-sm cursor-pointer select-none flex-col  justify-between overflow-hidden rounded-3xl  p-6 shadow-lg  transition-transform hover:scale-105 sm:w-1/2 md:w-1/3 lg:w-1/4"
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
      <div className="absolute bottom-4 right-4">
        {isLiked ? (
          <IoHeartSharp size={24} color="red" />
        ) : (
          <IoHeartOutline size={24} />
        )}
      </div>
    </Card>
  );
};
