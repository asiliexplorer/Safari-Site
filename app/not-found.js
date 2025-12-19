
// import { redirect } from "next/navigation";

// export default function GlobalNotFound() {
//   redirect("/not-found");
// }

// export default function NotFound() {
//   return (
//     <html lang="en">
//       <body className="flex flex-col items-center justify-center min-h-screen text-center p-8">
//         <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
//         <p className="text-gray-600 mb-6">
//           Sorry, the page you are looking for doesn’t exist.
//         </p>
//         <a
//           href="/"
//           className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
//         >
//           Go Home
//         </a>
//       </body>
//     </html>
//   );
// }
import { redirect } from "next/navigation";

export default function GlobalNotFound() {
  redirect("/not-found");
}