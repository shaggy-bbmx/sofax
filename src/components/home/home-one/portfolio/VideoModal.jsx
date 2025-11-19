// VideoModal.js
import { createPortal } from "react-dom";

function VideoModal({ youtubeUrl, onClose }) {
    return createPortal(
        <div
            className="video-modal-overlay"
            onClick={onClose}
        >
            <div
                className="video-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                <button className="modal-close" onClick={onClose}>×</button>

                <iframe
                    width="100%"
                    height="100%"
                    src={youtubeUrl.replace("watch?v=", "embed/") + "?autoplay=1"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>,
        document.body
    );
}

export default VideoModal;
