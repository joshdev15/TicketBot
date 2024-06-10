import React, { useEffect } from "react";
import DefaultIcon from "./DefaultIcon";
import { connectionHandler } from "./services/api.js";
// import styles from "./styles.module.css";
import styles from "./styles";

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
    <div style={styles.panel}>
      <div style={styles.panelContainer}>
        <div style={styles.panelHeader}>
          <strong>Ticket Bot</strong>
          <div style={styles.panelClose} onClick={() => setShowPanel(false)}>
            Cerrar
          </div>
        </div>

        <div style={styles.content}>{message}</div>
      </div>
    </div>
  ) : (
    <div style={styles.container} onClick={() => setShowPanel(true)}>
      <DefaultIcon />
    </div>
  );
};

export default TicketBot;
