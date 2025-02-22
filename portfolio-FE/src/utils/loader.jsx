import React from 'react';
import { DotLottiePlayer } from '@dotlottie/react-player';

function CircularLoader() {
  return (
    <div className="flex  justify-center items-center h-screen">
      <DotLottiePlayer className='w-72 h-72' src="https://lottie.host/b7591726-a9fb-4fc0-acb8-ccf9b8011b30/gEZenRzKuM.json" background="##ffffff" speed="1"  loop  autoplay direction="1" mode="normal"></DotLottiePlayer>
    </div>
  );
}
export default CircularLoader;