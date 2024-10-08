import { useNavigate } from "react-router-dom";
import style from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.title_box}>
          <h1 className={style.title}>Campers of your dreams</h1>
          <p className={style.text}>
            You can find everything you want in our catalog
          </p>
        </div>
        <div>
          <button className={style.btn} onClick={() => navigate("/catalog")}>
            View Now
          </button>
          ;
        </div>
      </div>
    </section>
  );
};
export default HomePage;
