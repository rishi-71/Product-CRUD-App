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
      <div className="bg-[#1a1a1a] p-6 rounded-xl w-[400px] relative border border-gray-800">
        <button
          onClick={onClose}
         className="absolute top-3 right-4 text-xl text-gray-400 hover:text-white"
        >
          ×
        </button>

        {children}
      </div>
    </div>
  );
}