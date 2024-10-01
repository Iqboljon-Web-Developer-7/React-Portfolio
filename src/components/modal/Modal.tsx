import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { FC, useState } from "react";

interface Modal {
  title: string;
  children: JSX.Element;
}

const UniModal: FC<Modal> = ({ title, children }): JSX.Element => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>{title}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="w-full h-full min-h-screen flex items-center
        justify-center flex-col"
      >
        <Box>{children}</Box>
      </Modal>
    </div>
  );
};

export default UniModal;
