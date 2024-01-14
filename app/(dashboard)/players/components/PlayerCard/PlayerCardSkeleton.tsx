import { Card } from "@/components/ui/card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

export const PlayerCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#a6a5a5" highlightColor="#6e6e6e">
      <Card className="flex h-96 w-[100%] max-w-sm flex-col justify-between overflow-hidden rounded-3xl p-6 shadow-lg transition-transform hover:scale-105 sm:w-1/2 md:w-1/3 lg:w-1/4 ">
        <div className="mb-4 flex justify-between">
          <div className={`max-w-[90%] text-lg font-semibold`}>
            <span className="skeleton-text">
              <Skeleton width={100} />
            </span>{" "}
            <span className="skeleton-text">
              <Skeleton width={100} />
            </span>
          </div>
          <div className="text-gray-500">
            <span className="skeleton-text">
              <Skeleton width={50} />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-500">
            <span className="skeleton-text">
              <Skeleton width={50} />
            </span>
          </div>
          <div className="text-lg">
            <span className="skeleton-text">
              <Skeleton width={100} />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-500">
            <span className="skeleton-text">
              <Skeleton width={50} />
            </span>
          </div>
          <div className="text-lg">
            <span className="skeleton-text">
              <Skeleton width={100} />
            </span>
          </div>
        </div>

        <div className="mb-4">
          <div className="text-sm text-gray-500">
            <span className="skeleton-text">
              <Skeleton width={50} />
            </span>
          </div>
          <div className="text-lg">
            <span className="skeleton-text">
              <Skeleton width={100} />
            </span>
          </div>
        </div>

        <div className="flex justify-center ">
          <span className="skeleton-text">
            <Skeleton width={64} height={36} />
          </span>
        </div>
      </Card>
    </SkeletonTheme>
  );
};
