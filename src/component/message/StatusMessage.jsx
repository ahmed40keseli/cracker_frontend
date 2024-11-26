import React from "react";

const StatusMessage = ({ status, error }) => {
  if (status === "loading") {
    return <p>Yükleniyor...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return null;
};

export default StatusMessage;
