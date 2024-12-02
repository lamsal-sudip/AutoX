import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { vehicles } from '../data/vehicles';
import { formatPrice } from '../utils/currency';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeroSwiper() {
  return (
    <Swiper
      spaceBetween={0}
      centeredSlides={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]"
    >
      {vehicles.map((vehicle) => (
        <SwiperSlide key={vehicle.id}>
          <div className="relative w-full h-full">
            <img
              src={vehicle.image}
              alt={vehicle.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center p-4">
              <div className="text-center text-white">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">{vehicle.name}</h2>
                <p className="text-lg sm:text-xl mb-2">{vehicle.make} {vehicle.model}</p>
                <p className="text-xl sm:text-2xl font-semibold">Starting from {formatPrice(vehicle.price)}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}