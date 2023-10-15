import "./globals.css";

const title = "Welcome to ChewChew Memecoin";
const desc =
  "ChewChew  is a memecoin SEI ecosystem.";
const img = "https://chewchew.wtf/assets/images/chew/chew_gradient.png";

export const metadata = {
  title: title,
  description: desc,
  keywords: ["sei", "sei meme", "chew chew", "chewchew memecoin", "memecoin"],
  openGraph: {
    title: title,
    description: desc,
    images: img,
  },
  twitter: {
    card: "summary",
    site: "",
    url: "https://chewchew.wtf/",
    title: title,
    description: desc,
    creator: "@chewchew",
    images: {
      url: img,
      alt: "ChewChew Logo",
    },
  },
  /* robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }, */
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
