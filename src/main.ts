import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: '<YOUR API TOKEN>',
  });
  const liveRenderTarget = document.getElementById(
    'canvas'
  ) as HTMLCanvasElement;
  const session = await cameraKit.createSession({ liveRenderTarget });
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  await session.setSource(mediaStream);
  await session.play();

  const lens = await cameraKit.lensRepository.loadLens(
    '<YOUR LENS ID>',
    '<YOUR LENS GROUP ID>'
  );

  await session.applyLens(lens);
})();