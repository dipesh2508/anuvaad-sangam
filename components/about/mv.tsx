import React from "react";

const Mv = () => {
  return (
    <section className="relative z-10 flex flex-col items-center gap-8 bg-light-4 px-4 py-12 md:flex-row md:gap-16 md:p-24">
      <div className="flex flex-col h-[60vh] items-center gap-4 rounded-2xl bg-secondary-1 p-6 px-8 text-white shadow-2xl">
        <h3 className="mt-2 rounded-md bg-secondary-3 p-1 px-8 font-sans text-white">
          WHO WE ARE, WHAT WE DO
        </h3>
        <h1 className="font-secondary text-3xl font-semibold text-primary-9">
          OUR VISION
        </h1>
        <p className="m-4 text-justify text-base font-primary font-medium text-secondary-4">
          {
            "Our vision at Anuvaad Sangam is to create a world without language barriers. We envision a future where real-time communication transcends geographical and cultural boundaries. Imagine a global conversation happening seamlessly, fostering collaboration, friendships, and a deeper understanding between people from all walks of life. We strive to be the leading platform that empowers this vision, continuously innovating translation technology and fostering a global community that celebrates the richness of diverse languages."
          }
        </p>
      </div>
      <div className=" flex flex-col h-[60vh] items-center gap-4 rounded-2xl bg-secondary-1 p-6 px-8 text-white shadow-2xl">
        <h3 className="mt-2 rounded-md bg-secondary-3 p-1 px-8 font-sans text-white">
          WHAT WE ASPIRE TO BE
        </h3>
        <h1 className="font-secondary text-3xl font-semibold text-primary-9">
          OUR MISSION
        </h1>
        <p className="m-4 mt-0 text-justify text-base font-primary font-medium text-secondary-4 md:m-8">
          {
            "Anuvaad Sangam's mission is to bridge the communication gap that language barriers create. We believe everyone deserves to connect and have meaningful conversations, regardless of their native tongue. Through our innovative real-time translation technology, we empower users to chat effortlessly across borders and cultures. By seamlessly converting messages into your preferred language, we foster understanding and build a global community where everyone can be heard and understood."
          }
        </p>
      </div>
    </section>
  );
};

export default Mv;
