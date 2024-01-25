import "./AddBookModal.scss";
import ReactModal from "react-modal";

const AddBookModal = ({ isOpen, handleModalCancel, handleAddBook }) => {
  return (
    <>
      <ReactModal isOpen={isOpen} appElement={document.getElementById("root")}>
        <section className="modal">
          <div className="modal__container">
            <div className="modal__icon-button-container">
              <button
                className="modal__icon-button"
                onClick={handleModalCancel}
              ></button>
            </div>
            <div className="modal__text-container">
              <div className="modal__title-container">
                <h1 className="modal__title">{`Add book to reading list?`}</h1>
              </div>
              <div className="modal__description-container">
                <p className="modal__description">
                  {`
                  Please confirm that you would like to add a book to your reading list?`}
                </p>
              </div>
            </div>
          </div>
          <div className="modal__buttons-large-container">
            <div className="modal__buttons-container">
              <div className="modal__cancel-button-container">
                <button
                  className="modal__cancel-button"
                  onClick={handleModalCancel}
                >
                  Cancel
                </button>
              </div>
              <div className="modal__delete-button-container">
                <button
                  className="modal__delete-button"
                  onClick={handleAddBook}
                >
                  Add Book to List
                </button>
              </div>
            </div>
          </div>
        </section>
      </ReactModal>
    </>
  );
};

export default AddBookModal;
