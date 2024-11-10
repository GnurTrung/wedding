import "./globals.css";

const title = "TâmKhương - We are getting married!";
const desc =
  "TâmKhương's wedding invitation";
const img = "/assets/images/chew/cuoi_pc.jpg";

export const metadata = {
  title: title,
  description: desc,
  keywords: ["wedding", "tam", "khuong"],
  openGraph: {
    title: title,
    description: desc,
    images: img,
  },
  // twitter: {
  //   card: "summary",
  //   site: "",
  //   url: "https://huyloan-wedding.vercel.app/",
  //   title: title,
  //   description: desc,
  //   creator: "@huyloan",
  //   images: {
  //     url: img,
  //     alt: "Huy Loan Wedding",
  //   },
  // },
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
