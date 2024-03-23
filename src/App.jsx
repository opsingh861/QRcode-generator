import QRCode from "easyqrcodejs";
import { useEffect } from "react";
import { useRef } from "react";
import panda from "./assets/panda.png";
import QrStyling from "./QRstyling";


function App() {
  var options_object = {
    text: "https://github.com/ushelp/EasyQRCodeJS",
    width: 256,
    height: 256,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.L, // L, M, Q, H (it means how much error correction you want, the higher the more reliable but the denser)
    dotScale: 1, // For body block, must be greater than 0, less than or equal to 1. default is 1 (size of the dots in the QR code)

    // ====== dotScale

    // dotScaleTiming: 1, // Dafault for timing block , must be greater than 0, less than or equal to 1. default is 1
    // dotScaleTiming_H: undefined, // For horizontal timing block, must be greater than 0, less than or equal to 1. default is 1
    // dotScaleTiming_V: undefined, // For vertical timing block, must be greater than 0, less than or equal to 1. default is 1

    // dotScaleA: 1, // Dafault for alignment block, must be greater than 0, less than or equal to 1. default is 1
    // dotScaleAO: undefined, // For alignment outer block, must be greater than 0, less than or equal to 1. default is 1
    // dotScaleAI: undefined, // For alignment inner block, must be greater than 0, less than or equal to 1. default is 1

    // ====== Quiet Zone

    quietZone: 50, // margin around the QR Code, default is 0 (kind of border)
    quietZoneColor: "rgba(255,0,0,0.9)", // colour of the margin, default is '#ffffff'


    // ====== Logo

    logo: panda, // Relative address, relative to `easy.qrcode.min.js`
    logoWidth: 80, // fixed logo width. default is `width/3.5`
    logoHeight: 80, // fixed logo height. default is `heigth/3.5`
    logoMaxWidth: undefined, // Maximum logo width. if set will ignore `logoWidth` value
    logoMaxHeight: undefined, // Maximum logo height. if set will ignore `logoHeight` value
    logoBackgroundColor: '#fffff', // Logo backgroud color, Invalid when `logBgTransparent` is true; default is '#ffffff'
    logoBackgroundTransparent: false, // Whether use transparent image, default is false


    // ====== Backgroud Image

    // backgroundImage: panda, // Background Image
    // backgroundImageAlpha: 0.9, // Background image transparency, value between 0 and 1. default is 1. 
    // autoColor: false, // Automatic color adjustment(for data block) 
    // // autoColorDark: "rgba(102, 255, 0, 0.9)", // Automatic color: dark CSS color (black part)
    // autoColorLight: "rgba(102, 255, 0, .7)", // Automatic color: light CSS color (white part)


    // ====== Colorful
    // === Posotion Pattern(Eye) Color
    // PO: '#e1622f', // Global Posotion Outer color. if not set, the defaut is `colorDark`
    // PI: '#aa5b71', // Global Posotion Inner color. if not set, the defaut is `colorDark`
    // PO_TL: '', // Posotion Outer color - Top Left 
    // PI_TL: '', // Posotion Inner color - Top Left 
    // PO_TR: '', // Posotion Outer color - Top Right 
    // PI_TR: '', // Posotion Inner color - Top Right 
    // PO_BL: '', // Posotion Outer color - Bottom Left 
    // PI_BL: '', // Posotion Inner color - Bottom Left 

    // === Alignment Color

    // AO: 'rgba(102,255,0,0.9)', // Alignment Outer. if not set, the defaut is `colorDark`
    // AI: 'rgba(102,255,0,0.9)', // Alignment Inner. if not set, the defaut is `colorDark`

    // === Timing Pattern Color

    // timing: '#e1622f', // Global Timing color. if not set, the defaut is `colorDark`
    // timing_H: '', // Horizontal timing color
    // timing_V: '', // Vertical timing color


    // ====== Title

    // title: 'QR Title', // content 
    // titleFont: "normal normal bold 18px Arial", //font. default is "bold 16px Arial"
    // titleColor: "#004284", // color. default is "#000"
    // titleBackgroundColor: "#fff", // background color. default is "#fff"
    // titleHeight: 70, // height, including subTitle. default is 0 (kind of margin or distance between them) / (high height means QR code will come down)
    // titleTop: 50, // draws y coordinates. default is 30 (titleHeight + titleTop = title position) / (high top means it will come closer to the QR Code)


    // ====== SubTitle

    // subTitle: 'QR subTitle', // content
    // subTitleFont: "normal normal normal 20px Arial", // font. default is "14px Arial"
    // subTitleColor: "#004284", // color. default is "4F4F4F"
    // subTitleTop: 300, // draws y coordinates. default is 0 

    // ===== Event Handler

    // onRenderingStart: undefined,
    // onRenderingEnd: undefined,


    // ===== Versions

    // version: 3, // The symbol versions of QR Code range from Version 1 to Version 40. default 0 means automatically choose the closest version based on the text length.


    // ===== Binary(hex) data mode
    /*
    binary: false, // Whether it is binary mode, default is text mode. 
    */

    // ===== Tooltip
    /*
    tooltip: false, // Whether set the QRCode Text as the title attribute value of the QRCode div
    */

    // ==== CORS
    // /*
    crossOrigin: "https://www.bing.com", // String which specifies the CORS setting to use when retrieving the image. null means that the crossOrigin attribute is not set.
    // */

    // =====  Drawing method
    /*
    drawer: 'canvas', // Which drawing method to use. 'canvas', 'svg'. default is 'canvas' (svg is more cleared and crisp)
    */

    // =====  UTF-8 without BOM
    /*
    utf8WithoutBOM: true
    */
  }

  const qrcodeRef = useRef(null);

  useEffect(() => {
    if (qrcodeRef.current) {
      // If QR code exists, remove it before creating a new one
      qrcodeRef.current.innerHTML = '';
    }

    new QRCode(qrcodeRef.current, options_object);

    // Cleanup function to remove QR code when component unmounts
    return () => {
      if (qrcodeRef.current) {
        qrcodeRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
      <div ref={qrcodeRef}></div>
      <QrStyling />
    </>
  )
}

export default App;
