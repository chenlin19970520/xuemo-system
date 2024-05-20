import React, { Suspense } from "react";
const lazyLoad = ( LazyComponent: React.LazyExoticComponent<any> ): React.ReactNode  => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <>
        <LazyComponent />
      </>
    </Suspense>
  );
};

export default lazyLoad;
