import { useState, ReactNode } from "react";
import { useFloating, offset, shift } from "@floating-ui/react";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content }) => {
  const [isVisible, setIsVisible] = useState(false);

  const { x, y, refs, strategy } = useFloating({
    placement: "top",
    middleware: [offset(8), shift()],
  });

  return (
    <span
      ref={refs.setReference}
      className="relative inline-block cursor-pointer"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          ref={refs.setFloating}
          className="absolute z-50 px-6 py-4 bg-[#d33e59] text-white text-sm rounded-lg shadow-lg"
          style={{
            position: strategy,
            left: x ?? 0,
            top: y ?? 0,
          }}
        >
          {content}
        </div>
      )}
    </span>
  );
};

export default Tooltip;
