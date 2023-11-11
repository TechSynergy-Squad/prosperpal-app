import React, { useState } from "react";
//import { QrReader } from "react-qr-reader";

export const QRScanner = () => {
  const [data, setData] = useState("No result");

  return (
    <>
      {/*  <QrReader
        className="w-1/2 h-1/2"
        onResult={(result, error) => {
          if (!!result) {
            setData(result.getText());
          }

          if (!!error) {
            console.info(error);
          }
        }}
        constraints={{ facingMode: "user" }}
      /> */}
      <p className="text-red text-xs">{data}</p>
    </>
  );
};
