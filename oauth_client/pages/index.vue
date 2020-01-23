<template>
  <section class="container">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div style="margin-left: +30%; margin-right: +30%;">
      <div class="googleLogin" style="font-size: 23px; background-color: #ff5959; color: white; border-radius: 5px; padding: 20px 0px 20px; margin-bottom: 10px;">
        <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https%3A//www.googleapis.com/auth/drive.metadata.readonly&access_type=offline&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=https://client.org/callback&response_type=code&client_id=931210459156-99u373duhvq8h50n314p94b5jijccd26.apps.googleusercontent.com" style="color:white; text-decoration: none;">
          <span><i class="fa fa-google" style="font-size:25px; margin-right:15px; margin-left:5px"></i></span>
          <span>Login with Google</span>
        </a>  
      </div>
      <div class="facebookLogin" style="font-size: 23px; background-color: #4d7cff; color: white; border-radius: 5px; padding: 20px 0px 20px; margin-bottom: 10px;">
        <span><i class="fa fa-facebook" style="font-size:25px; margin-right:15px; margin-left:5px"></i></span>
        <span>Login with Facebook</span>
      </div>
      <div class="naverLogin" style="font-size: 23px; background-color: #1EC800; color: white; border-radius: 5px; padding: 20px 0px 20px; margin-bottom: 10px;">
        <span><img src="../assets/naver_icon.png" alt="My Image"  width="25" height="25" style="margin: 0px 5px -5px;"></span>
        <span>Login with NAVER</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {
  }
}
</script>

<style>
.container {
  margin-top: +20%;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: left;
}
</style>

