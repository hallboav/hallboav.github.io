export const metadata = {
  title: "Hallison Boaventura's CV",
  description: "Hallison Boaventura's CV",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
