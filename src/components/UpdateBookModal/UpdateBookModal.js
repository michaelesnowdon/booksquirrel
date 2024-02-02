import "./UpdateBookModal.scss";
import ReactModal from "react-modal";

const UpdateBookModal = ({
  isOpen,
  handleModalCancelUpdate,
  handleUpdateBook,
}) => {
  return (
    <>
      <ReactModal isOpen={isOpen} appElement={document.getElementById("root")}>
        <section className="modal">
          <div className="modal__container">
            <div className="modal__icon-button-container">
              <button
                className="modal__icon-button"
                onClick={handleModalCancelUpdate}
              ></button>
            </div>
            <div className="modal__text-container">
              <div className="modal__title-container">
                <h1 className="modal__title">{`Mark book as read?`}</h1>
              </div>
              <div className="modal__description-container">
                <p className="modal__description">
                  {`
                  Please confirm that you would like to mark this book as read? This action cannot be undone.`}
                </p>
              </div>
            </div>
          </div>
          <div className="modal__buttons-large-container">
            <div className="modal__buttons-container">
              <div className="modal__cancel-button-container">
                <button
                  className="modal__cancel-button"
                  onClick={handleModalCancelUpdate}
                >
                  Cancel
                </button>
              </div>
              <div className="modal__delete-button-container">
                <button
                  className="modal__delete-button"
                  onClick={handleUpdateBook}
                >
                  Mark book as read
                </button>
              </div>
            </div>
          </div>
        </section>
      </ReactModal>
    </>
  );
};

export default UpdateBookModal;
