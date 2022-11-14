const currTime = () => {
  let d = new Date();
  let hour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
  let min = d.getMinutes() > 10 ? d.getMinutes() : `0${d.getMinutes()}`;
  let state = d.getHours() >= 12 ? "pm" : "am";

  return `${hour}:${min}${state}`;
};

export const sendMessage = (name, message) => {
  return {
    name: name,
    text: message,
    time: currTime(),
  };
};

export const sendLocation = (name, latitude, longitude) => {
  return {
    name: name,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    time: currTime(),
  };
};
