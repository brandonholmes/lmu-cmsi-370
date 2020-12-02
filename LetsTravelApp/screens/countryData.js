/*
Includes data from all the countries we 
want to include, acting as a backend for our 
application.  When we navigate the app, using 
USA, or Canada, it will change the information
based on this backend object we created.
*/

import mexicoImage from "../assets/mexicoImage.png";
import canadaImage from "../assets/canadaImage.png";
import usaImage from "../assets/usaImage.png";

const countryData = {
  "United States": {
    name: "USA",
    safetyTips: {
      summary:
        'Loresm ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper, sem vitae pharetra interdum, felis arcu porttitor nisl, ac vulputate massa diam eu neque. Quisque at ligula ac elit porttitor imperdiet. Sed in lectus interdum, aliquet metus nec, sagittis sem. Nunc pharetra a nunc sed elementum. Nam congue sollicitudin mauris, nec egestas risus pulvina.Ut tristique accumsan libero, quis vestibulum lacus fermentum ut.",',
      recTrans: ["Train", "Cab", "Rental Car"],
      lodging:
        "Quis vestibulum lacus fermentum ut. Etiam enim leo, lobortis in risus ac, fringilla fringilla orci. Cras non sagittis nulla, at eleifend arcu. Nam imperdiet ex id elit ultrices, quis gravida metus elementum. Vivamus ante elit, rhoncus at congue non, posuere a magna.",
    },
    Do:
      'Loresm ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper, sem vitae pharetra interdum, felis arcu porttitor nisl, ac vulputate massa diam eu neque. Quisque at ligula ac elit porttitor imperdiet. Sed in lectus interdum, aliquet metus nec, sagittis sem. Nunc pharetra a nunc sed elementum. Nam congue sollicitudin mauris, nec egestas risus pulvina.Ut tristique accumsan libero, quis vestibulum lacus fermentum ut.",',
    Dont:
      "Quis vestibulum lacus fermentum ut. Etiam enim leo, lobortis in risus ac, fringilla fringilla orci. Cras non sagittis nulla, at eleifend arcu. Nam imperdiet ex id elit ultrices, quis gravida metus elementum. Vivamus ante elit, rhoncus at congue non, posuere a magna.",
    dollarSymbol: "$",
    exchange: {
      Mexico: 20.17,
      Canada: 1.31,
    },
    Interest:
      "Loresm ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper, sem vitae pharetra interdum, felis arcu porttitor nisl, ac vulputate massa diam eu neque. Quisque at ligula ac elit porttitor imperdiet. Sed in lectus interdum, aliquet metus nec, sagittis sem. Nunc pharetra a nunc sed elementum. Nam congue sollicitudin mauris, nec egestas risus pulvina.Ut tristique accumsan libero, quis vestibulum lacus fermentum ut.",
    Image: usaImage,
  },
  Mexico: {
    name: "Mexico",
    safetyTips: {
      summary:
        'Loresm ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper, sem vitae pharetra interdum, felis arcu porttitor nisl, ac vulputate massa diam eu neque. Quisque at ligula ac elit porttitor imperdiet. Sed in lectus interdum, aliquet metus nec, sagittis sem. Nunc pharetra a nunc sed elementum. Nam congue sollicitudin mauris, nec egestas risus pulvina.Ut tristique accumsan libero, quis vestibulum lacus fermentum ut.",',
      recTrans: ["Train", "Cab", "Rental Car"],
      lodging:
        "Quis vestibulum lacus fermentum ut. Etiam enim leo, lobortis in risus ac, fringilla fringilla orci. Cras non sagittis nulla, at eleifend arcu. Nam imperdiet ex id elit ultrices, quis gravida metus elementum. Vivamus ante elit, rhoncus at congue non, posuere a magna.",
    },
    Do:
      'Loresm ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper, sem vitae pharetra interdum, felis arcu porttitor nisl, ac vulputate massa diam eu neque. Quisque at ligula ac elit porttitor imperdiet. Sed in lectus interdum, aliquet metus nec, sagittis sem. Nunc pharetra a nunc sed elementum. Nam congue sollicitudin mauris, nec egestas risus pulvina.Ut tristique accumsan libero, quis vestibulum lacus fermentum ut.",',
    Dont:
      "Quis vestibulum lacus fermentum ut. Etiam enim leo, lobortis in risus ac, fringilla fringilla orci. Cras non sagittis nulla, at eleifend arcu. Nam imperdiet ex id elit ultrices, quis gravida metus elementum. Vivamus ante elit, rhoncus at congue non, posuere a magna.",
    dollarSymbol: "$",
    exchange: {
      USA: 0.76,
      Canada: 15.41,
    },
    Interest:
      "Loresm ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper, sem vitae pharetra interdum, felis arcu porttitor nisl, ac vulputate massa diam eu neque. Quisque at ligula ac elit porttitor imperdiet. Sed in lectus interdum, aliquet metus nec, sagittis sem. Nunc pharetra a nunc sed elementum. Nam congue sollicitudin mauris, nec egestas risus pulvina.Ut tristique accumsan libero, quis vestibulum lacus fermentum ut.",
    Image: mexicoImage,
  },
  Canada: {
    name: "Canada",
    safetyTips: {
      summary:
        'Loresm ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper, sem vitae pharetra interdum, felis arcu porttitor nisl, ac vulputate massa diam eu neque. Quisque at ligula ac elit porttitor imperdiet. Sed in lectus interdum, aliquet metus nec, sagittis sem. Nunc pharetra a nunc sed elementum. Nam congue sollicitudin mauris, nec egestas risus pulvina.Ut tristique accumsan libero, quis vestibulum lacus fermentum ut.",',
      recTrans: ["Train", "Cab", "Rental Car"],
      lodging:
        "Quis vestibulum lacus fermentum ut. Etiam enim leo, lobortis in risus ac, fringilla fringilla orci. Cras non sagittis nulla, at eleifend arcu. Nam imperdiet ex id elit ultrices, quis gravida metus elementum. Vivamus ante elit, rhoncus at congue non, posuere a magna.",
    },
    Do:
      'Loresm ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper, sem vitae pharetra interdum, felis arcu porttitor nisl, ac vulputate massa diam eu neque. Quisque at ligula ac elit porttitor imperdiet. Sed in lectus interdum, aliquet metus nec, sagittis sem. Nunc pharetra a nunc sed elementum. Nam congue sollicitudin mauris, nec egestas risus pulvina.Ut tristique accumsan libero, quis vestibulum lacus fermentum ut.",',
    Dont:
      "Quis vestibulum lacus fermentum ut. Etiam enim leo, lobortis in risus ac, fringilla fringilla orci. Cras non sagittis nulla, at eleifend arcu. Nam imperdiet ex id elit ultrices, quis gravida metus elementum. Vivamus ante elit, rhoncus at congue non, posuere a magna.",
    dollarSymbol: "$",
    exchange: {
      Mexico: 15.39,
      USA: 0.77,
    },
    Interest:
      "Loresm ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper, sem vitae pharetra interdum, felis arcu porttitor nisl, ac vulputate massa diam eu neque. Quisque at ligula ac elit porttitor imperdiet. Sed in lectus interdum, aliquet metus nec, sagittis sem. Nunc pharetra a nunc sed elementum. Nam congue sollicitudin mauris, nec egestas risus pulvina.Ut tristique accumsan libero, quis vestibulum lacus fermentum ut.",
    Image: canadaImage,
  },
};

export { countryData };
