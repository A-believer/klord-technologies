import { animated, useSpring } from "@react-spring/web";

const NumberSpring = ({ n, isVisible }) => {
	const { number } = useSpring({
		from: { number: 0 },
		to: { number: isVisible ? n : 0 },
		reset: !isVisible,
		delay: isVisible ? 100 : 0,
		config: { mass: 1, tension: 20, friction: 10 },
	});
	return <animated.div>{number.to((n) => Math.round(n).toLocaleString())}</animated.div>;
};
export default NumberSpring;
