import "./globals.css";

export const metadata = {
  title: "Мой проект",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
