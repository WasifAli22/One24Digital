import React, { Suspense } from 'react';

// Placeholder skeleton component
const Skeleton = () => {
  return (
    <div className="animate-pulse rounded-lg bg-gray-200 w-full h-[300px] lg:h-[500px] mb-4"></div>
  );
};

// Component fetching data
const AsyncOurServices = React.lazy(() => import('./services/OurServices'));

const OurServicesWithSkeleton = () => {
  return (
    <Suspense fallback={<Skeleton />}>
      {/* <AsyncOurServices /> */}
      <p>Loading</p>
    </Suspense>
  );
};

export default OurServicesWithSkeleton;
