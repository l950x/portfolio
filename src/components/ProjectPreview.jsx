import Preview1 from "../assets/img/Preview1.png";
import Preview2 from "../assets/img/Preview2.png";
import Preview3 from "../assets/img/Preview1.png";
import "../assets/css/projectpreview.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
const ProjectPreview = ({ preview }) => {
  const [linkPreview, setLinkPreview] = useState("");
  const [ProjectName, setProjectName] = useState("");
  const [icons, setIcons] = useState([]);
  const [description, setDescription] = useState("");

  useEffect(() => {
    switch (preview) {
      case 1:
        setLinkPreview(Preview1);
        setProjectName("QPanel");
        setIcons(["ri:reactjs-fill", "fontisto:mysql", "mdi:symfony"]);
        setDescription(`QPanel is a website with multiple features, such as sending SMS and emails, buying followers/likes on social media like Instagram or TikTok.`)
        break;
      case 2:
        setLinkPreview(Preview2);
        setProjectName("Purplewings");
        setIcons([
          "flowbite:html-solid",
          "ri:javascript-fill",
          "flowbite:css-solid",
        ]);
        setDescription(`Purplewings is a website featuring a game reminiscent of Flappy Bird that I created during my training for practice. The game was developed using GML.`)
        break;
      case 3:
        setLinkPreview(Preview3);
        setProjectName("AI-discordbot");
        setDescription(
          "Operation is a multi purposes discord bot, the bot is an AI based, made for being angry and unpleasant with every users except for his creator."
        );
        setIcons([
          "carbon:ai",
          "fontisto:mysql",
          "mdi:symfony",
          "teenyicons:python-outline",
          "mdi:nodejs",
          "ri:reactjs-fill",
        ]);
        break;
      default:
        setLinkPreview(Preview1);
        setIcons(["ri:reactjs-fill", "logos:mysql", "mdi:symfony"]);
        break;
    }
  }, [preview]);

  return (
    <>
      <div className="ProjectPreviewDiv">
        <div className="ProjectPreviewCtn">
          <div className="TextCtn">
            <div className="img">
              <img src={linkPreview} alt="" />
            </div>

            <div className="lang">
              {icons.map((icon, index) => (
                <Icon key={index} icon={icon} height={35} />
              ))}
            </div>
            <h2>{ProjectName}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPreview;
