import React from 'react';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./SwipStyle.css";

const Swiperslid = () => {
    return (
        <div className='container w-50 '>
            <h2 className='font-serif text-gray-500'>Consumer Reviews 
            </h2>

            <div style={{ height: 330 }} className='text-black my-3'>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div class="card-body text-center bg-gray-700 ">
                            <div class="avatar mx-auto ">
                                <div class="w-24 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=92310" />
                                </div>
                            </div>
                            <h2 class="card-title mx-auto text-gray-300">Marina</h2>
                            <p className='text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nostrum voluptas facere facilis vel ipsam.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='item2' class="card-body text-center bg-gray-700 ">
                            <div class="avatar mx-auto">
                                <div class="w-24 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=47449" />
                                </div>
                            </div>
                            <h2 class="card-title mx-auto text-gray-300">Jhon</h2>
                            <p className='text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nostrum voluptas facere facilis vel ipsam.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='item2' class="card-body text-center bg-gray-700 ">
                            <div class="avatar mx-auto">
                                <div class="w-24 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=28212" />
                                </div>
                            </div>
                            <h2 class="card-title mx-auto text-gray-300">Erik</h2>
                            <p className='text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nostrum voluptas facere facilis vel ipsam.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='item2' class="card-body text-center bg-gray-700 ">
                            <div class="avatar mx-auto">
                                <div class="w-24 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=4818" />
                                </div>
                            </div>
                            <h2 class="card-title mx-auto text-gray-300">Smith</h2>
                            <p className='text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nostrum voluptas facere facilis vel ipsam.
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id='item2' class="card-body text-center bg-gray-700 ">
                            <div class="avatar mx-auto">
                                <div class="w-24 rounded-full">
                                    <img src="https://api.lorem.space/image/face?hash=26448" />
                                </div>
                            </div>
                            <h2 class="card-title mx-auto text-gray-300">Nelsin</h2>
                            <p className='text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci nostrum voluptas facere facilis vel ipsam.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Swiperslid;