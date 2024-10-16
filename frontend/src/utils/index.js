export const formatLargeNumber = (num) => {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(2) + "T";
  } else if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + "B";
  } else if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + "K";
  } else {
    return num.toFixed(2);
  }
};

export const formatPercentage = (num) => {
  return (num * 100).toFixed(2) + "%";
};

export const formatNumber = (num) => {
  return num.toFixed(2);
};
