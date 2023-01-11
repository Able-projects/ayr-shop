import React, {useState, useEffect} from 'react';
import { Modal,Row } from 'antd';
import './modal.css';

function SizeModalBlog({modalBlogVisible, close}) {
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
            <div className="sizediv">
                <h4 className="sizeh4">Size</h4>
                <h4 className="sizeh4">XS</h4>
                <h4 className="sizeh4">S</h4>
                <h4 className="sizeh4">M</h4>
                <h4 className="sizeh4">L</h4>
                <h4 className="sizeh4">XL</h4>
                <h4 className="sizeh4">1X</h4>
                <h4 className="sizeh4">2X</h4>
                <h4 className="sizeh4">3X</h4>
            </div>
            <div className="sizediv">
                <h4 className="sizeh4">Bust</h4>
                <h4 className="sizeh4">31"</h4>
                <h4 className="sizeh4">33"</h4>
                <h4 className="sizeh4">35"</h4>
                <h4 className="sizeh4">37"</h4>
                <h4 className="sizeh4">40"</h4>
                <h4 className="sizeh4">44"</h4>
                <h4 className="sizeh4">48"</h4>
                <h4 className="sizeh4">52"</h4>
            </div>
            <div className="sizediv">
                <h4 className="sizeh4">Waist</h4>
                <h4 className="sizeh4">24"</h4>
                <h4 className="sizeh4">26"</h4>
                <h4 className="sizeh4">28"</h4>
                <h4 className="sizeh4">30"</h4>
                <h4 className="sizeh4">33"</h4>
                <h4 className="sizeh4">37"</h4>
                <h4 className="sizeh4">40"</h4>
                <h4 className="sizeh4">43"</h4>
            </div>
        </div>
        <div className="modalcard">
            <h1 className="h1 mcc">Fit</h1>
            <p className='fpl mc'>Fit is true to size, but it's meant to be oversized - if you are more petite in the shoulders/frame, feel free to size down. Slouchy fit means you can't really go wrong :). </p>
        </div>
    </div>
</div>

    </Modal>
  );
}

export default SizeModalBlog;
