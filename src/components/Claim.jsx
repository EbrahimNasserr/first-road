import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Claim = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        },
      },
    ],
  };
  return (
    <section className="md:py-6">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <h2 className=" capitalize font-medium text-headingColor text-2xl">claim now</h2>
          <Link href="/history" className=" capitalize text-4xl text-[#455BB1]">
            <div className="flex justify-center items-center">
              <Image src="/vector.png" width={8} height={8} alt="arrow" />
              <Image src="/vector.png" width={8} height={8} alt="arrow" />
            </div>
          </Link>
        </div>
        <div className="slider-container py-6">
          <Slider {...settings}>
            <div className="claim-box shadow-custom2-shadow flex justify-center items-center flex-col gap-2 p-4 text-center rounded-xl bg-header-gradient text-slate-50">
              <Image src="/gas.png" width={50} height={50} alt="gas" />
              <span className="text-xl font-bold">30%</span>
              <h3 className="text-sm font-normal">Tap to claim</h3>
            </div>
            <div className="claim-box shadow-custom2-shadow flex justify-center items-center flex-col gap-2 p-4 text-center rounded-xl bg-header-gradient text-slate-50">
              <Image src="/accordion.png" width={50} height={50} alt="gas" />
              <span className="text-xl font-bold">10%</span>
              <h3 className="text-sm font-normal">Tap to claim</h3>
            </div>
            <div className="claim-box shadow-custom2-shadow flex justify-center items-center flex-col gap-2 p-4 text-center rounded-xl bg-header-gradient text-slate-50">
              <Image src="/accordion.png" width={50} height={50} alt="gas" />
              <span className="text-xl font-bold">10%</span>
              <h3 className="text-sm font-normal">Tap to claim</h3>
            </div>
            <div className="claim-box shadow-custom2-shadow flex justify-center items-center flex-col gap-2 p-4 text-center rounded-xl bg-header-gradient text-slate-50">
              <Image src="/accordion.png" width={50} height={50} alt="gas" />
              <span className="text-xl font-bold">10%</span>
              <h3 className="text-sm font-normal">Tap to claim</h3>
            </div>
            <div className="claim-box shadow-custom2-shadow flex justify-center items-center flex-col gap-2 p-4 text-center rounded-xl bg-header-gradient text-slate-50">
              <Image src="/cliam.png" width={50} height={50} alt="gas" />
              <span className="text-xl font-bold">30%</span>
              <h3 className="text-sm font-normal">Tap to claim</h3>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Claim;

// import React from "react";
// import Slider from "react-slick";

// function Responsive() {
//   var settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//     initialSlide: 0,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 3,
//           infinite: true,
//           dots: true
//         }
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//           initialSlide: 2
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1
//         }
//       }
//     ]
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//         <div>
//           <h3>7</h3>
//         </div>
//         <div>
//           <h3>8</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default Responsive;
