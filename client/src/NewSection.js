import React from "react";

const cardData = [
  {
    img: "https://links.papareact.com/2io",
    title: "Outdoor getaways"
  },
  {
    img: "https://links.papareact.com/q7j",
    title: "Unique stays"
  },
  {
    img: "https://links.papareact.com/s03",
    title: "Entire homes"
  },
  {
    img: "https://links.papareact.com/s03",
    title: "Entire homes"
  },
  {
    img: "https://links.papareact.com/8ix",
    title: "Pet allowed"
  }
];
export const NewSection = () => {
  return (
    <section>
      <h2 style={{ fontWeight: "500", paddingTop: 8, paddingBottom: 8 }}>
        Live Anywhere
      </h2>
      <div style={{ display: "flex", overflow: "scroll" }}>
        {cardData.map((item, index) => {
          return (
            <div className="cursor-pointer hover:scale-105 transition transform duration-300 ease-out">
              <div className="relative h-80 w-80">
                <img
                  alt="Medium Card"
                  src={item.img}
                  style={{ borderRadius: "10px" }}
                  width="100%"
                />
                <h3 className="text-2xl mt-3">{item.title}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
