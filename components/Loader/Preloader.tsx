"use client";
import Image from "next/image";

import { useState, useEffect } from "react";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-1000 ${
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Image Preloader */}
      <Image
        src="/assets/logo.png"
        alt="Loading"
        height={300}
        width={300}
        className="w-32 h-32 animate-fadeInAndScale"
      />
    </div>
  );
};

export default Preloader;

// "use client";

// import Image from "next/image";

// import { useState, useEffect } from "react";

// const Preloader = () => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <>
//       {isLoading && (
//         <div className="fixed inset-0 flex items-center justify-center bg-accentColor z-50">
//           {/* Image Preloader */}
//           <Image
//             src="/assets/logo.png"
//             alt="Loading"
//             height={300}
//             width={300}
//             className="w-32 h-32 animate-fadeInAndScale"
//           />
//         </div>
//       )}
//     </>
//   );
// };

// export default Preloader;
