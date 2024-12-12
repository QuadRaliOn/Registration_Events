import { useEffect } from "react";
import Popup from "reactjs-popup";
import { XMark } from "./icons/icons";

export default function PopupEventRegistrationApp({
  popupIsOpen,
  closePopup,
  children,
  backdropClassName,
}) {
  useEffect(() => {
    if (popupIsOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [popupIsOpen]);

  return (
    <Popup open={popupIsOpen} onClose={closePopup} closeOnDocumentClick={false}>
      <div
        className={`flex h-screen w-screen bg-black opacity-20 ${backdropClassName}`}
        onClick={closePopup}
      ></div>

      <article
        className={`no-scrollbar min-h-2/4 absolute left-1/2 top-1/2 flex max-h-[100vh] w-11/12 -translate-x-1/2 -translate-y-1/2 transform flex-col overflow-y-auto overflow-x-hidden rounded-xl bg-white p-10 sm:w-3/4 sm:p-12`}
      >
        <div className={`-m-8 mb-2 self-end cursor-pointer`}>
           <XMark onClick={closePopup}/>
        </div>

        <div>{children}</div>
      </article>
    </Popup>
  );
}
