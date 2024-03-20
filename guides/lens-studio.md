# Lab: Make your first Lens using Lens Studio

## Step 1: Creating a Face Mesh
1. Open Lens Studio 4.55.1
2. Create new Project
3. In the preview panel (right) change the preview to use your webcam instead of a pre-recorded video
4. In the scene hierarchy panel (top left), click + and search for "face mesh".
5. Click on Face Mesh to add it to your scene
6. Observe that a default (grey) face mesh is already applied to your face, also observe that Face Mesh assets have been added to the Resources panel (bottom left)
7. Click on "Face Mesh Default" in Resources Panel, look at the Inspector panel and observe that properties for Face Mesh are now available in this panel

8. Play around with properties such as "Base color", "Metallic", "Roughness", "Texture", until you're happy with your face mesh.

## Step 2: Importing from the Asset Library
1. On the resources panel (bottom left), click "+" and select "Asset Library"
2. The Asset Library consists of a library of thousands of assets created by members of the Lens Studio community and made available to you
3. Select the option "3D" and navigate through the assets. Choose any asset that can be used as a hat. I recommend the assets "Leprechaun Hat (by Hama Gardy)" or "Christmas Hat (by DevCrew I/O)"
4. Drag the imported asset from the assets folder into the the objects panel. Note that the imported asset has the string `"_PLACE_UNDER_MAIN_CAMERA"` appended to its title. Asset creators usually give us hints on the best way to import their assets when naming them. Let's take the hat and place under the main camera. This should place it correctly in the head of the user, with a nice occluder that hides away parts of the digital hat that are behind the user's face. 

5. Your lens should now be looking like this:
## Step 3: Publish your Lens
1. Now that your lens is ready, click on Project Info (top left). Here you will fill information about your Lens such as name, category, etc.
2. Click on the preview video rectangle to add a video preview of your Lens. Lens Studio can create video previews by applying your lens to pre-recorded videos. Optionally, you can record something yourself and upload the video with the lens applied.
3. Optionally, you can also create a new icon for your lens. 
4. Once you're happy with all the information, click "Apply"
5. Now that the project info is set up, it's time to upload your Lens. Click "Publish Lens" (top left). After a few seconds you should be prompted to select a lens folder in the browser. 
6. Click on "Create a new Lens folder" and choose a name for your new folder
7. Select the newly created folder in the dropdown and click on "+Submit Lens"
8. Select categories and tags (optionally) and finally click on "Publish to Snapchat"
9. Choose a visibility: Do you want your lens to be available to all Snapchatters? Choose "Public". Do you want your lens to only be available in your app? Choose "Hidden"
10. Click on Publish to Snapchat.

11. For a few minutes, your Lens will be under review. This is an automated process that will check for bugs, crashes and potential violations of content. You can check the status of the review in the [My Lenses portal](https://my-lenses.snapchat.com/)

## That's it!
You are now familiar with Lens Studio and have published your first lens. Next, let's learn how to embed that lens into your own web application with Camera Kit. 

Next: [Camera Kit Guide](./camera-kit.md)

