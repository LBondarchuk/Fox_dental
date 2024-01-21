import CustomModal from '../modal/Modal';
import st from './ServiseModal.module.scss';

const ServiseModal = ({ show, setShow, header = '' }) => {
  return (
    <div className={st.container}>
      <CustomModal setShow={setShow} show={show} header={header} isServise>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatem, aliquid
        excepturi earum eligendi suscipit alias maxime, sunt repudiandae hic libero optio quaerat
        incidunt officiis fugiat quae. Placeat, et deleniti. Temporibus necessitatibus iste tempora!
        Necessitatibus quisquam architecto, maxime tempore veritatis autem nihil, molestiae debitis
        adipisci culpa magni fuga laboriosam libero dolore, natus ipsam. Totam facere deleniti
        explicabo magnam a nihil! Ipsum cumque dicta quae tempora! Saepe praesentium, officiis nemo
        dicta aliquam dolorem itaque, consequatur laboriosam autem velit similique excepturi quo
        illo neque. Odit nisi dolorum quaerat itaque repudiandae, id quia? Minima quia suscipit amet
        expedita nemo vel a facere. Quia repellendus rerum ducimus corporis quaerat nisi doloremque
        voluptatem rem hic harum, ex, id libero omnis deleniti veniam nesciunt esse veritatis. Minus
        velit excepturi facere asperiores sed similique fuga nobis! Debitis, numquam quos facere
        labore aut quibusdam voluptate impedit ipsam itaque neque nobis repellat doloribus,
        molestias, qui illo modi necessitatibus dicta?
      </CustomModal>
    </div>
  );
};

export default ServiseModal;
