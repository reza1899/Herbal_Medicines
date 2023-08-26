import './blog.css'
import { useEffect } from 'react';
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

return(
    <>
       <div className='main_blog'>
           <div className="blog_right">
               <div  className='blog m-0'>
                   reza1
               </div>
               <div className='blog'>
                   reza1
               </div>
               <div className='blog'>
                   reza1
               </div>

           </div>
           <div className="blog_left">
               <div className='blog'>
                   reza1
               </div>
               <div className='blog'>
                   reza1
               </div>
               <div className='blog'>
                   reza1
               </div>

           </div>
       </div>
    </>
)

}
export default Blog;