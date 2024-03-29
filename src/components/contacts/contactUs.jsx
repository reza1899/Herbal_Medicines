import "./contactUs.css"
import {useLocation} from "react-router-dom";

const ContactUs = () =>{
    const location = useLocation();
    console.log (location.pathname)
    return(
        <>
           <div className="main-about-us">
              <div>
                  <h1 className="about-us-title d-flex justify-content-center">
                      <p> &#127807;</p>
                      درباره ی ما
                      <p> &#127807;</p>
                  </h1>
                  <hr className="about-us-hr"/>
              </div>
                <img className="about-us-pic" src="../../../images/aboutUs.jpg" alt="about us pic"/>

               <h1 className="site-name">
                   گیاهان دارویی <span style={{color: "green"}}>عطر سیب</span>
               </h1>
               <p className="about-us-text">
                   گیاهان دارویی عطر سیب با افتخار به عنوان منبع معتبری برای آشنایی با خواص درمانی گیاهان و استفاده از آنها در زندگی روزمره شما خوش آمد می‌گوید. ما با اطمینان از کیفیت بالا و اطلاعات علمی، تلاش می‌کنیم تا به شما در درک بهتر و بهره‌مندی از گیاهان دارویی کمک کنیم.
                   در گیاهان دارویی عطر سیب، ما به ارائه مقالات علمی و معتبر در زمینه خواص دارویی گیاهان، طب سنتی، و استفاده‌های مختلف گیاهان برای حفظ سلامتی می‌پردازیم. هدف ما افزایش آگاهی شما از قدرت طبیعت و ایجاد یک زندگی سالم‌تر است.
                   از اینکه شما به عنوان اعضای جامعه ما پیوسته و از محتواهای ما بهره‌مند می‌شوید، سپاسگزاریم. با اطمینان که هر روزه به دنبال افزودن اطلاعات جدید و مفید برای شما هستیم.
               </p>
                <p>
                    آدرس :
                </p>
               <p>
                   تلفن :
               </p>
           </div>
        </>
    )
}
export default ContactUs