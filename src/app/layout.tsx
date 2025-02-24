export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex justify-center items-center">
        {children}
      </body>
    </html>
  );
}
