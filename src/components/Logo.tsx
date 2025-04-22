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
        <div className="relative z-10 bg-gradient-to-r from-blue-500 to-red-500 text-white font-bold rounded-full flex items-center justify-center"
             style={{ width: size === "small" ? "2rem" : size === "large" ? "3.5rem" : "2.5rem", 
                      height: size === "small" ? "2rem" : size === "large" ? "3.5rem" : "2.5rem" }}>
          <span className="mr-px">БР</span>
          <div className="absolute top-1 right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
        </div>
      </div>
      <h1 className={`font-bold ${sizeClasses[size]} bg-gradient-to-r from-blue-500 to-red-500 text-transparent bg-clip-text`}>
        {PROJECT_NAME}
      </h1>
    </div>
  );
};

export default Logo;
