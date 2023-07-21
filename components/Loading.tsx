import { useEffect, useState } from "react";

const Loading = () => {
  const [dot, setDot] = useState("...");
  useEffect(() => {
    const timer = setInterval(() => {
      setDot((dot) => (dot.length < 3 ? dot + "." : "."));
    }, 300);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="h-full w-full flex justify-center items-center">
      Loading{dot}
    </div>
  );
};

export default Loading;
