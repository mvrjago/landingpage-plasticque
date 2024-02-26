import React, { useState, useEffect } from "react";
import axios from "axios";
import OnlineLogo from "../img/assets/online.gif";
import OfflineLogo from "../img/assets/offline.png";
import member from "../img/assets/member.gif";
import bot from "../img/assets/bot.png";

const API_BASE_URL = "http://localhost:4000";

const MemberCount = () => {
  const [memberInfo, setMemberInfo] = useState(null);

  useEffect(() => {
    const fetchMemberInfo = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/memberCount`);
        setMemberInfo(response.data);
      } catch (error) {
        console.error("Error fetching member info:", error);
      }
    };

    fetchMemberInfo();

    const interval = setInterval(() => {
      fetchMemberInfo();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="stats" className="member-count-background">
      <h1 className="is-size-4 has-text-white has-text-weight-medium">STATS</h1>
      <div className="member-count-container">
        <div className="left-section">
          <div className="section-content">
            <img src={member} className="section-icon" alt="Members Icon" />
            <div className="section-text">
              <h1>{memberInfo?.totalMembers || "Loading..."}</h1>
            </div>
          </div>
        </div>
        <div className="center-section">
          <div className="section-content">
            <img src={OnlineLogo} className="section-icon" alt="Online Logo" />
            <div className="section-text">
              <h1>{memberInfo?.activeMembers || "Loading..."}</h1>
            </div>
          </div>
        </div>
        <div className="right-section">
          <div className="section-content">
            <img src={bot} alt="Bot Icon" className="section-icon section-bot" />
            <div className="section-text">
              <h1>{memberInfo?.activeBots || "Loading..."}</h1>
            </div>
          </div>
        </div>
      </div>
      <br />
      <h1 className="is-size-4 has-text-white has-text-weight-medium">
        OUR BOTS
      </h1>
      <div className="member-count-container">
        {/* Center Section */}
        <div className="center-section">
          <div className="section2-content">
            {memberInfo?.leaAvatar && (
              <img
                src={memberInfo?.leaAvatar}
                alt={`${memberInfo?.leaName} Avatar`}
                className="avatar-image"
              />
            )}
            <div className="section-text2">
              <h1>
                {memberInfo?.leaName || "Loading..."}{" "}
                {memberInfo?.leaStatus && (
                  <>
                    {memberInfo?.leaStatus === "online" ? (
                      <img
                        src={OnlineLogo}
                        alt="Online"
                        className="status-icon"
                      />
                    ) : (
                      <img
                        src={OfflineLogo}
                        alt="Offline"
                        className="status-icon"
                      />
                    )}
                  </>
                )}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberCount;
