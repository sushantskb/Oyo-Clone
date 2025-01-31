/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Header1 from "@/components/Header1";
import Header2 from "@/components/Header2";
import Header3 from "@/components/Header3";
import Header4 from "@/components/Header4";
import Header5 from "@/components/Header5";
import Head from "next/head";
import Image from "next/image";

export default function Home({locations}) {
  return (
    <div>
      <Head>
        <title>
          OYO: India&apos;s Best Hotel Booking Site for Sanitized Stays
        </title>
      </Head>
      <Header1 />
      <Header2 locations={locations} />
      <Header3 />
      <div className="mx-20 my-14">
        <div className="mb-14">
          <img
            src={"/banner1.avif"}
            alt="banner1"
            width={200}
            height={200}
            className="h-80 w-full"
          />
        </div>
        <div className="mb-14">
          <img
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

export async function getServerSideProps() {
  try {
    const res = await fetch(`${process.env.API}/api/locations`);
    const data = await res.json();
    console.log("API Response:", data);

    return {
      props: {
        locations: data.locations || [],
      },
    };
  } catch (error) {
    console.error("Error fetching locations:", error);
    return {
      props: {
        locations: [],
      },
    };
  }
}