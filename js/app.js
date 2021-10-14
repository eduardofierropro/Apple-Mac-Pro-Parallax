"use strict"


$(window).scroll( function(){

  //  Calcular el scroll que hace el usuario
  let pixel = $(window).scrollTop()

  //  Mostrar por consola ese scroll
  console.log( { pixel })

  // Asociar el scroll que hace el user con el tiempoActual del vídeo
  // https://www.w3schools.com/TAGs/av_prop_currenttime.asp
  macpro.currentTime = pixel / 1000 

})

