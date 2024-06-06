import React from "react";
import styles from "./styles.module.css";

const TicketBot = () => {
  const [showPanel, setShowPanel] = React.useState(false);

  return showPanel ? (
    <div className={styles.panel}>
      <div onClick={() => setShowPanel(false)}>Cerrar</div>
    </div>
  ) : (
    <div className={styles.container} onClick={() => setShowPanel(true)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
        <line x1="8" y1="16" x2="8" y2="16" />
        <line x1="16" y1="16" x2="16" y2="16" />
      </svg>
    </div>
  );
};

export default TicketBot;
