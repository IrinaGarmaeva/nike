import { useState } from "react";
import Button from "../../components/Button/Button";
import ShoeCard from "../../components/ShoeCard/ShoeCard";
import { arrowRight } from "../../assets/icons";
import { STATISTICS, SHOES } from "../../common/constants";
import { bigShoe1 } from "../../assets/images";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section id="home" className="xl:padding-1 wide:padding-r padding-b w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-coral-red">Our Summer Collections</p>
        <h1 className="mt-10 text-8xl font-palanquin max-sm:text-[72px] max-sm:leading-[82] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The new Arrival</span>
          <br />
          <span className="text-coral-red mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="font-monserrat text-slate-gray text-lg mt-6 mb-14 leading-8 sm:max-w-sm">Discover stylish Nike arrivals, quality comfort, and innovation for your active life</p>
        <Button text="Shop now" iconUrl={arrowRight}/>
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {STATISTICS.map((item) => (
            <div key={item.label} className="">
              <p className="text-4xl font-bold font-palanquin">{item.value}</p>
              <p className="leading-7 font-montserrat text-slate-gray">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center bg-primary bg-hero bg-cover bg-center xl:min-h-screen max-xl:py-40">
        <img src={bigShoeImg} alt="shoe collection" width={610} height={500} className="object-contain relative z-10"/>
        <div className="flex flex-row gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {SHOES.map((shoe) => (
            <div key={shoe}>
              <ShoeCard imgUrl={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImage={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
