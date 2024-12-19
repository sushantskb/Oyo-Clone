import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Header5 from "@/components/Header5";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          OYO: India&apos;s Best Hotel Booking Site for Sanitized Stays
        </title>
      </Head>
      <Header1 />
      <Header2 />
      <Header3 />
      <div className="mx-20 my-14">
        <div className="mb-14">
          <Image
            src={"/banner1.avif"}
            alt="banner1"
            width={200}
            height={200}
            className="h-80 w-full"
          />
        </div>
        <div className="mb-14">
          <Image
            src={"/banner2.avif"}
            alt="banner2"
            width={200}
            height={200}
            className="h-50 w-full"
          />
        </div>
        <Header4 />
      </div>
      <Header5 />
      <Footer />
    </div>
  );
}
