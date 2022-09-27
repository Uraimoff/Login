import { Button, Modal } from 'antd';
import React, { useState } from 'react';
import "./style.css"


const Modall = ({children, setVisible}:any) => {
    const [loading, setLoading] = useState(false);

    const showModal = () => {
        setVisible(true);
      };
    
   
    
      return (
        <>
          
          <Modal
            visible={true}
            mask={true}
            centered={true}
            footer={null}
            closable={false}
            
            
           
          >
            <div>{children}</div>
          </Modal>
        </>
      );
    };
    
    export default Modall;