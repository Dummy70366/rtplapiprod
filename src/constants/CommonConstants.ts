import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const IMAGE_SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/svg+xml",
];
export const VIDEO_SUPPORTED_FORMATS = ["video/mp4", "video/webm", "video/ogg"];

export const DeleteModal = (
  id: number,
  callBack: (id: number) => void
) => {
  const alert = withReactContent(Swal);
  alert
    .fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancel",
      confirmButtonColor: "#E17446",
      cancelButtonColor: "#999",
      confirmButtonText: "Yes, delete it!",
      reverseButtons: true,
      showClass: {
        popup: "animate__animated animate__fadeInDown animate__faster",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp animate__faster",
      },
    })
    .then((result) => {
      if (result.isConfirmed) {
        callBack(id);
      }
    });
};

