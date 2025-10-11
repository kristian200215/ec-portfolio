import "./globals.css";
import ThemeToggle from "./components/ThemeToggle";

export const metadata = {
  title: "EcMontero - Dev",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      {/* default theme */}
      <body className="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 transition-colors duration-500">
        <div className="flex justify-end p-4">
          <ThemeToggle />
        </div>
        {children}
      </body>
    </html>
  );
}
