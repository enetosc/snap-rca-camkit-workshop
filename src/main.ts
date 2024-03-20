import { bootstrapCameraKit } from '@snap/camera-kit';

(async function () {
  const cameraKit = await bootstrapCameraKit({
    apiToken: 'eyJhbGciOiJIUzI1NiIsImtpZCI6IkNhbnZhc1MyU0hNQUNQcm9kIiwidHlwIjoiSldUIn0.eyJhdWQiOiJjYW52YXMtY2FudmFzYXBpIiwiaXNzIjoiY2FudmFzLXMyc3Rva2VuIiwibmJmIjoxNzEwOTQ4MDYwLCJzdWIiOiIyYjdiODEzNC01ZTNjLTQyN2QtYmMyMi1iMjc0OGY3Njc1ZTN-U1RBR0lOR34wMjk0NDc5MS0wYTJhLTRkNDktOWU4Zi01YjFhZThjZDJiMzcifQ.49WSmXKmerSgR2dsx_oIUqtN4YivwufekH2tMvHMd-A',
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
    '43281170875',
    '2e94689a-c9a3-441e-96c4-4489ca48d411'
  );

  await session.applyLens(lens);
})();