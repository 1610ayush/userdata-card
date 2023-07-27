import React, { useRef } from "react";
import html2canvas from "html2canvas";
import "../App.css"
import topBorder from "../images/top-border.png"
import bottomBorder from "../images/bottom-border.png"
import refyneLogo from "../images/refyne-logo.png"
import maskGroup1 from "../images/mask-group-1.png"
import maskGroup2 from "../images/mask-group-2.png"
import vector1 from "../images/vector-1.svg"
import vector2 from "../images/vector-2.svg"
import vector5 from "../images/vector-5.svg"
import group2 from "../images/group-1494.png"
import group3 from "../images/group-15181.png"

const UserPage = ({ data }) => {
  const cardRef = useRef();

  const handleDownloadPNG = () => {
    html2canvas(cardRef.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "user_card.png";
      link.href = imgData;
      link.click();
    });
  };

  return (
    <div className="flex">
      <div ref={cardRef} className="new-joine-template card ">
        <img className="img" alt="Top border" src={topBorder} />
        <div className="content">
          <div className="frame">
            <div className="div">
              <div className="frame">
                <div className="div">
                  <div className="frame-2">
                    <div className="logo-welcome">
                      <img className="refyne-logo" alt="Refyne logo" src={refyneLogo} />
                      <p className="dear-team-please">
                        <span className="text-wrapper">Dear Team, </span>
                        <span className="span">Please join us in welcoming</span>
                      </p>
                    </div>
                    <div className="picture">
                      <img className="mask-group rounded-3xl" alt="Mask group" src={data.image} />
                    </div>
                  </div>
                  <div className="name-and-designation">
                    <h1 className="vineet-mishra-senior">
                      <span className="text-wrapper-2">
                        {data.name}
                        <br />
                      </span>
                      <span className="text-wrapper-3">{data.designation}</span>
                    </h1>
                  </div>
                </div>
                <div className="professional">
                  <div className="icon-professional">
                    <div className="group">
                      <img className="img-2" alt="Vector" src={vector1} />
                      <div className="overlap-group">
                        <img className="img-2" alt="Mask group" src={maskGroup1} />
                      </div>
                      <img className="vector" alt="Vector" src={vector2} />
                    </div>
                    <div className="mask-group-wrapper">
                      <img className="mask-group-2" alt="Mask group" src={maskGroup2} />
                    </div>
                  </div>
                  <div className="vineet-mishra-leads-wrapper">
                    <p className="vineet-mishra-leads">
                      {data.professionalBio}
                    </p>
                  </div>
                </div>
              </div>
              <div className="hobbies">
                <div className="icon-hobbies">
                  <div className="overlap-group-2">
                    <img className="vector-2" alt="Vector" src={vector5} />
                    <div className="rectangle" />
                    <div className="rectangle-2" />
                  </div>
                  <div className="overlap">
                    <div className="rectangle-3" />
                  </div>
                  <div className="rectangle-4" />
                  <div className="rectangle-5" />
                </div>
                <div className="p-wrapper">
                  <p className="p">
                    {data.hobbies}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-name">
              <p className="text-wrapper-4">
                {data.name}, we are super excited to have you on board and build a great place to work together.
              </p>
            </div>
          </div>
          <div className="welcome-aboard">
            <div className="text-wrapper-5">- Team Refyne -</div>
            <div className="text-wrapper-6">Welcome aboard!</div>
          </div>
        </div>
        <div className="elements">
          <div className="overlap-2">
            <img className="group-2" alt="Group" src={group2} />
            <img className="group-3" alt="Group" src={group3} />
          </div>
        </div>
        <img className="img" alt="Bottom border" src={bottomBorder} />
      </div>
      <div className="flex flex-col items-center mt-4 ml-4">
        <button onClick={handleDownloadPNG} className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring focus:border-blue-300 mb-2">
          Download as PNG
        </button>
      </div>
    </div>
    
  );
};

export default UserPage;
