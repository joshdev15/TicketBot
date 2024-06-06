import React, { useEffect } from "react";
import DefaultIcon from "./DefaultIcon";
import { connectionHandler } from "../../services/api";
import "../../styles/main.css";

const TicketBot = () => {
  const [showPanel, setShowPanel] = React.useState(false);
  const [message, setMessage] = React.useState("Loading...");

  const readMessage = async () => {
    const localMessage = await connectionHandler();
    setMessage(localMessage);
  };

  useEffect(() => {
    readMessage();
  }, []);

  return showPanel ? (
    <div className="panel">
      <div className="panelContainer">
        <div className="panelHeader">
          <strong>Ticket Bot</strong>
          <div className="panelClose" onClick={() => setShowPanel(false)}>
            Cerrar
          </div>
        </div>

        <div style="content">{message}</div>
      </div>
    </div>
  ) : (
    <div className="container" onClick={() => setShowPanel(true)}>
      <DefaultIcon />
    </div>
  );
};

export default TicketBot;
