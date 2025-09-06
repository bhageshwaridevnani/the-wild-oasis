import { useEffect, useRef } from "react";

function useOutsideClick(close, listenCapturing = true) {
  //deleting a click outside the modal that pop-up should close
  const modalRef = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        //here e.target means if you click on the pop-up so it will same as ref.current but if you click outside the pop-pup so it will not same as ref.current
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          close();
        }
      }
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [close, listenCapturing]
  );

  return modalRef;
}

export default useOutsideClick;
