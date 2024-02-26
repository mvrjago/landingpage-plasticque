import Slider from "react-slick";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_BASE_URL = "http://localhost:5001";

export default function Event() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const response = await axios.get(`${API_BASE_URL}/events`);
    setEvents(response.data.reverse());
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 570,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      id="event"
      className="event-container has-text-white is-flex is-flex-direction-column"
    >
      <h1 className="has-text-weight-medium">Event</h1>
      <Slider {...settings} className="event-carousel-container">
        {events.map((event) => (
          <Link className="event-gap" to={`show/${event.uuid}`} key={event.uuid}>
            <img src={event.url} alt={event.title} className="event-size" />
            <h1 className="event-title-text has-text-weight-bold">
              {event.title}
            </h1>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
