import React, {useState, useEffect} from 'react';
import { Modal,Row } from 'antd';
import './modal.css';

function ModalBlog({modalBlogVisible, close}) {
  const [visible, setVisible] = useState(modalBlogVisible)
  useEffect(() => {
    setVisible(modalBlogVisible)
  }, [modalBlogVisible])

  const handleOk = e => {
    console.log(e);
    close();
  };
  return (
    <Modal
        title=""
        visible={visible}
        onOk={handleOk}
        onCancel={close}
        width={1320}
    >
<div>
    <Row>
    <h1 className="h1 hmc">The Riser</h1>
    </Row>
    <div class='modalrow'>
        <div className="modalcard">
            <h1 className="h1 mcc">Fabric</h1>
            <p className='fpl mc'>100% Cotton.</p>
        </div>
        <div className="modalcard">
            <h1 className="h1 mcc">Care</h1>
            <p className='fpl mc'>Machine wash cold, with like colors, gentle cycle, do not bleach, line dry, cool iron if needed. </p>
        </div>
    </div>
</div>

    </Modal>
  );
}

export default ModalBlog;
