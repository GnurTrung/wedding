import Day20Container from "@/container/pageDay20";
import FunContainer from "@/container/pageFun";

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
  return <Day20Container />;
};

export default Fun;
