import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Modal from "./Modal";

const Food = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsToShow = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10"
        );
        const result = await response.json();
        setData(result.Items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + itemsToShow);
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - itemsToShow, 0));
  };

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="ml-12">Popular</h2>
        <div className="flex items-center mb-1 pb-1 mr-8">
          <Modal />
          {data.filter((item) => item.IsPopular).length > itemsToShow && (
            <div className="flex arrow-buttons">
              <FaChevronLeft className="text-gray-600" onClick={handlePrev} />
              <FaChevronRight className="text-gray-600" onClick={handleNext} />
            </div>
          )}
        </div>
      </div>
      <div
        className="flex flex-wrap"
        style={{
          justifyContent: "center",
        }}
      >
        {data
          .filter((item) => item.IsPopular)
          .slice(startIndex, startIndex + itemsToShow)
          .map((item) => (
            <div
              key={item.Id}
              className="p-2"
              style={{
                flex: "0 0 100%", // Take full width on mobile devices
                maxWidth: "240px", // Limit width on larger screens
              }}
            >
              <img
                className="rounded-lg"
                src={item.ImageUrl}
                alt={item.Name}
                style={{ width: "100%", height: "300px" }}
              />
              <p className="text-center text-gray-500">{item.Name}</p>
              {/* <p>${item.Price.toFixed(2)}</p> */}
            </div>
          ))}
      </div>

      <div className="mt-12">
        <div className="flex justify-between">
          <h2 className="ml-12">Recommended</h2>
          <div className="flex items-center mb-1 pb-1 mr-8">
            <Modal />
            {data.filter((item) => item.IsRecommended).length > itemsToShow && (
              <div className="flex arrow-buttons">
                <FaChevronLeft className="text-gray-600" onClick={handlePrev} />
                <FaChevronRight
                  className="text-gray-600"
                  onClick={handleNext}
                />
              </div>
            )}
          </div>
        </div>

        <div
          className="flex flex-wrap"
          style={{
            justifyContent: "center",
          }}
        >
          {data
            .filter((item) => item.IsRecommended)
            .slice(startIndex, startIndex + itemsToShow)
            .map((item) => (
              <div
                key={item.Id}
                className="p-2"
                style={{
                  flex: "0 0 100%", // Take full width on mobile devices
                  maxWidth: "240px", // Limit width on larger screens
                }}
              >
                <img
                  className="rounded-lg"
                  src={item.ImageUrl}
                  alt={item.Name}
                  style={{ width: "100%", height: "300px" }}
                />
                <p className="text-center text-gray-500">{item.Name}</p>
                {/* <p>${item.Price.toFixed(2)}</p> */}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Food;
