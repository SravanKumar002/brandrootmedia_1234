import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "../components/ServiceCard";
import { LinearGradient } from "react-text-gradients";
import ClientCard from "../components/ClientCard";
import { Keyboard, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

const more_cards = [
  {
    h: "Vertical Content",
    p: "Our visual design experts will create aesthetic designs that stand out",
  },
  {
    h: "360 Youtube",
    p: "Ideate and create relatable videos that resonated with the audience in youtube",
  },
  {
    h: "360 Instagram",
    p: "End-to-end social media management to optimize content and drive engagement.",
  },
  {
    h: "Graphic Designing",
    p: "Graphic Designing specializes in crafting captivating the innovative ideas.",
  },
  {
    h: "Research & Writing",
    p: "For each content, we will do the research and write compelling copies for you.",
    images : "https://growthrocket.media/_next/image?url=%2Ft111.jpg&w=384&q=75"
  },
  {
    h: "Video Editing",
    p: "We will create captivating videos using fast paced video editing.",
  },
  {
    h: "Thumbnail Designing",
    p: "For each particular content we will design thumbnails accordingly",
  }
];


const clients = [
  {
    img: "https://growthrocket.media/_next/image?url=%2Ft111.jpg&w=384&q=75",
    p: "We partnered with Growth Rocket to create a new social media page about Poker education. They didn't just craft a comprehensive social media strategy for our Poker education page, but also flawlessly executed content from conception to delivery. An exemplary team that genuinely drives results!",
    name: "Varun Ganjoo",
    comp: "- Founder, Poker Baazi",
  },
  {
    img: "https://growthrocket.media/_next/image?url=%2Ft2.jpg&w=384&q=75",
    p: "Our vision was to share our brand's success stories through short engaging videos. Thanks to the incredibly innovative team at Growth Rocket, not only did we get a tailored social media strategy, but they also spearheaded the entire video creation process. I'm thrilled to share that our debut video skyrocketed with over 60,000 views! Truly an experience beyond our expectations.",
    name: "Ramakrishna NK",
    comp: "- Founder, Rang De",
  },
  {
    img: "https://growthrocket.media/_next/image?url=%2Ft3.jpeg&w=384&q=75",
    p: "Teaming up with Ayushman and Growth Rocket was a game changer for us. Their exceptional financial education videos for YouTube and Instagram not only showcased top-tier production but also drove virality, organically boosting our subscribers and followers. An outstanding collaboration!",
    name: "Shivani Muthanna",
    comp: "- Digital Content Head, Fisdom",
  },
];

export default function Services() {
  return (
    <div className="mt-56 mb-36" id="services">
      <h1 className="text-4xl md:text-[55px] font-poppins tracking-tight leading-[35px] md:leading-[60px]">
        Here's what <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>we will do for you</LinearGradient>
      </h1>
      <div className="flex gap-20 my-4 mt-16 gap-x-40 gap-y-40 px-8 md:px-0 ">
        <Swiper
          loop={true}
          slidesPerView={4}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          autoplay={{
            delay: 3500, // specify autoplay delay in milliseconds
            disableOnInteraction: true, // enable autoplay even after user interaction
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          spaceBetween={300}
          modules={[Keyboard, Navigation, Autoplay]}
          className="mySwiper px-20 py-10"
        >
        {more_cards.map((e, i) => (
          <SwiperSlide key={i} className="p-4">
            <ServiceCard
              key={i}
              h={e.h}
              p={e.p}
              className="flex justify-center items-center w-20 h-20 mx-2"
              autoPlay
              muted
            controls
          />
        </SwiperSlide>
        ))}
        <div className="swiper-button-next text-slate-100 animate-bounce-left"></div>
        <div className="swiper-button-prev text-slate-100 animate-bounce-right"></div>
      </Swiper>

       </div>
      <div className="my-56" id="clientwords">
        <h1 className="text-3xl md:text-[55px] font-poppins tracking-tight  md:leading-[60px] mb-7 md:mb-20">
          Hear from our{" "}
          <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>
            Happy Clients
          </LinearGradient>{" "}
        </h1>
        <Swiper>
        <div className="flex flex-col md:flex-row justify-between gap-20">
          {clients.map((e, i) => (
            <ClientCard
              key={i}
              img={e.img}
              p={e.p}
              name={e.name}
              comp={e.comp}
            />
          ))}
        </div>
        </Swiper>
      </div>
    </div>
  );
}