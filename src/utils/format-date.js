const formatDate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleString("en-US", {
    timeZone: "UTC",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export { formatDate };
