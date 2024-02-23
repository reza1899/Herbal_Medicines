import "./main.css"
const Main = () => {

    return (
        <>
        <div>
            {/*  our-story section  */}
            <div className="our_story">
                <div className="container">
                    <div className="story_desc">
                        <h1 className="fs-2">دسترسی سریع به گیاهان دارویی:</h1>
                        <p>
                            فقط با چند کلیک، شما می‌توانید اطلاعات مربوط به هر گیاه دارویی را دریافت کنید. استفاده از قابلیت جستجوی سایت ما را امتحان کنید.
                        </p>
                    </div>
                    <div className="story_img">
                        <img
                            src ="../../images/tasty-fresh-green-tea-glass-teapot-ceremony-dark-background.jpg"
                            alt="story_image"/>
                    </div>
                </div>
            </div>
            {/*  end our-story section  */}

            {/*  sweet section  */}

            <div className="sweet">
                <div className="sweet_overlay">
                    <div className="container">
                        <div className="sweet_desc">
                            <h1>داروهای گیاهی</h1>
                            <p>
                                هر گیاه، یک تاریخچه دارد؛ تاریخچه‌ای که با توصیف جزئیات خواص آن در اینجا به شما گفته می‌شود. شما در این سفر نه تنها به دنیای خواص درمانی می‌پیوندید بلکه با فهم عمیق‌تری از این گیاهان، به ارتباط نزدیکتری با محیط زیست و خود خواهید رسید.

                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* menu section */}
            <div className="menu">
                <div className="container">
                    <div className="menu_desc">
                        <h1 className="fs-2">در دل داروخانهٔ گیاهی: راهنمایی جذاب برای بهبود سلامت وجود</h1>
                        <p>
                            در هر دانه کوچک از طبیعت، یک راهنمایی برای سلامت و بهبود وجود دارد. اینجا، در بخشی از سایت ما، با شیوه‌نامه‌های جذاب و عملی، شما را به دل داروخانهٔ گیاهی دعوت می‌کنیم. با نحوه استفاده از داروهای گیاهی به طور دقیق و دلپذیر آشنا شوید.
                        </p>
                    </div>
                    <div className="menu_img">
                        <ul>
                            <li className="">
                                <img
                                    src="./../../images/alexander-grey-SavQfLRm4Do-unsplash.jpg"
                                    alt="menu_image"/>
                            </li>
                            <li className="">
                                <img
                                    src="./../../images/francisco-fajardo-O3X96iWeZeU-unsplash.jpg"
                                    alt="menu_image"/>
                            </li>
                            <li className="">
                                <img
                                    src="./../../images/heather-ford-Tinbs_bjKxA-unsplash.jpg"
                                    alt="menu_image"/>
                            </li>
                            <li className="">
                                <img
                                    src="./../../images/alexander-grey-1VsHkDCVzMQ-unsplash.jpg"
                                    alt="menu_image"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/*    hot section    */}
            <div className="hot">
                <div className="hot_overlay">
                    <div className="container">
                        <div className="hot_desc">
                            <h1>مضرات داروهای گیاهی: بررسی کامل برای مصرف امن</h1>
                            <p>
                                در هر جوشاندن خورشید، یک قلمرو از خواص درمانی پیدا می‌شود، اما در هر دانه همچنین باید به مضرات مختصر آن پرداخت. در این بخش از سایت ما، با بررسی دقیق و شفاف مضرات هر داروی گیاهی، شما را برای مصرف امن و هوشمندانه هر گیاه آماده می‌کنیم.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*  delight section  */}
            <div className="delight">
                <div className="container">
                    <div className="delight_desc">
                        <h1>
                            استفاده در زمینه‌های متنوع:
                        </h1>
                        <p>
                            هر گیاه یک داستان متفاوت دارد. در این بخش، با دسته‌بندی‌های متنوع، هر گیاه را بر اساس زمینه‌های مختلف مصرفی معرفی می‌کنیم. شما با ما همراه شوید تا به جستجوی آسان در جهان گیاهان دارویی بپردازید و هر جوانب فراوان آنها را بشناسید.

                        </p>
                    </div>
                    <div className="delight_img">
                        <ul>
                            <li>
                                <img
                                    src="./../../images/gaby-yerden-nox4H2zsWR4-unsplash.jpg"
                                    alt="menu_image"/>
                            </li>
                            <li>
                                <img
                                    src="./../../images/annie-spratt-ia3MnWnTZFw-unsplash.jpg"
                                    alt="menu_image"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default Main