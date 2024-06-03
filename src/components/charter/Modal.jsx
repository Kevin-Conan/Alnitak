import react from "react";
import "./modal.css"
import "./charter.css"
const Modal = ({ isOpen, onClose, children,h1_content,p_content,img_content}) => {
    if (!isOpen) return null;
      return (
        <>
        <div className="modal">
        <div className="modal_container">
          <article className="modal-container">
          <header className="modal-container-header">
          <h1 className="modal-container-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
          <path fill="none" d="M0 0h24v24H0z" />
          <path fill="currentColor" d="M14 9V4H5v16h6.056c.328.417.724.785 1.18 1.085l1.39.915H3.993A.993.993 0 0 1 3 21.008V2.992C3 2.455 3.449 2 4.002 2h10.995L21 8v1h-7zm-2 2h9v5.949c0 .99-.501 1.916-1.336 2.465L16.5 21.498l-3.164-2.084A2.953 2.953 0 0 1 12 16.95V11zm2 5.949c0 .316.162.614.436.795l2.064 1.36 2.064-1.36a.954.954 0 0 0 .436-.795V13h-5v3.949z" />
        </svg>
          {h1_content}
        </h1>
        <button className="icon-button" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
          <path fill="none" d="M0 0h24v24H0z" />
          <path fill="currentColor" d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
          </svg>
          </button>
            </header>
          <section className="modal-container-body rtf">
          {img_content ? (
            <div aria-label="Orange and tan hamster running in a metal wheel" role="img" class="wheel-and-hamster">
            <div className="wheel"></div>
            <div className="hamster">
              <div className="hamster__body">
                <div className="hamster__head">
                  <div className="hamster__ear"></div>
                  <div className="hamster__eye"></div>
                  <div className="hamster__nose"></div>
                </div>
                <div className="hamster__limb hamster__limb--fr"></div>
                <div className="hamster__limb hamster__limb--fl"></div>
                <div className="hamster__limb hamster__limb--br"></div>
                <div className="hamster__limb hamster__limb--bl"></div>
                <div className="hamster__tail"></div>
              </div>
            </div>
            <div className="spoke"></div>
          </div>
      ) : (
         <p className="modal-bodyp" style={{ whiteSpace: 'pre-wrap' }}>{p_content}
              </p>
      )}
          </section>
          <footer className="modal-container-footer">
          <button className="button is-primary" onClick={onClose} id="modal_accept">Accept</button>
          </footer>
          </article>
          </div>
          </div>
      </>
    );
};
export default Modal;