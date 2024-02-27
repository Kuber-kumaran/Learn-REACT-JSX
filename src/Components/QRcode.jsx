import React, { useState } from "react";

export const QRcode = () => {
   const [img, setImg] = useState("");
   const [loading, setLoading] = useState(false);
   const[qrData, setQrData] = useState("");
   const[qrSize, setQrSize] = useState("150");
   

 async function generateQR () { 
    setLoading(true);
    try {
        const url = `https://api.qrserver.com/v1/create-qr-code/?
        size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
        setImg(url)
    } catch (error) {  
        console.log("Error generating QR code", error); 
    } finally {
        setLoading(false);
    }
   };

   function downloadQR () {
    fetch(img)
    .then((Response) => Response.blob())
    .then((blob) => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
   }

  return (
    <div className="app-container">
      <h1>QR CODE GENERATOR</h1>
     {loading &&  <p className="loading">Please Wait...</p>}
      {img && <img src={img} alt="" className="qr-code-image"/>
}
      <div>
        <label htmlFor="dataInput" className="input-label">
          Data for QR code:
        </label>
        <input
          type="text"
          value={qrData}
          id="dataInput"
          placeholder="Enter data for QR code"
          onChange={(e)=>setQrData (e.target.value)}
        />
        <label htmlFor="sizeInput" className="input-label">
          Image size (e.g., 150):
        </label>
        <input type="text" id="sizeInput" value={qrSize} onChange={(e)=>setQrSize (e.target.value)} placeholder="enter image size" />
        <button className="generate-Button" disabled={loading} onClick={generateQR}>Generate QR code</button>
        <button className="download-button" onClick={downloadQR} >Download QR code</button>
      </div>
      <p className="footer">
        Designed by <a href="">Rohit Kuber</a>
      </p>
    </div>
  );
};
