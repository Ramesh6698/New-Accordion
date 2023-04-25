import React, { useState } from "react";
import "./App.css";
import Accordion from "./Accordion";
import "./style.css";
function App() {
  

  const data = [
    {
      question: "Health and Fitness Paragraph 1",
      answer:
"Physically exercises are great for our muscles, heart, and lungs. Some more advantages of the physical activities are; it builds our bones strong, saves us from obesity by promoting a healthy weight, saves us from diabetes, helps us to build healthy habits, keeps us away from cancer, prevents high blood pressure, and other major problems. Thus, through regular exercises and healthy food in timely manner, we can easily maintain our health and fitness."
    },
    {
      question: "Health and Fitness Paragraph 2",
      answer:
"Physical activities along with the proper nutrition are really very beneficial to the people of all ages from any background and abilities. Being involved in the daily physical exercises is a good strategy to defeat obesity. According to the statistics, it is found that around one-third of the U.S. adult citizens are obese and almost 17% of children and adolescents are obese. There are many people suffering from the diabetes and other chronic health problems such as heart disease, high blood pressure, cancer, asthma, overweight, etc."
    },
    {
      question: "Health and Fitness Paragraph 3",
      answer:
        "Around 30 or above 30, our body starts developing various health problems if we are not involved in any type of physical activity. In such case, we are at tip of risks who must think about the health and fitness as well as starts following all the tips of getting healthy and fit. Physical exercises and proper nutrition on daily basis gives us health, physical fitness and mental fitness. In order to maintain a healthy lifestyle, we must involve in the daily routine exercises and fresh healthy food. Being healthy and fit increases our energy level, improves confidence, burns calories, minimizes complications of chronic diseases and increases life term.",
    },
  ];
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
  };

  return (
    <ul className="accordion">
      {data.map((info, index) => (
        <Accordion
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          key={index}
          data={info}
        />
      ))}
    </ul>
  );
}

export default App;