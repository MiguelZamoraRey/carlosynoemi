import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import Card from '../../components/Card';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import HourCard from '../../components/HourCard';
import { motion } from 'framer-motion';

function Landing() {
  return (
    <div className="min-h-[100vh] flex flex-col gap-3 items-center justify-center align-middle p-2 max-w-[900px] bg-[#397374]">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-4xl underline mb-4 mt-4"
      >
        ¡Gracias por venir!
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-4xl underline"
      >
        Disclaimer
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className=" text-xl"
      >
        Vamos a celebrar la boda en un sitio muy bonito y muy especial para
        nosotros. Como estamos a finales de septiembre es probable que a esas
        horas caiga bastante la temperatura. ¡Qué no cunda el pánico! Vamos a
        estar super agusto, pero como diría tu madre:
      </motion.p>
      <span className=" text-2xl">
        "¡Llévate una rebequita que por la noche refresca!"
      </span>
      <h1 className="text-4xl underline">Horario</h1>
      <span className=" text-xl">Enterate de cómo nos lo vamos a pasar</span>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <HourCard
            title="16:30"
            subtitle1="ACTIVIDAD"
            imageUrl="https://imgs.search.brave.com/DW8bmf2BFrOvy2ohZyYotlsjKxqwPM3JtqRch9uVolE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hYmVs/cnVlZGEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA0/L1Byb3RvY29sby1C/YWlsZS1Cb2RhMi5q/cGc"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies."
          />
        </SwiperSlide>
        <SwiperSlide>
          <HourCard
            title="18:00"
            subtitle1="ACTIVIDAD"
            imageUrl="https://imgs.search.brave.com/DW8bmf2BFrOvy2ohZyYotlsjKxqwPM3JtqRch9uVolE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hYmVs/cnVlZGEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA0/L1Byb3RvY29sby1C/YWlsZS1Cb2RhMi5q/cGc"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies."
          />
        </SwiperSlide>
        <SwiperSlide>
          <HourCard
            title="20:00"
            subtitle1="ACTIVIDAD"
            imageUrl="https://imgs.search.brave.com/DW8bmf2BFrOvy2ohZyYotlsjKxqwPM3JtqRch9uVolE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hYmVs/cnVlZGEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA0/L1Byb3RvY29sby1C/YWlsZS1Cb2RhMi5q/cGc"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies."
          />
        </SwiperSlide>
        <SwiperSlide>
          <HourCard
            title="22:00"
            subtitle1="ACTIVIDAD"
            imageUrl="https://imgs.search.brave.com/DW8bmf2BFrOvy2ohZyYotlsjKxqwPM3JtqRch9uVolE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hYmVs/cnVlZGEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA0/L1Byb3RvY29sby1C/YWlsZS1Cb2RhMi5q/cGc"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies."
          />
        </SwiperSlide>
        <SwiperSlide>
          <HourCard
            title="03:00"
            subtitle1="ACTIVIDAD"
            imageUrl="https://imgs.search.brave.com/DW8bmf2BFrOvy2ohZyYotlsjKxqwPM3JtqRch9uVolE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hYmVs/cnVlZGEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA0/L1Byb3RvY29sby1C/YWlsZS1Cb2RhMi5q/cGc"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec ultricies."
          />
        </SwiperSlide>
      </Swiper>
      <h1 className="text-4xl underline">Alojamientos</h1>
      <span className=" text-xl">
        Si queréis pasar la noche aquí os dejamos un montón de sitios
        estupendos:
      </span>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Card
            title="Finca Prados Riveros"
            subtitle1="Cno. Finca Prados Riveros"
            subtitle2="28741, Madrid"
            imageUrl="https://espaciospradosriveros.com/wp-content/uploads/2024/03/IMG_3174.jpg"
            description="Casa rural al lado de la finca, que se puede venir andando."
            link="https://espaciospradosriveros.com/"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Card
            title="La casa del farmaceutico"
            subtitle1="C/ Grande, 16"
            subtitle2="Alameda del Valle (Madrid)"
            imageUrl="https://webp.er2.co/es/madrid/5a097a80710b0/1600/5c02ea65ef54d.webp"
            description="casa grande de alquiler integro, muy bonita."
            link="https://www.escapadarural.com/casa-rural/madrid/la-casa-del-farmaceutico"
          />
        </SwiperSlide>
      </Swiper>
      <div className="p-2 flex flex-col gap-8">
        <span className="text-2xl">
          Os pedimos por favor que cualquier cambio nos lo notifiquéis lo antes
          posible
        </span>

        <span className="text-2xl pb-16">Nos vemos pronto</span>
      </div>
    </div>
  );
}

export default Landing;
