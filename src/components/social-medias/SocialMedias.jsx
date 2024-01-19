import Link from 'next/link';
import st from './SocialMedias.module.scss';
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai';

const SocialMedias = ({ style }) => {
  return (
    <div className={st.container}>
      <div className={st.sociall} style={style}>
        <Link href='https://www.facebook.com/FoxxxxDental/' target='blanc'>
          <div className={st.border}>
            <AiFillFacebook className={st.icon} />
          </div>
        </Link>
        <Link href='https://www.instagram.com/fox_dental_clinic/?r=nametag' target='blanc'>
          <div className={st.border}>
            {' '}
            <AiFillInstagram className={st.icon} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialMedias;
