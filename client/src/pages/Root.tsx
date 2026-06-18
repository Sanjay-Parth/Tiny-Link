import Navbar from "@/components/Navbar";
import HeroImage from "@/assets/HeroImage.webp";
import { Button, Link, Image } from "@heroui/react";

const Root = () => {
  return (
    <section className="lg:h-[100dvh] bg-[#F0E8FC]">
      <Navbar />

      <div className="relative flex flex-col items-center h-full max-w-screen-xl px-4 mx-auto md:flex-row sm:px-6 p-8 lg:h-[calc(100dvh-73px)]">
        {/* Left Content */}
        <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
          <div className="text-left">
            <h2 className="text-2xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-3xl sm:leading-none md:text-4xl lg:text-5xl">
              Transform Long Links into Tiny, Powerful Connections!
            </h2>

            <p className="max-w-md mt-3 text-base text-gray-600 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              With Tinylink, shorten, share, and track your URLs
              seamlessly—simplify your online experience.
            </p>

            <div className="mt-5 sm:flex">
              <Button
                size="lg"
                color="primary"
                radius="sm"
                href="register"
                as={Link}
                className="bg-purple-700 hover:bg-purple-600 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex items-center py-5 md:w-1/2 md:pb-10 md:pt-10 md:pl-10">
          <div className="relative w-full">
            <Image
              src={HeroImage}
              alt="Hero Image"
              width={"full"}
              radius="none"
              shadow="none"
              className="bg-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Root;