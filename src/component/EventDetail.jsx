import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_BASE_URL = "http://localhost:5001";

const EventDetail = () => {
  const [event, setEvent] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getEventById = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    getEventById();
  }, [id]);

  return (
    <div className="event-detail-bg">
      <div className="event-detail-container">
        <div className="justify-center columns">
          <div className="content-container columns">
            <div className="column is-two-fifths ed-img-container">
              <div className="text-event-container column">
                <h1 className="has-text-weight-medium event-text">Event</h1>
              </div>
              <img src={event.url} className="event-detail-img" alt="" />
            </div>
            <div className="text-container column is-three-fifths">
              <h1>{event.title}</h1>
              <div className="p-container">
                {event.description &&
                  event.description.split("\n").map((paragraph, index) => (
                    <p key={index} style={{ marginBottom: "10px" }}>
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
