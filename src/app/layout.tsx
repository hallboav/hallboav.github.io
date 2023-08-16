export const metadata = {
  title: "Hallison Boaventura's Curriculum Vitae",
  description: "Hallison Boaventura's Curriculum Vitae",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
