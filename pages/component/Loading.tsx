import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <>
      <div className="loader" style={{ textAlign : "center" }}>
        <Image src={`/assets/images/misc/loader.gif`} alt="" width={300} height={300} />
      </div>
    </>
  );
};

export default Loading;
