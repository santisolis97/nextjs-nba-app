import React from "react";
import Image from "next/image";
import { Team } from "@/types/teams";
import { Card } from "@/components/ui/card";

type PlayerCardProps = {
  id: number;
  first_name: string;
  height_feet: number | null;
  height_inches: number | null;
  last_name: string;
  position: string;
  team: Team;
  weight_pounds: number | null;
};

export const PlayerCard = ({
  id,
  first_name,
  height_feet,
  height_inches,
  last_name,
  position,
  team,
  weight_pounds,
}: PlayerCardProps) => {
  return (
    <Card className="flex h-96 w-[100%] max-w-sm flex-col justify-between overflow-hidden rounded-3xl p-6 shadow-lg transition-transform hover:scale-105 sm:w-1/2 md:w-1/3 lg:w-1/4 ">
      <div className="mb-4 flex justify-between">
        <div className="max-w-[90%] text-2xl font-semibold">
          <span className="text-green-400">
            {first_name} {last_name}
          </span>
        </div>
        <div className="text-gray-500">{position}</div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-500">Team</div>
        <div className="text-lg">{team.full_name}</div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-500">Height</div>
        <div className="text-lg">
          {height_feet && height_inches
            ? `${height_feet}' ${height_inches}"`
            : "N/A"}
        </div>
      </div>

      <div className="mb-4">
        <div className="text-sm text-gray-500">Weight</div>
        <div className="text-lg">
          {weight_pounds ? `${weight_pounds} lbs` : "N/A"}
        </div>
      </div>

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
    </Card>
  );
};
