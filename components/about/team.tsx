"use client";
import Image from "next/image";
import team from "@/assets/images/team.png";
import { teamData } from "@/lib/constants/team";

import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import TeamCard from "../cards/TeamCard";

const Team = () => {
  return (
    <section className="relative z-10 grid grid-cols-5 items-center gap-12 bg-light-4 px-4 py-12 md:gap-16 md:p-24">
      <div className="col-span-3 flex flex-col gap-4">
        <h2 className="font-primary text-6xl">Our Team</h2>
        <p className="font-secondary text-lg font-light">
          The Anuvaad Sangam team is a passionate group of engineers, linguists,
          and communication enthusiasts. We&#39;re united by a common goal: to
          smash language barriers and connect the world through real-time
          conversation. Our team thrives on innovation and is constantly working
          to improve translation accuracy and user experience. With expertise in
          various languages and a deep understanding of communication, we&#39;re
          committed to making Anuvaad Sangam the most effective and
          user-friendly platform for global conversations.
        </p>
        <Swiper
          className="font-secondary w-screen"
          modules={[ Autoplay]} //Enable the Pagination and Autoplay modules
          slidesPerView={1} // Set the number of slides to show at once
          loop={true} // Enable looping of slides
          autoplay={{
            delay: 3500, // Set the delay between automatic slide changes
            disableOnInteraction: false, // Don't disable autoplay when the user interacts with the slides
            pauseOnMouseEnter: true, // Pause autoplay when the mouse enters the swiper
          }}
          speed={1300} // Set the transition speed
          pagination={{ clickable: true }} // Enable clickable pagination
        >
          {/* Map over the testimonialData and render a SwiperSlide and TestimonialCard for each item */}
          {teamData.map((member) => (
            <SwiperSlide key={member.id}>
              <TeamCard
                // Pass the avatar, name, and review to the TestimonialCard
                avatar={member.avatar}
                name={member.name}
                role={member.role}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="col-span-2">
        <Image src={team} alt="hero image" />
      </div>
    </section>
  );
};

export default Team;
