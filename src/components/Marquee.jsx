import React from "react";

const Marquee = ({ text = "$PIRATE" }) => {
  return (
    <div className="relative w-full overflow-hidden py-2">
      <div
        className="flex w-full animate-marquee whitespace-nowrap"
        style={{
          animation: "marquee 15s linear infinite", // Plus lent
        }}
      >
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="text-2xl font-bold mx-6 uppercase"
            style={{
              color: "rgb(150, 252, 229)", // Couleur verte similaire au GIF
            }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
