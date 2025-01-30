import Image from "next/image";
import Link from "next/link";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-100 py-10">
      <div className="container mx-auto px-6 lg:px-12">
        {/* top section */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-1o">
          {/* Left text */}
          <div>
            <h1 className="text-lg font-semibold mb-2">
              World&apos;s leading chain of hotels and homes
            </h1>
          </div>

          {/* Right Button */}
          <div className="mt-6 lg:mt-0">
            <button className="bg-white text-gray-700 px-4 py-2 font-semibold hover:shadow-md">
              List your property
            </button>
          </div>
        </div>
        {/* Downlaod Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="text-sm text-gray-300 mb-6 md:mb-8">
            Downlaod OYO app for exiciting offers
            <div className="flex mt-2 gap-4">
              <Image
                src={"/app_store.svg.webp"}
                alt="app store"
                width={200}
                height={200}
                className="w-36"
              />
              <Image
                src={"/app_store.svg.webp"}
                alt="app store"
                width={200}
                height={200}
                className="w-36"
              />
            </div>
          </div>
          {/* divider */}
          <div className="mt-8">
            <ul>
              <li>About Us</li>
              <li>Teams / Carrers</li>
              <li>Blogs</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="mt-8">
            <ul>
              <li>About Us</li>
              <li>Teams / Carrers</li>
              <li>Blogs</li>
              <li>Support</li>
            </ul>
          </div>
        </div>

        {/* divider */}
        <hr className="border-gray-500 mb-8" />

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 text-sm text-gray-300">
          <div>
            <h2 className="text-gray-100 font-semibold mb-3">OYO Hotels</h2>
            <ul className="space-y-2 ">
              <li className="hover:underline cursor-pointer">Hotels near me</li>
              <li className="hover:underline">Hotels in Manali</li>
              <li className="hover:underline">Hotels in Goa</li>
              <li className="hover:underline">Hotels in Shimla</li>
              <li className="hover:underline">Hotels in Mumbai</li>
            </ul>
          </div>

          <div className="mt-[2.2rem]">
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">
                Hotels in Pondicherry
              </li>
              <li className="hover:underline cursor-pointer">
                Hotels in Bangalore
              </li>
              <li className="hover:underline cursor-pointer">
                Hotels in Hyderabad
              </li>
              <li className="hover:underline cursor-pointer">
                Hotels in Mysore
              </li>
              <li className="hover:underline cursor-pointer">
                Hotels in Japan
              </li>
            </ul>
          </div>
          <div className="mt-[2.2rem]">
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">
                Hotels in Lonavala
              </li>
              <li className="hover:underline cursor-pointer">
                Hotels in Kodaikanal
              </li>
              <li className="hover:underline cursor-pointer">
                Hotels in Gangtok
              </li>
              <li className="hover:underline cursor-pointer">
                Hotels in Kolkata
              </li>
              <li className="hover:underline cursor-pointer">
                Hotels in Daman
              </li>
            </ul>
          </div>
          <div className="mt-[2.2rem]">
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">
                Hotels in Kasuali
              </li>
              <li className="hover:underline cursor-pointer">
                Hotels in Dehradun
              </li>
              <li className="hover:underline cursor-pointer">
                Hotels in Mahabaleshwar
              </li>
              <li className="hover:underline cursor-pointer">Hotels in Pune</li>
              <li className="hover:underline cursor-pointer">
                Hotels in Chennai
              </li>
            </ul>
          </div>
          <div className="mt-[2.2rem]">
            <ul className="space-y-2">
              <li className="hover:underline cursor-pointer">
                Hotels in Shillong
              </li>
              <li className="hover:underline cursor-pointer">
                Hotels in Yercaud
              </li>
              <li className="hover:underline cursor-pointer">
                Hotels in Rishikesh
              </li>
              <li className="hover:underline cursor-pointer">Hotels in Pune</li>
              <li className="hover:underline cursor-pointer">
                Hotels in Shimla
              </li>
            </ul>
          </div>
        </div>

        {/* divider */}
        <hr className="border-gray-500 my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm">
          <div>
            <p className="text-base">2013-2022 &copy; Orvel Stays Limited</p>
          </div>

          <div className="mt-4 lg:mt-0 flex gap-4">
            <Link href="#" className="text-gray-300 hover:text-white">
              <CiFacebook size={30} />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <CiInstagram size={30} />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <CiTwitter size={30} />
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white">
              <CiYoutube size={30} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
