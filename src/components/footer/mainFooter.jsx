import "./footer.css"
const Footer = () => {
    return (
        <>
            <div className="gradient-container">
                <div className="text-center p-5">
                    <h4>گل دارو </h4>
                    <img className="img_footer" src="https://img.freepik.com/premium-photo/hand-draw-shampoo-bottel-vector-design_862994-17792.jpg?size=626&ext=jpg&ga=GA1.2.1004515625.1688841236&semt=ais" alt="" />
                </div>
                
                <div className="row m-0 d-flex">
                    {/* first section */}
                    <div className="col-12 col-md-4 p-0 text-center">
                        <h3>
                            آدرس ما:
                        </h3>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                        </p>
                    </div>
                    {/* second section */}
                    <div className="col-12 col-md-4 p-0 text-center">
                        <h3>
                            نماد های مورد اعتماد:
                        </h3>
                        <div className="w-100 mb-4">
                            <img className="Trustworthy_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhtlMZ9JIHkMFLWK80MGMUkuesl2ihCVnU2ubxlK8apsBeOZcy2TjihBZlPq5YFJyzhnY&usqp=CAU" alt="" />
                        </div>
                        <div className="w-100">
                            <img className="Trustworthy_img " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3YIEf76rjoV5QwQFDR0FqoWmvA-NkuL8TzEPkjQFx45FhkTrTWeZoqWGOfoVQfgZd4zM&usqp=CAU" alt="" />

                        </div>
                    </div>
                    {/* third section */}
                    <div className="col-12 col-md-4 p-0 text-center">
                        <h4>
                            با ما در شبکه های اجتماعی همراه باشید:
                        </h4>
                        <a className="a_footer" href="https://www.instagram.com"><i className="fab fa-instagram fs-1 m-2 text-dark"></i></a>
                        <a className="a_footer" href="https://www.facebook.com"><i className="fab fa-facebook fs-1 m-2 text-dark"></i></a>
                        <a className="a_footer" href="https://www.telegram.com"><i className="fab fa-telegram fs-1 m-2 text-dark"></i> </a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer