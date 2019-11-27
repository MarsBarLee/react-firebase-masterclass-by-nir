import React from "react";
import firebase from "../";

const EventList = () => {
  const [events, setEvents] = useState();

  useEffect(() => {
    const eventData = [];

    firebase
      .firestore()
      .collection("events")
      .get()
      .then(querySelector => {
        querySnapshot.forEach(doc => eventData.push(doc));
        setEvents(eventData);
        console.log("nuts!");
      });
  });

  return (
    <div>
      <h1>EventList</h1>
    </div>
  );
};

export default EventList;
//