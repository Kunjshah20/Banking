import MobileNavbar from "@/components/MobileNavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggenIn = { firstName: "Kunj", lastName: "Shah" };

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggenIn} />

      <div className="flex szie-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={3} alt="Logo" />
          <div>
            <MobileNavbar user={loggenIn} />
          </div>
        </div>
        {children}
      </div>
    </main>
  );
}
