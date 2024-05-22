import Sunset from "@/components/Background/Sunset";

const HomeBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Sunset />

      {children}
    </div>
  );
};

export default HomeBackground;
