import React, { useEffect, useRef } from "react";

const WebglComponent = () => {
  const webglRef = useRef(null);

  useEffect(() => {
    // 在组件挂载时执行一次
    const element = webglRef.current;
    // 执行你想要的操作，例如添加renderer.domElement到指定的DOM元素中
    element.appendChild(renderer.domElement);

    // 在组件卸载时执行清理操作
    return () => {
      element.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={webglRef} id="webgl"></div>;
};

export default WebglComponent;
