import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const S = () => {
    var settings = {
        dots: false,
        arrows: false,
        slidesToShow: 11,
        slidesToScroll: 1,
        vertical: true,
        speed: 2000,
        pauseOnHover: false,
        autoplay: true,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        verticalSwiping: true,
    };
    return (
        <><section className=' vh-100 bg-black d-flex  flex-column'>
            <div className=' d-flex h-100 flex-column flex-grow-1 justify-content-center '>
                <Slider {...settings} className="vertical_slider">
                    <div className="d-flex slick_slide align-items-center justify-content-center">
                        <p
                            className="mb-0 show_box my_12 text-center slider_text text_42 d-inline-block font_gilroy_semibold_italic lh_52 fst-italic"
                        //   onMouseOver={HANDLE_MOUSE_OVER}
                        //   onMouseOut={HANDLE_MOUSE_OUT}
                        //   onClick={HANDLE_SHOW}
                        >
                            SocialTensor
                        </p>
                    </div>
                    <div className="d-flex slick_slide align-items-center justify-content-center">
                        <p
                            className="mb-0 show_box my_12 text_42 lh_52 slider_text text-center d-inline-block font_gilroy_semibold_italic fst-italic"
                        //   onMouseOver={HANDLE_MOUSE_OVER}
                        //   onMouseOut={HANDLE_MOUSE_OUT}
                        //   onClick={HANDLE_SHOW}
                        >
                            Aperture
                        </p>
                    </div>
                    <div className="d-flex slick_slide align-items-center justify-content-center">
                        <p
                            className="mb-0 show_box my_12 text_42 lh_52 slider_text text-center d-inline-block font_gilroy_semibold_italic fst-italic"
                        //   onMouseOver={HANDLE_MOUSE_OVER}
                        //   onMouseOut={HANDLE_MOUSE_OUT}
                        //   onClick={HANDLE_SHOW}
                        >
                            Aperture
                        </p>
                    </div>
                    <div className="d-flex slick_slide align-items-center justify-content-center">
                        <p
                            className="mb-0 show_box my_12 text_42 lh_52 slider_text text-center d-inline-block font_gilroy_semibold_italic fst-italic"
                        //   onMouseOver={HANDLE_MOUSE_OVER}
                        //   onMouseOut={HANDLE_MOUSE_OUT}
                        //   onClick={HANDLE_SHOW}
                        >
                            NicheTensor
                        </p>
                    </div>
                    <div className="d-flex slick_slide align-items-center justify-content-center">
                        <p
                            className="mb-0 show_box my_12 text_42 lh_52 slider_text text-center d-inline-block font_gilroy_semibold_italic fst-italic"
                        //   onMouseOver={HANDLE_MOUSE_OVER}
                        //   onMouseOut={HANDLE_MOUSE_OUT}
                        //   onClick={HANDLE_SHOW}
                        >
                            THELASTONE
                        </p>
                    </div>
                    <div className="d-flex slick_slide align-items-center justify-content-center">
                        <p
                            className="mb-0 show_box my_12 text_42 lh_52 slider_text text-center d-inline-block font_gilroy_semibold_italic fst-italic"
                        //   onMouseOver={HANDLE_MOUSE_OVER}
                        //   onMouseOut={HANDLE_MOUSE_OUT}
                        //   onClick={HANDLE_SHOW}
                        >
                            INFINI
                        </p>
                    </div>
                    <div className="d-flex slick_slide align-items-center justify-content-center">
                        <p
                            className="mb-0 show_box my_12 text_42 lh_52 slider_text text-center d-inline-block font_gilroy_semibold_italic fst-italic"
                        //   onMouseOver={HANDLE_MOUSE_OVER}
                        //   onMouseOut={HANDLE_MOUSE_OUT}
                        //   onClick={HANDLE_SHOW}
                        >
                            INFINI
                        </p>
                    </div>
                    <div className="d-flex slick_slide align-items-center justify-content-center">
                        <p
                            className="mb-0 show_box my_12 text_42 lh_52 slider_text text-center d-inline-block font_gilroy_semibold_italic fst-italic"
                        //   onMouseOver={HANDLE_MOUSE_OVER}
                        //   onMouseOut={HANDLE_MOUSE_OUT}
                        //   onClick={HANDLE_SHOW}
                        >
                            INFINI
                        </p>
                    </div>
                    <div className="d-flex slick_slide align-items-center justify-content-center">
                        <p
                            className="mb-0 show_box my_12 text_42 lh_52 slider_text text-center d-inline-block font_gilroy_semibold_italic fst-italic"
                        //   onMouseOver={HANDLE_MOUSE_OVER}
                        //   onMouseOut={HANDLE_MOUSE_OUT}
                        //   onClick={HANDLE_SHOW}
                        >
                            INFINI
                        </p>
                    </div>
                    <div className="d-flex slick_slide align-items-center justify-content-center">
                        <p
                            className="mb-0 show_box my_12 text_42 lh_52 slider_text text-center d-inline-block font_gilroy_semibold_italic fst-italic"
                        //   onMouseOver={HANDLE_MOUSE_OVER}
                        //   onMouseOut={HANDLE_MOUSE_OUT}
                        //   onClick={HANDLE_SHOW}
                        >
                            INFINI
                        </p>
                    </div>
                    <div className="d-flex slick_slide align-items-center justify-content-center">
                        <p
                            className="mb-0 show_box my_12 text_42 lh_52 slider_text text-center d-inline-block font_gilroy_semibold_italic fst-italic"
                        //   onMouseOver={HANDLE_MOUSE_OVER}
                        //   onMouseOut={HANDLE_MOUSE_OUT}
                        //   onClick={HANDLE_SHOW}
                        >
                            INFINI
                        </p>
                    </div>
                </Slider>
            </div>
        </section>
        </>
    )
}

export default S