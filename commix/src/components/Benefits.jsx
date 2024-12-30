import { useState } from "react";
import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "/public/assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "/public/assets/svg/ClipPath";

const Benefits = () => {
  const [showAll, setShowAll] = useState(false);

  // Group benefits by category
  const groupedBenefits = benefits.reduce((acc, benefit) => {
    acc[benefit.category] = acc[benefit.category] || [];
    acc[benefit.category].push(benefit);
    return acc;
  }, {});

  // Flatten all benefits and limit to 6 visible cards before "Show More"
  const allBenefits = Object.values(groupedBenefits).flat();
  const limitedBenefits = showAll ? allBenefits : allBenefits.slice(0, 6);

  // Group the visible benefits by category
  const groupedVisibleBenefits = limitedBenefits.reduce((acc, benefit) => {
    acc[benefit.category] = acc[benefit.category] || [];
    acc[benefit.category].push(benefit);
    return acc;
  }, {});

  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading className="md:max-w-md lg:max-w-2xl" title="Our Services." />

        {Object.entries(groupedVisibleBenefits).map(([category, items]) => (
          <div key={category} className="mb-12">
            {/* Styled Subheading */}
            <h4 className="text-2xl font-bold text-gradient mb-6">{category}</h4>
            <div className="flex flex-wrap gap-10 mb-10">
              {items.map((item) => (
                <div
                  className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
                  style={{
                    backgroundImage: `url(${item.backgroundUrl})`,
                  }}
                  key={item.id}
                >
                  <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                    <h5 className="h5 mb-5">{item.title}</h5>
                    <p className="body-2 mb-6 text-n-3">{item.text}</p>
                    <div className="flex items-center mt-auto">
                      <img
                        src={item.iconUrl}
                        width={48}
                        height={48}
                        alt={item.title}
                      />
                      <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                        Explore more
                      </p>
                      <Arrow />
                    </div>
                  </div>

                  {item.light && <GradientLight />}

                  <div
                    className="absolute inset-0.5 bg-n-8"
                    style={{ clipPath: "url(#benefits)" }}
                  >
                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                      {item.imageUrl && (
                        <img
                          src={item.imageUrl}
                          width={380}
                          height={362}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </div>

                  <ClipPath />
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Show More/Less Button */}
        {allBenefits.length > 6 && (
          <div className="text-center">
            <button
              className="relative px-8 py-3 text-sm font-bold text-white uppercase tracking-wide rounded-lg
                         border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
                         transition-transform transform hover:scale-105"
              onClick={() => setShowAll(!showAll)}
              style={{
                clipPath:
                  "polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)",
              }}
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Benefits;
