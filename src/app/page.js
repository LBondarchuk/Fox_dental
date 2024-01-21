import WhyWe from '@/components/homePageComponents/why-we/WhyWe';
import About from '../components/homePageComponents/about/About';
import Banner from '../components/homePageComponents/banner/Banner';
import st from './page.module.css';
import Servises from '../components/homePageComponents/servises/Servises';
import Location from '../components/homePageComponents/location/Location';
import MobileEnter from '../components/homePageComponents/mobile-enter/MobileEnter';
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
