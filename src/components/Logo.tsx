import { PROJECT_NAME } from "@/lib/constants";

const Logo = ({ size = "default" }: { size?: "small" | "default" | "large" }) => {
  const sizeClasses = {
    small: "text-xl",
    default: "text-2xl",
    large: "text-4xl"
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative inline-flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 rounded-full animate-pulse"></div>
        <div className="relative z-10 bg-gradient-to-r from-blue-500 to-red-500 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
          БР
        </div>
      </div>
      <h1 className={`font-bold ${sizeClasses[size]} bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text`}>
        {PROJECT_NAME}
      </h1>
    </div>
  );
};

export default Logo;
