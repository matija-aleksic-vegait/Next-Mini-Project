import { Header, Footer } from "@organisms";

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
