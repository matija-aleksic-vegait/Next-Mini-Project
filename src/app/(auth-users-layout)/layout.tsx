import { Footer } from "@/components/organisms/navigation/footer/footer";
import { Header } from "@/components/organisms/navigation/header/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
