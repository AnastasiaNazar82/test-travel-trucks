import { ThreeDots } from "react-loader-spinner";
import style from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={style.loader}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#FFC531"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
