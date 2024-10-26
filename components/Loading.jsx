import React from 'react';

const Loading = () => {
  return (
    <div className="loading-screen fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          width: 35px;
          height: 80px;
          position: relative;
        }
        .loader:after {
          content: '';
          position: absolute;
          inset: 0;
          padding: 3px 5px;
          border-top: 1px solid #bbb6aa;
          border-bottom: 4px solid #bbb6aa;
          background:
            linear-gradient(#612329 0 0) bottom no-repeat content-box,
            #e4e0d7;
          mix-blend-mode: darken;
          animation: l1 1.5s infinite linear;
        }
        .loader:before {
          content: '';
          position: absolute;
          inset: -18px calc(50% - 2px) 8px;
          background: #eb6b3e;
          transform-origin: bottom;
          transform: rotate(8deg);
        }
        @keyframes l1 {
          0% {
            background-size: 100% 100%;
          }
          100% {
            background-size: 100% 5%;
          }
        }
      `}</style>
    </div>
  );
};

export default Loading;
