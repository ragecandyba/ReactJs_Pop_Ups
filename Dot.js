import React, { useState } from "react";
import { Button, Modal } from "antd";
import SimpleSlider from "./components/Slider";

const Dot = ({ name }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleDotClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <button
        type="button"
        style={{
          backgroundColor: "grey",
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          cursor: "pointer",
          border: "0",
        }}
        onClick={handleDotClick}
      />
      <Modal
        title={name}
        open={isModalVisible}
        width={400}
        onCancel={handleModalClose}
        footer={[
          <Button
            key="cancel"
            onClick={handleModalClose}
            style={{ borderRadius: "0" }}
          >
            ADD TO CART
          </Button>,
          <Button
            key="ok"
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "0",
            }}
            onClick={handleModalClose}
          >
            VIEW THIS PRODUCT
          </Button>,
        ]}
      >
        <div>
          <SimpleSlider title={name} />
        </div>
      </Modal>
    </>
  );
};

export default Dot;
