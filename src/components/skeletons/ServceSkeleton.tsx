import React from "react";
import Skeleton from "react-loading-skeleton";

export const ServceSkeleton = () => {
  return (
    <div className="service-skeleton">
      <div className="service-skeleton__image-wrapper">
        {/* <Skeleton height={500} width={500} className="rounded-lg" /> */}
      </div>
      <div className="service-skeleton__content bg-gray-100">
        <div className="container mx-auto px-5 py-10">
          <h1 className="text-4xl font-bold mb-4">
            <Skeleton />
          </h1>
          <p className="text-base text-gray-700">
            <Skeleton count={3} />
          </p>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">
              <Skeleton />
            </h2>
            <h5>
              <Skeleton />
            </h5>
          </div>
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">
              <Skeleton />
            </h2>
            <h5>
              <Skeleton />
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
