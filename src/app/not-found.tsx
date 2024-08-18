import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
 title: "Not Found",
 description: "Page was not found",
};

export default function NotFound() {
 return (
  <div className="not-found-container">
   <h1 className="not-found-title">404</h1>
   <p className="message">Page Not Found</p>
   <Link href="/">Go Home</Link>
  </div>
 );
}
