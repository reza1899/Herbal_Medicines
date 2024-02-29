import './blog.css'
import {useEffect} from 'react';

const Blog = () => {
    useEffect(() => {
        // Select all the blog elements
        const blogElements = document.querySelectorAll('.blog');

        // Function to apply animation to each blog
        const animateBlogs = () => {
            blogElements.forEach((blog, index) => {
                blog.style.opacity = '1';
                blog.style.transform = 'translateY(0)';
                blog.style.transitionDelay = `${index * 0.2}s`; // Delay each blog's animation
            });
        };

        // Call the animation function after a short delay
        setTimeout(animateBlogs, 500);
    }, []);

    return (
        <>
            <div className='main_blog'>
                <div className="blog_right">
                    <div className='blog text-center p-3 m-0'>
                        <h3>
                            "قدرت گیاهان: مقدمه ای بر طب گیاهی"
                        </h3>
                        <p className="mt-4">
                            طب گیاهی که به عنوان گیاه درمانی نیز شناخته می شود، از قدرت
                            شفابخش گیاهان بهره می برد. این عمل باستانی از ترکیبات شیمیایی منحصر به فرد موجود در گیاهان
                            مختلف
                            برای کمک به مبارزه با بیماری ها و بهبود سلامت کلی استفاده می کند.
                        </p>
                    </div>
                    <div className='blog text-center p-3'>
                        <h3>
                            باز کردن قفل داروخانه طبیعت: راهنمای درمان های گیاهی
                        </h3>
                        <p className="mt-4">
                            داروخانه نیچر بسیار وسیع و متنوع است
                            و داروهای گیاهی فراوانی را ارائه می دهد. از بابونه تسکین دهنده گرفته تا جینسینگ نیروبخش، هر
                            گیاه دارای خواص درمانی خاص خود است. هدف این راهنما کشف اسرار این شفا دهنده های طبیعی است.
                        </p>
                    </div>
                    <div className='blog text-center p-3 '>
                        <h3>
                            "گیاهان برای سلامتی: کاوش در خواص دارویی گیاهان"
                        </h3>
                        <p className="mt-4">
                            گیاهان مدت ها قبل از تاریخ ثبت شده برای اهداف
                            دارویی استفاده می شده اند. فرهنگ‌های باستانی از داروهای گیاهی استفاده می‌کردند و امروزه نیز
                            رواج
                            دارد. این وبلاگ به بررسی مزایای سلامتی گیاهان مختلف می پردازد و اینکه چگونه آنها می توانند
                            سلامتی شما را افزایش دهند. </p>

                    </div>

                </div>
                <div className="blog_left">
                    <div className='blog text-center p-3'>
                        <h3>
                            "از باغ تا داروخانه: رشد و استفاده از گیاهان دارویی"
                        </h3>
                        <p className="mt-4">
                            کشت گیاهان دارویی می‌تواند تجربه‌ای ارزشمند
                            باشد. نه تنها شاهد روند رشد هستید، بلکه این فرصت را دارید که داروهای گیاهی خود را نیز
                            بسازید.
                            این وبلاگ شما را از کشت باغ تا آماده سازی داروخانه راهنمایی می کند.
                        </p>
                    </div>
                    <div className='blog text-center p-3'>
                        <h3>
                            "شفا دهنده های طبیعت: درک فواید داروهای گیاهی" </h3>
                        <p className="mt-4">
                            داروی گیاهی سنگ بنای سلامتی کل نگر است و
                            گیاهان
                            نقش کلیدی در حفظ تعادل در بدن دارند. این پست وبلاگ به فواید داروهای گیاهی می پردازد و درک
                            عمیق
                            تری از شفا دهنده های قوی طبیعت ارائه می دهد.
                        </p>
                    </div>
                    <div className='blog text-center p-3'> 
                        <h3>
                            "راهنمای گیاه‌پزشک: نکاتی برای استفاده و تهیه داروهای گیاهی"
                        </h3>
                        <p className="mt-4">
                            تهیه داروهای گیاهی خود می‌تواند
                            قدرتمند و اقتصادی باشد. این کتاب راهنما نکات عملی را در مورد نحوه استفاده ایمن و موثر از
                            گیاهان
                            ارائه می دهد و تضمین می کند که بیشترین بهره را از داروهای گیاهی خود ببرید.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )

}
export default Blog;