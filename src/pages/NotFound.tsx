// import { useLocation, Link } from "react-router-dom";
// import { useEffect } from "react";

// const NotFound = () => {
//   const location = useLocation();

//   useEffect(() => {
//     console.error(
//       "404 Error: User attempted to access non-existent route:",
//       location.pathname
//     );
//   }, [location.pathname]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
//       <div className="text-center">
//         <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
//         <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
//         <p className="text-gray-600 mb-6">
//           Sorry, the page <span className="font-semibold">{location.pathname}</span> does not exist.
//         </p>
//         <Link
//           to="/"
//           className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
//         >
//           Go Back Home
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default NotFound;
