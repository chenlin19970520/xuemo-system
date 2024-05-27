import Sunset from "@/components/Background/Sunset";
import homeBackgroundStyle from "./HomeBackGround.module.css"
const HomeBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={homeBackgroundStyle.home_background}>
      <Sunset />
      <div className={homeBackgroundStyle.home_body}>
       {children}
      </div>
    </div>
  );
};

export default HomeBackground;
  