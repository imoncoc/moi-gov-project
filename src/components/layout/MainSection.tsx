import NoticeBoard from "../../pages/main/NoticeBoard";
import Products from "../../pages/main/Products";
import ChiefAdviser from "../../pages/slide/ChiefAdviser";
import EmergencyHotline from "../../pages/slide/EmergencyHotline";
import Gems from "../../pages/slide/Gems";
import Hotline from "../../pages/slide/Hotline";
import InternalEservice from "../../pages/slide/InternalEservice";
import NationalAnthem from "../../pages/slide/NationalAnthem";
import SocialMedia from "../../pages/slide/SocialMedia";
import { eServiceData } from "../../pages/slide/data";

const MainSection = () => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row lg:gap-10 my-16">
      <div className=" w-full lg:w-[80%]">
        <div>
          <NoticeBoard />
        </div>
        <div>
          <Products />
        </div>
      </div>
      <div className=" w-full lg:w-[20%]">
        <div>
          <ChiefAdviser />
        </div>
        <div>
          <InternalEservice
            title={eServiceData[0].title}
            serviceData={eServiceData[0]?.eServiceArr}
            name={"All"}
          />
        </div>
        <div>
          <Hotline />
        </div>
        <div>
          <InternalEservice
            title={eServiceData[1].title}
            serviceData={eServiceData[1]?.eServiceArr}
            name={"All Link"}
          />
        </div>
        <div>
          <Gems />
        </div>
        <div>
          <SocialMedia />
        </div>
        <div>
          <NationalAnthem />
        </div>
        <div>
          <EmergencyHotline />
        </div>

        <div>
          <InternalEservice
            title={eServiceData[1].title}
            serviceData={eServiceData[1]?.eServiceArr}
            name={"All Link"}
          />
        </div>
        <div>
          <InternalEservice
            title={eServiceData[2].title}
            serviceData={eServiceData[2]?.eServiceArr}
            name={"false"}
          />
        </div>
      </div>
    </div>
  );
};

export default MainSection;
