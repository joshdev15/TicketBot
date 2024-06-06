import React, { useEffect } from "react";
import styles from "./styles.module.css";
import DefaultIcon from "./DefaultIcon";
import { connectionHandler } from "../../services/api";

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
    <div className={styles.panel}>
      <div className={styles.panelContainer}>
        <div className={styles.panelHeader}>
          <strong>Ticket Bot</strong>
          <div
            className={styles.panelClose}
            onClick={() => setShowPanel(false)}
          >
            Cerrar
          </div>
        </div>

        <div style={styles.content}>{message}</div>
      </div>
    </div>
  ) : (
    <div className={styles.container} onClick={() => setShowPanel(true)}>
      <DefaultIcon />
    </div>
  );
};

export default TicketBot;
