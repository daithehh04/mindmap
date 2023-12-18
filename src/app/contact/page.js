import Image from 'next/image';
import Footer from '~/components/Footer';
import Header from '~/components/Header';

export const metadata = {
  title: 'Contact | Mindmap',
  description: 'Collaborative Mind Mapping',
  openGraph: {
    title: 'Contact | Mindmap',
    description: 'Collaborative Mind Mapping',
  },
};
function Contact() {
  return (
    <>
      <Header />
      <section className="content">
        <div className="flex justify-between gap-8 mx-auto mt-[150px] mb-[80px]">
          <div>
            <p className="mt-4 heading-2">Contact with us</p>
            <h3 className="!text-6xl leading-normal tracking-tight heading-1 mt-2">
              Get in Touch
            </h3>
            <h4 className="mt-6 text-xl text-gray">
              Tell us how we can help you succeed. We will:
            </h4>
            <ul className="flex flex-col gap-8 mt-8">
              <li className="flex items-center gap-6">
                <div className="w-[26px] h-[26px] bg-black rounded-full flex items-center justify-center">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  />
                </div>
                <p className="text-gray1 font-[300] text-lg">
                  Help increase your productivity.
                </p>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-[26px] h-[26px] bg-black rounded-full flex items-center justify-center">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  />
                </div>
                <p className="text-gray1 font-[300] text-lg">
                  Introduce MindMeister and explain its value to your business.
                </p>
              </li>
              <li className="flex items-center gap-6">
                <div className="w-[26px] h-[26px] bg-black rounded-full flex items-center justify-center">
                  <Image
                    width="20"
                    height="20"
                    alt="img"
                    src="https://res.cloudinary.com/williamsondesign/check-white.svg"
                  />
                </div>
                <p className="text-gray1 font-[300] text-lg">
                  Create a price and license plan best suited to your needs
                </p>
              </li>
            </ul>
          </div>
          <form className="w-full max-w-[500px]">
            <div className="w-full mb-6 ">
              <label
                className="block mb-2 text-[14px] font-bold tracking-wide text-gray uppercase"
                htmlFor="grid-first-name"
              >
                Name
              </label>
              <input
                className="block w-full px-4 py-3 mb-3 leading-tight bg-[#f5f8fa] border border-blue1 rounded appearance-none text-black focus:outline-none focus:bg-white focus:border-blue"
                id="grid-first-name"
                type="text"
                required
                placeholder="The"
              />
            </div>
            <div className="w-full mb-6">
              <label
                className="block mb-2 text-[14px] font-bold tracking-wide text-gray uppercase"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="block w-full px-4 py-3 leading-tight bg-[#f5f8fa] border border-blue1 rounded appearance-none text-black focus:outline-none focus:bg-white focus:border-blue"
                id="phone"
                type="text"
                required
                placeholder="+84xxx.xxx.xxx"
              />
            </div>
            <div className="flex flex-wrap mb-3 -mx-3">
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-[14px] font-bold tracking-wide text-gray uppercase"
                  htmlFor="grid-password"
                >
                  Email Address
                </label>
                <input
                  className="block w-full px-4 py-3 mb-3 leading-tight text-black bg-[#f5f8fa] border border-blue1 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue"
                  id="grid-email"
                  type="email"
                  required
                  placeholder="********@*****.**"
                />
              </div>
            </div>
            <div className="flex flex-wrap mb-3 -mx-3">
              <div className="w-full px-3">
                <label
                  className="block mb-2 text-[14px] font-bold tracking-wide text-gray uppercase"
                  htmlFor="grid-password"
                >
                  Your Message
                </label>
                <textarea
                  rows={5}
                  className="block w-full px-4 py-3 mb-3 leading-tight text-black bg-[#f5f8fa] border border-blue1 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue"
                />
              </div>
              <div className="flex justify-center w-full px-3 mt-3">
                <button
                  className="px-6 py-3 font-bold text-white rounded-full shadow bg-blue hover:bg-indigo-400 focus:shadow-outline focus:outline-none"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;
