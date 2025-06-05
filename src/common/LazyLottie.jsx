import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const LazyLottie = ({ src, preview, ...props }) => {
    const [animationData, setAnimationData] = useState(null);

    useEffect(() => {
        let isMounted = true;
        fetch(src)
            .then((res) => res.json())
            .then((data) => {
                if (isMounted) setAnimationData(data);
            });
        return () => { isMounted = false; };
    }, [src]);

    if (!animationData) {
        return (
            <img
                src={preview}
                alt="Loading animation..."
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
            />
        );
    }

    return <Lottie animationData={animationData} {...props} />;
};

export default LazyLottie;