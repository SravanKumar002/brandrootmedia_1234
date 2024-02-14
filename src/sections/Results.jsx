import { LinearGradient } from "react-text-gradients";
import TiltCard from "../components/TiltCard";
import TwoCardsEffect from "../components/TwoCardsEffect";

export default function Results() {
  return (
    <div className="mx-5 my-64">
      <h1 className="text-[50px] font-poppins tracking-tight leading-[60px] mt-36">
      Success Stories: Brands Thriving with{" "}
        <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>
        Brandroot Media
        </LinearGradient>{" "}
      </h1>
      <div>
        <div className="md:w-[71%] w-full">
          <TiltCard
            image={"https://growthrocket.media/brands/fisdom.svg"}
            title={"Brandroot Media: We help businesses achieve their marketing goals."}
            para={
              "Brandroot Media is a full-service marketing agency that specializes in content creation, video editing, and graphic design. We have a team of experienced professionals who can help you create high-quality content that will engage your target audience and achieve your marketing goals."
            }
            cta = {" Contact Brandroot Media today for a free consultation."}
            imgStyle={"h-fit"}
            imgContainerStyle={ 
              "bg-[#ecc86c] md:py-20 py-24 md:m-0 m-6 w-fit flex justify-center items-center p-3 rounded-md"
            }
          />
        </div>
        <div className="md:w-[71%] w-full  relative md:left-96">
          <TiltCard
            image={
              "https://growthrocket.media/_next/image?url=%2Fresult_formula.JPG&w=256&q=75"
            }
            title={"50,000 followers and 5 million lifetime views in 6 months"}
            para={
              "Formula Guy’s personal brand page gained over 50,000 followers and over 5 million views in less than 6 months. Growth Rocket helped build his personal brand from day 1 of his journey."
            }
            imgStyle={"md:h-[165px] h-fit object-cover"}
            imgContainerStyle={
              "bg-[#ecc86c] h-full m-3 md:m-0 h-full md:h-44 md:w-96 flex justify-center items-center p-1 rounded-md "
            }
          />
        </div>
        <div className="md:w-[71%] w-full">
          <TiltCard
            image={"https://ik.imagekit.io/7saglhzb5/Bard_Generated_Image%20(2).jpg?updatedAt=1707545512358"}
            title={"800% more virality and 6x growth in average views"}
            para={
              "Brandroot Media Agency created a reel in-house on one of their success stories and it got 6,800 views. We created a reel on the exact same topic and it went viral with over 61,000 views! Plus, a 6x growth in average views on reels."
            }
            imgStyle={"h-[100%] w-[100%]] object-cover"}
            imgContainerStyle={
              "bg-[#ecc86c] h-44 md:w-half w-[85%] m-3 md:m-0 flex justify-center items-center p-1 rounded-md "
            }
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse gap-24 my-44">
        <div className="rounded-md from-yellow-500 to-white-600 -rotate-[4deg] my-[90px]">
          <img
            src="https://ik.imagekit.io/7saglhzb5/Bard_Generated_Image%20(1).jpg?updatedAt=1707541730472"
            alt=""
            className="w-[400px] rounded-md rotate-[5deg] border border-white-900 md:mt-11 mt-[-5px]"
          />
        </div>
        <div className="w-[90%]">
          <p className="text-white-600 md:text-4xl text-2xl md:leading-[70px] leading-[24px] mb-5 md:mb-20 md:ml-[-220px] font-poppins">
            <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>Brandroot Media - Your Online Creative Hub</LinearGradient>
          </p>
          <h1 className="md:text-[30px] md:text-[40px] text-2xl font-poppins tracking-normal md:leading-[20px] md:leading-[42px]">
            If your brand isn't leveraging Instagram,<br/>
            <LinearGradient gradient={["to right", "#fdde00 ,#ffffff"]}>
              {" "}
              it's time to make a powerful shift. And if you're already there, let's elevate your presence daily.
            </LinearGradient>
            {/* If youit's time to make a powerful shift. And if you're already there, let's elevate your presence daily.it's time to make a powerful shift. And if you're already there, let's elevate your presence daily. brand isn't leveraging Instagram,<br/><LinearGradient gradient={["to right", "fde00, #ffffff"]}> it's time to make a powerful shift. And if you're already there, let's elevate your presence daily.</LinearGradient> */}
          </h1>
          <p className="md:text-2xl text-1xl my-2 font-poppins mt-5 ">
          At Brandroot Media, we specialize in crafting captivating content tailored specifically for Instagram.
          From stunning graphics to engaging video edits, we're your one-stop solution for all things visual. Our team creates Reels that stop the scroll, Carousels that tell your story, Memes that resonate with your audience, and Daily Stories that keep them coming back for more.
          But it's not just about aesthetics - it's about results. We're dedicated to growing your Instagram presence organically, fostering a vibrant community of followers who aren't just numbers but potential customers ready to convert.
          Elevate your brand on Instagram with Brandroot Media - where creativity meets conversion."
          </p>
          {/* <button className="my-10 bg-gradient-to-br from-purple-500 to-gray-600 text-black font-semibold px-7 py-2.5 text-2xl rounded">
            Go Viral
          </button> */}
        </div>
      </div>
      <div>
        {/* <TwoCardsEffect
          rotate1={"-rotate-[1deg]"}
          rotate2={"rotate-[1deg]"}
          children={
            <h1 className="text-xl md:text-4xl font-semibold text-center py-10 px-2 md:px-0 text-white">
              Brandroot Media Agency - Guaranteed Results or Your Money Back!
            </h1>
          }
        /> */}
        <TwoCardsEffect
          rotate1={"-rotate-[1deg]"}
          rotate2={"rotate-[1deg]"}>
          <h1 className="text-xl md:text-4xl font-poppins text-center py-10 px-2 md:px-0 text-white">
            Brandroot Media Agency - Guaranteed Results or Your Money Back!
          </h1>
        </TwoCardsEffect>

      </div>
    </div>
  );
}