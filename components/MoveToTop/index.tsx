import { useEffect, useRef } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

const MoveToTop = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref) {
      ref.current!.style.opacity = "0";

      window.addEventListener("scroll", () => {
        if (window.scrollY === 0) {
          ref.current!.style.opacity = "0";
        } else if (window.scrollY > 100) {
          ref.current!.style.opacity = "0.9";
          ref.current!.style.transition = "all 0.5s";
        }
      });
    }
  }, []);

  return (
    <div
      className="fixed rounded-full shadow-2xl z-index-10 bottom-5 right-5"
      ref={ref}
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <div className="text-white bg-black rounded-full cursor-pointer">
        <MdKeyboardArrowUp size={50} className="opacity-90" />
      </div>
    </div>
  );
};

export default MoveToTop;
