import React, { useRef } from 'react';

const MinionCard = ({id,name,classId,tier,powerText,cardImage}) => {
  const imageRef = useRef(null);
  
      const handleMouseMove = (e) => {
          const rect = imageRef.current.getBoundingClientRect();
          const x = e.clientX - rect.left; // x position within the element.
          const y = e.clientY - rect.top;  // y position within the element.
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = ((y - centerY) / centerY) * 10;
          const rotateY = ((x - centerX) / centerX) * -10;
          // perspective(200px) 越低幅度越大
          imageRef.current.style.transform = `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      };
  
      const handleMouseLeave = () => {
          imageRef.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
      };
      return (
          <div className="minion-card">
              <img
                  ref={imageRef}
                  src={cardImage}
                  alt="Minion Image"
                  style={{
                      
                      transition: 'transform 0.1s ease',
                      willChange: 'transform',
                      display: "block",
                      margin:"0 auto",
                      
                  }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
              />
              <h3 style={{ marginTop: "-20px", textAlign:"center"}}>{name}</h3>
              {/* <h4>ID:{id}</h4> */}
              {/* <p><strong>初始护甲:</strong> {armor}</p> */}
              {/* <p><strong>英雄技能:</strong></p> */}
              {/* <p><span
                  dangerouslySetInnerHTML={{ __html: heroPowerText }}
              /></p> */}
  
              {/* <img src={heroPowerImage} style={{width:"200px"}} alt="" /> */}
          </div>
      );
}

export default MinionCard