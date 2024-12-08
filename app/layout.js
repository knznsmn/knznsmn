import "./globals.css";


export const metadata = {
  title: "knznsmn | Graphic Designer",
  description: "knznsmn is a graphic designer based in Abu Dhabi, United Arab Emirates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
