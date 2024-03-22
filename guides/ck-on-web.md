# Building an AR Website with Camera Kit

1. Open the file [`main.ts`](../src/main.ts) in your text editor

2. Replace the placeholders `<YOUR API TOKEN>` , `<YOUR LENS ID>`, `<YOUR LENS GROUP ID>` with values that you got from the Camera Kit Portal

3. Save both files and in your terminal navigate to this project and execute 

```
> npm run ck-build
```

This will resolve all Camera Kit dependencies and build a demo website that will be available in your `dist/` folder. You check it out at [http://localhost:1234](http://localhost:1234)


## That's it!

You now have built a website that runs a lens built with Lens Studio!
You can now publish this website to your portfolio. Or maybe you can build an augmented reality project for a client. How about using 3D Body tracking to build a dancing game that runs on the browser and doesn't need any installation?

## Digging deeper
This was a pre-built website and removed a lot of the setup complexities. If you want to build something from scratch, I recommend looking at [Camera Kit Web Documentation](https://docs.snap.com/camera-kit/integrate-sdk/web/web-configuration) and [Camera Kit Web Beginner Tutorial](https://docs.snap.com/camera-kit/guides/tutorials/web-tutorials/camera-kit-web-for-beginners)