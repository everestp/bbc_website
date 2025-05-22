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
  console.log("Is the ImagePreview component receiving a valid imageUrl?", imageUrl);

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 hover:bg-gray-100"
        aria-label="Open image preview"
      >
        <Eye className="w-4 h-4" />
        Read
      </Button>

      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        className="fixed inset-0 flex items-center justify-center p-4 sm:p-6"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        contentLabel="Image Preview Modal"
      >
        <div className="bg-white p-4 sm:p-6 rounded-lg w-full max-w-[95vw] sm:max-w-4xl max-h-[90vh] relative overflow-auto">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-red-600 text-xl font-bold hover:text-red-800 z-10"
            aria-label="Close image preview"
          >
            ✖
          </button>
          <img
            src={imageUrl}
            alt="Image preview"
            className="w-full h-auto max-h-[80vh] object-contain rounded"
          />
        </div>
      </Modal>
    </>
  );
};

export default ImagePreview;