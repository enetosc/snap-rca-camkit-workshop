# Lab: Get set up with Camera Kit

## Step 1: Sign up for Camera Kit
1. Go to [this form](https://camera-kit.snapchat.com/request?lang=en-US) to sign up for Camera Kit

2. For learning purposes make sure that you fill out the information as displayed below:
    
    a. Is your request for prototyping and experimentation purposes? **Yes**

    b. Please select the vertical that best describes your business: **Education**

    c. Are you building on behalf of another business? **No**

    d. Will you be integrating Camera Kit into a hardware or physical installation (e.g. AR mirror)? **No**

3. In the following screen, login with your Snapchat account, and click **+ Create an Organization**. Check to confirm that you have read the above note and click Proceed. 


## Step 2: Create API Token and Lens Group in the Camera Kit Portal
After following the steps above, you should now be in the [Camera Kit portal](https://camera-kit.snapchat.com/). Follow the steps below to continue enabling your API Tokens

1. Click **Enable App** to create an application. 

2. In the following screen select Web and give your App a name, then click **Create App** 

3. Now you will see that your app has `API Tokens` for "demo", "staging" and "production" purposes. We will now ensure that your app has access to the lens you created previously

4. Click on **Lenses** (top-left), then select on **Lens Sources**  and click on **Add Lens Source** -> **Lens Folder**

5. From the list, select the Lens Folder where you saved your Lens in the first exercise and then confirm with **Add Sources**

6. Now select **Lens Groups** and click **New Lens Group** (top-right)

7. Name your new Lens Group and select the Lens you created previously ensuring that it's part of the group

8. When you click on the Lens Group you will notice that the group has a `Lens Group ID` and each lens has a `Lens ID`.


## Next steps
With the `API Token`, `Group ID` and `Lens ID` in hand, you now have everything you need to setup your web app.

Build your Camera Kit Web app by following the next step-by-step tutorial. [Lab: Building a Website with Camera Kit](./ck-on-web.md)