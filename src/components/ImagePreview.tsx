import { useState } from "react";
import Modal from "react-modal";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ImagePreviewProps {
  imageUrl: string;
}

Modal.setAppElement("#root");

const ImagePreview = ({ imageUrl }: ImagePreviewProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 hover:bg-gray-100"
      >
        <Eye className="w-4 h-4" />
        Read
      </Button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="bg-white p-4 rounded-lg max-w-3xl w-full relative">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-red-600 text-xl"
            aria-label="Close Image Preview"
          >
            ✖
          </button>
          <img
            src={imageUrl}
            alt="Preview"
            className="w-full h-auto object-contain rounded"
          />
        </div>
      </Modal>
    </>
  );
};

export default ImagePreview;
