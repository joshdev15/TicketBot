const styles: any = {
  container: {
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: "50%",
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  panel: {
    width: 400,
    height: 600,
    position: "absolute",
    bottom: 10,
    right: 10,
    borderRadius: 5,
    background: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    zIndex: 1000,
    color: "black",
  },
  panelContainer: {
    width: "100%",
  },
  panelHeader: {
    background: "#ff000050",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  panelClose: {
    background: "red",
    padding: "5px 10px",
    borderRadius: 15,
    fontSize: 11,
    color: "white",
  },
};

export default styles;
