const { Router } = require("express");
const router = Router();

const webpush = require("../webpush");
let pushSubscripton;

// router.post("/subscription", async (req, res) => {
//   pushSubscripton = req.body;
//   console.log(pushSubscripton);

//   // Server's Response
//   res.status(201).json();
// });

// router.post("/new-message", async (req, res) => {
//   const { message } = req.body;
//   // Payload Notification
//   const payload = JSON.stringify({
//     title: "Nuevo Mensaje",
//     message 
//   });
//   res.status(200).json();
//   try {
//     await webpush.sendNotification(pushSubscripton, payload);
//   } catch (error) {
//     console.log(error);
//   }
// });

// router.post("/renovacion-demanda", async (req, res) => {
//     const { message } = req.body;
//     const suscripcion ={
//       endpoint:'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABl_VRs-FM-K2cw-pbv9V2y13Wusi6FzG8-jEFb485iQUCAdeu5FaSq8ozCR8RinjXJZjprfroWgofWooO1YQMuyv0RHWAB08uUwqHoO9XkdIqup80VCeRElg5vmqVV_KD1m9kgfiZR4tNsz_WMgwBgjDy6KTOU9Fhhlyy_YrmYQ0Y3Izo',
//       expirationTime: null,
//       keys:{
//         p256dh:'BGfEg2DUq9xxs-G2LjR10r0J7ozOZxcwtLADb_ovzB_32NFnOAd0cE9WqlGHPuip-Yf8TVt8oWTD2TqPs666lJA',
//         auth:'pwLA5Q2IsYkrs7aJoFV74w'
//       }
//     };

//     // Payload Notification
//     const payload = JSON.stringify({
//       title: "Renovación 2",
//       message 
//     });
//     res.status(200).json();
//     try {
      
//       await webpush.sendNotification(suscripcion, payload);
//     } catch (error) {
//       console.log(error);
//     }
//   });

//   router.post("/renovacion-demanda2", async (req, res) => {
//     const { message } = req.body;
//     const { title } = req.body;
    
//     const payload = JSON.stringify({
//       title,
//       message 
//     });

//     const suscripcion ={
//       endpoint:'https://updates.push.services.mozilla.com/wpush/v2/gAAAAABl_VRs-FM-K2cw-pbv9V2y13Wusi6FzG8-jEFb485iQUCAdeu5FaSq8ozCR8RinjXJZjprfroWgofWooO1YQMuyv0RHWAB08uUwqHoO9XkdIqup80VCeRElg5vmqVV_KD1m9kgfiZR4tNsz_WMgwBgjDy6KTOU9Fhhlyy_YrmYQ0Y3Izo',
//       expirationTime: null,
//       keys:{
//         p256dh:'BGfEg2DUq9xxs-G2LjR10r0J7ozOZxcwtLADb_ovzB_32NFnOAd0cE9WqlGHPuip-Yf8TVt8oWTD2TqPs666lJA',
//         auth:'pwLA5Q2IsYkrs7aJoFV74w'
//       }
//     };

    
//     res.status(200).json();
//     try {
      
//       await webpush.sendNotification(suscripcion, payload);
//     } catch (error) {
//       console.log(error);
//     }
//   });



  router.post("/enviar-mensaje", async (req, res) => {
    const { message } = req.body;
    const { title } = req.body;
    const { endpoint } = req.body;
    const { p256dh } = req.body;
    const { auth } = req.body;

    const payload = JSON.stringify({
      title,
      message 
    });

    const suscripcion ={
      endpoint,
      expirationTime: null,
      keys:{
        p256dh,
        auth
      }
    };

    try {
      await webpush.sendNotification(suscripcion, payload);
      res.status(200).json();
    } catch (error) {
      console.log(error);
      res.status(400).json();
    }
  });

module.exports = router;
