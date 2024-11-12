import Day19SpecialContainer from "@/container/pageDay19Special";

export const generateMetadata = async () => {
  const title = "TâmKhương - We are getting married!";
  const desc = "TâmKhương's wedding invitation";
  const img = "/assets/images/chew/cuoi_pc.jpg";
  try {
    const metadata = {
      title: title,
      description: desc,
      keywords: ["wedding", "tam", "khuong"],
      openGraph: {
        title: title,
        description: desc,
        images: img,
      },
    };
    return metadata;
  } catch (error: any) {
    console.error("Fail");
    return {};
  }
};
const Fun = () => {
  return <Day19SpecialContainer />;
};

export default Fun;
