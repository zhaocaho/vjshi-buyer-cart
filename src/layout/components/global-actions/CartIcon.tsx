import { useAppDispatch } from "@/hooks/reduxHooks";
import { openCartDrawer } from "@/store/slices/cartSlices";

export default function CartIcon() {
  const dispatch = useAppDispatch();

  const handleIconClick = () => {
    dispatch(openCartDrawer());
  };

  return (
    <div
      className="relative w-14 h-14 rounded-full bg-white flex items-center justify-center"
      style={{ boxShadow: "0px 4px 10px 0px rgba(0, 0, 0, 0.3)" }}
      onClick={handleIconClick}
    >
      <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        className="dioa-icon lg:w-5 lg:h-5"
      >
        <path
          d="M4.132 3.805q-.016-.07-.044-.137-.028-.066-.066-.126-.039-.06-.087-.114-.048-.054-.104-.098-.056-.045-.12-.08-.062-.034-.13-.058-.068-.023-.139-.035-.07-.012-.142-.012-.1 0-.196.023-.07.016-.136.044-.066.028-.126.066-.061.039-.114.087-.054.048-.098.104-.045.056-.08.12-.034.062-.058.13-.023.068-.035.138-.012.071-.012.143 0 .1.022.195l2.404 10.233q.204.87.906 1.426.7.556 1.595.556h9.25q.911 0 1.62-.575.707-.576.894-1.468l.997-4.765q.25-1.197-.52-2.146-.772-.95-1.995-.95H5.157q-.195 0-.37.085l-.655-2.786Zm1.036 4.411 1.368 5.82q.068.292.302.478.235.186.534.186h9.25q.304 0 .54-.193.238-.192.3-.49l.997-4.765q.084-.4-.174-.718-.258-.318-.667-.318H5.168Z"
          fill-rule="evenodd"
          fill="currentColor"
        ></path>
        <circle cx="7.616" cy="18.676" fill="currentColor" r="1.286"></circle>
        <circle cx="16.386" cy="18.676" fill="currentColor" r="1.286"></circle>
      </svg>

      <span className="absolute top-0 right-0 w-7 h-7 rounded-full bg-[#0071E3] flex items-center justify-center text-white text-xs ">
        12
      </span>
    </div>
  );
}
