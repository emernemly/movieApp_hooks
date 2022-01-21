import * as React from "react";
import Fab from "@mui/material/Fab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import AddIcon from "@mui/icons-material/Add";
import TextField from "@mui/material/TextField";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Add({ handelAdd }) {
  const [open, setOpen] = React.useState(false);
  const [getAdd, setGetAdd] = React.useState({
    id: Math.random(),
    image: "",
    rating: "",
    name: "",
    date: "",
    type: "",
    description: "",
  });
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handelvalue = (e) =>
    setGetAdd({ ...getAdd, [e.target.id]: e.target.value });
  return (
    <>
      <Button onClick={handleOpen}>
        <Fab color="#f44336" aria-label="add">
          <AddIcon />
        </Fab>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <form>
          <Box sx={style}>
            <h2>Add Your Favorie Movies...</h2>
            <Box sx={{ margin: 1, width: 500, maxWidth: "100%" }}>
              <TextField
                fullWidth
                label="Movie Name"
                id="name"
                onChange={handelvalue}
              />
            </Box>
            <Box sx={{ margin: 1, width: 500, maxWidth: "100%" }}>
              <TextField
                fullWidth
                label="Movie image"
                id="image"
                onChange={handelvalue}
              />
            </Box>
            <Box sx={{ margin: 1, width: 500, maxWidth: "100%" }}>
              <TextField
                sx={{ margin: 1 }}
                id="rating"
                label="Rating"
                type="number"
                variant="filled"
                onChange={handelvalue}
                //InputProps={{ inputProps: { min: 0, max: 5 } }}
                inputProps={{ min: 0, max: 5, width: "100%" }}
                InputLabelProps={{
                  shrink: true,
                }}
              />{" "}
            </Box>
            <br />
            <input
              type="date"
              placeholder="Movie Date "
              id="date"
              onChange={handelvalue}
            />
            <Box sx={{ margin: 1, width: 500, maxWidth: "100%" }}>
              <TextField
                fullWidth
                label="Movie Type:..."
                id="type"
                onChange={handelvalue}
              />
            </Box>
            <Box sx={{ margin: 1, width: 500, maxWidth: "100%" }}>
              <TextField
                fullWidth
                label="Movie Description..."
                id="description"
                onChange={handelvalue}
              />
            </Box>
            <button
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "#800000",
                color: "white",
                fontSize: 30,
                borderRadius: 8,
              }}
              onClick={(e) => {
                handelAdd(getAdd);
                e.preventDefault();
                handleClose();
                setGetAdd({
                  image: "",
                  rating: "",
                  name: "",
                  date: "",
                  type: "",
                  description: "",
                });
              }}
            >
              Add Movies
            </button>
          </Box>
        </form>
      </Modal>
    </>
  );
}
export default Add;
