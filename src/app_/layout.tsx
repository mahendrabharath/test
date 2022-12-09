import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Link href={'/'}>Home</Link>
        <Link href={'/movies'}>Movies</Link>
        {children}
        </body>
    </html>
  );
}
