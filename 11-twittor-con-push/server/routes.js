// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const push = require('./push');


const mensajes = [

  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'Hola Mundo'
  }

];


// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});


// Post mensaje
router.post('/', function (req, res) {
  
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

  mensajes.push( mensaje );

  console.log(mensajes);


  res.json({
    ok: true,
    mensaje
  });
});


// Guardar suscripción
router.post('/subscribe', (req, res) => {
  const suscripcion = req.body;
  console.log(suscripcion);
  push.addSubscription(suscripcion);
  res.json('suscribe');
});

// Guardar suscripción
router.get('/key', (req, res) => {
  const key = push.getKey();
  res.send(key);
});

// Enviar notificacion push a las personas que queramos
// Esto es algo que se controla del lado del servidor
router.post('/push', (req, res) => {
  const post = {
    titulo: req.body.titulo,
    cuerpo: req.body.cuerpo,
    usuario: req.body.usuario
  }
  res.json(post);
  push.sendPush(post);
});


module.exports = router;
