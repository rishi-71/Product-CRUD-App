interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  children,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-[400px] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}