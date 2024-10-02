import Snackbar from "@mui/material/Snackbar";

export default function PopUp({ popUp, setPopUp }) {
  const handleClosePopUp = () => {
    setPopUp({
      ...popUp,
      open: false,
    });
  };

  const vertical = "bottom";
  const horizontal = "center";

  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={popUp.open}
        onClose={handleClosePopUp}
        TransitionComponent={popUp.Transition}
        key={popUp.Transition.name}
        autoHideDuration={4000}
      >
        <div
          style={{
            boxShadow: "2px 6px 8px 1px rgba(29, 32, 37, 0.2)",
            borderRadius: "10px",
            width: "310px",
            height: "74px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="popup"
        >
          <p className="popup-txt">
            <span>Done!</span>
            <br /> I'll get back to you shortly
          </p>
        </div>
      </Snackbar>
    </div>
  );
}
