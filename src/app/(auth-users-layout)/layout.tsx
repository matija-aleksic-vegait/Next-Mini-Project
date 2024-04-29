import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
