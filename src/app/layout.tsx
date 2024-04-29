import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "VegaIT",
    template: "VegaIT | %s",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/vegait.ico" sizes="any" />
        <link rel="stylesheet" href="../css/styles.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
