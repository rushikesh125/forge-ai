
import "./globals.css";


export const metadata = {
  title: "Forge Ai ",
  description: "Forge ai",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
