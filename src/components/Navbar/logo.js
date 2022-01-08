import React from "react";
import { animated, useSpring } from "react-spring";

const Boop = ({
  rotation = 0,
  timing = 150,
  tension = 150,
  friction = 10,
  children,
}) => {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    display: "inline-block",
    backfaceVisibility: "hidden",
    transform: isBooped ? `rotate(${rotation}deg)` : `rotate(0deg)`,
    config: {
      tension: 150,
      friction: friction,
    },
  });
  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped, timing]);
  const trigger = () => {
    setIsBooped(true);
  };
  return (
    <animated.span onMouseEnter={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Boop;
