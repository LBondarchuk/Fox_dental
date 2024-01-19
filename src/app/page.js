import WhyWe from '@/components/why-we/WhyWe';
import About from '../components/about/About';
import Banner from '../components/banner/Banner';
import st from './page.module.css';
import Servises from '../components/servises/Servises';
import Location from '../components/location/Location';
import MobileEnter from '../components/mobile-enter/MobileEnter';
export default function Home() {
  return (
    <div className={st.container}>
      <MobileEnter />
      <Banner />
      <About />
      <WhyWe />
      <Servises />
      <Location />
    </div>
  );
}
