import Image from 'next/image';
import Header from '~/components/Header';

export const metadata = {
  title: 'Price | Mindmap',
  description: 'Collaborative Mind Mapping',
  openGraph: {
    title: 'Price | Mindmap',
    description: 'Collaborative Mind Mapping',
  },
};
function Price() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="flex justify-between py-8 mx-auto">
          <a href="#/" className="text-2xl font-semibold text-gray-900">
            price<span className="text-indigo-600">ly</span>
          </a>
          <nav className="">
            <ul className="flex pt-1.5 text-md lg:pt-0 lg:text-lg">
              <li className="lg:px-4">
                <a href="#/" className="p-3 font-semibold">
                  about
                </a>
              </li>
              <li className="lg:px-4">
                <a href="#/" className="p-3 font-semibold">
                  blog
                </a>
              </li>
              <li className="lg:pl-4">
                <a href="#/" className="p-3 font-semibold">
                  contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="pt-10 mx-auto pb-36">
          <div className="mx-auto text-center mb-14">
            <p className="text-4xl font-bold text-black">
              Choose Your MindMeister Plan.
            </p>
          </div>
          <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
            <div className="flex-1 order-2 w-full p-8 mt-8 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
              <div className="flex items-center border-b border-gray-300 mb-7 pb-7">
                <Image
                  width="100"
                  height="100"
                  alt="img"
                  src="https://res.cloudinary.com/williamsondesign/abstract-1.jpg"
                  className="w-20 h-20 rounded-3xl"
                />
                <div className="ml-5">
                  <span className="block text-2xl font-semibold">Basic</span>
                  <span>
                    <span className="text-xl font-medium align-top">$</span>
                    <span className="text-3xl font-bold">10 </span>
                  </span>
                  <span className="font-medium">/ user</span>
                </div>
              </div>
              <ul className="font-medium mb-7">
                <li className="flex mb-2 text-lg">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  />
                  <span className="ml-3">
                    Get started with{' '}
                    <span className="text-black">messaging</span>
                  </span>
                </li>
                <li className="flex mb-2 text-lg">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  />
                  <span className="ml-3">
                    Flexible <span className="text-black">team meetings</span>
                  </span>
                </li>
                <li className="flex mb-2 text-lg">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  />
                  <span className="ml-3">
                    <span className="text-black">5 TB</span> cloud storage
                  </span>
                </li>
                <li className="flex mb-2 text-lg">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  />
                  <span className="ml-3">
                    Get started with{' '}
                    <span className="text-black">messaging</span>
                  </span>
                </li>
                <li className="flex mb-2 text-lg">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  />
                  <span className="ml-3">
                    Flexible <span className="text-black">team meetings</span>
                  </span>
                </li>
                <li className="flex text-lg">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  />
                  <span className="ml-3">
                    <span className="text-black">5 TB</span> cloud storage
                  </span>
                </li>
              </ul>
              <a
                href="#/"
                className="flex items-center justify-center py-2 text-center text-white bg-blue rounded-xl"
              >
                Get Started
                <Image
                  width="40"
                  height="40"
                  alt="img"
                  src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                  className="ml-2"
                />
              </a>
            </div>
            <div className="flex-1 order-1 w-full p-8 shadow-xl bg-[#111827] text-white rounded-3xl sm:w-96 lg:w-full lg:order-2 lg:mt-0">
              <div className="flex items-center pb-8 mb-8 border-b border-gray-600">
                <Image
                  width="100"
                  height="100"
                  alt="img"
                  src="https://res.cloudinary.com/williamsondesign/abstract-2.jpg"
                  className="w-20 h-20 rounded-3xl"
                />
                <div className="ml-5">
                  <span className="block text-3xl font-semibold text-white">
                    Startup
                  </span>
                  <span>
                    <span className="text-xl font-medium align-top">$ </span>
                    <span className="text-3xl font-bold text-white">24 </span>
                  </span>
                  <span className="font-medium">/ user</span>
                </div>
              </div>
              <ul className="mb-10 text-xl font-medium">
                <li className="flex mb-6">
                  <Image
                    width="30"
                    height="30"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  />
                  <span className="ml-3">
                    All features in <span className="text-white">Basic</span>
                  </span>
                </li>
                <li className="flex mb-6">
                  <Image
                    width="30"
                    height="30"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  />
                  <span className="ml-3">
                    Flexible <span className="text-white">call scheduling</span>
                  </span>
                </li>
                <li className="flex mb-6">
                  <Image
                    width="30"
                    height="30"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  />
                  <span className="ml-3">
                    <span className="text-white">15 TB</span> cloud storage
                  </span>
                </li>
                <li className="flex mb-6">
                  <Image
                    width="30"
                    height="30"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  />
                  <span className="ml-3">
                    All features in <span className="text-white">Basic</span>
                  </span>
                </li>
                <li className="flex mb-6">
                  <Image
                    width="30"
                    height="30"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  />
                  <span className="ml-3">
                    Flexible <span className="text-white">call scheduling</span>
                  </span>
                </li>
                <li className="flex">
                  <Image
                    width="30"
                    height="30"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  />
                  <span className="ml-3">
                    <span className="text-white">15 TB</span> cloud storage
                  </span>
                </li>
              </ul>
              <a
                href="#/"
                className="flex items-center justify-center py-2 text-center text-white bg-blue rounded-xl"
              >
                Get Started
                <Image
                  width="40"
                  height="40"
                  alt="img"
                  src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                  className="ml-2"
                />
              </a>
            </div>
            <div className="flex-1 order-3 w-full p-8 mt-8 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
              <div className="flex items-center border-b border-gray-300 mb-7 pb-7">
                <Image
                  width="100"
                  height="100"
                  alt="img"
                  src="https://res.cloudinary.com/williamsondesign/abstract-3.jpg"
                  className="w-20 h-20 rounded-3xl"
                />
                <div className="ml-5">
                  <span className="block text-2xl font-semibold">
                    Enterprise
                  </span>
                  <span>
                    <span className="text-xl font-medium align-top">$ </span>
                    <span className="text-3xl font-bold">35 </span>
                  </span>
                  <span className="font-medium">/ user</span>
                </div>
              </div>
              <ul className="font-medium mb-7">
                <li className="flex mb-2 text-lg">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  />
                  <span className="ml-3">
                    All features in <span className="text-black">Startup</span>
                  </span>
                </li>
                <li className="flex mb-2 text-lg">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  />
                  <span className="ml-3">
                    Growth <span className="text-black">oriented</span>
                  </span>
                </li>
                <li className="flex mb-2 text-lg">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  />
                  <span className="ml-3">
                    <span className="text-black">Unlimited</span> cloud storage
                  </span>
                </li>
                <li className="flex mb-2 text-lg">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  />
                  <span className="ml-3">
                    All features in <span className="text-black">Startup</span>
                  </span>
                </li>
                <li className="flex mb-2 text-lg">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  />
                  <span className="ml-3">
                    Growth <span className="text-black">oriented</span>
                  </span>
                </li>
                <li className="flex text-lg">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-grey.svg"
                  />
                  <span className="ml-3">
                    <span className="text-black">Unlimited</span> cloud storage
                  </span>
                </li>
              </ul>
              <a
                href="#/"
                className="flex items-center justify-center py-2 text-center text-white bg-blue rounded-xl"
              >
                Get Started
                <Image
                  width="40"
                  height="40"
                  alt="img"
                  src="https://res.cloudinary.com/williamsondesign/arrow-right.svg"
                  className="ml-2"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Price;
