import { Dialog } from '@/Components/ui/dialog';

const Modal = ({ open, setOpen, children }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {children}
    </Dialog>
  );
};

export default Modal;
