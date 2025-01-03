import '../globals.css';
import { ClerkLoading, ClerkProvider, ClerkLoaded } from "@clerk/nextjs";
import Loader from "@/components/Loader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="min-h-screen text-white bg-gradient-to-tr from-emerald-900 via-slate-900 to-emerald-900 bg-fixed">
          <ClerkLoading>
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <div>{children}</div>
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}
