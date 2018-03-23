// @flow
export default () => (
  <div class="aui">
    <svg display="none" width="0" height="0" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <symbol id="caret" viewBox="0 0 7 12">
        <polyline fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="1.211,1 6.07,5.86 0.93,11 "></polyline>
      </symbol>
      <symbol id="closeIcon" viewBox="0 0 25.102 25.145">
        <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" d="M24.573 24.614L.53.572M.53 24.572L24.573.53"></path>
      </symbol>
      <symbol id="defaultUserIcon" viewBox="0 0 31.5 31.5">
        <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" d="M7.65 28.183c.47-2.558 2.126-4.7 4.377-5.84l-.09-.627c-2.383-1.33-3.993-3.877-3.993-6.798 0-4.297 3.483-7.78 7.78-7.78 4.294 0 7.776 3.483 7.776 7.78 0 2.888-1.573 5.408-3.91 6.75l-.157.677c2.317 1.17 4.008 3.41 4.416 6.074"></path>
        <circle fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" cx="15.75" cy="15.75" r="15"></circle>
        <path fill="none" d="M0 0h31.5v31.5H0z"></path>
      </symbol>
      <symbol id="externalLinkIcon" viewBox="0 0 10 10">
        <path stroke="currentColor" stroke-width="1.5" fill="none" d="M8.5 1.5l-8 8M8.996 6.997V1H3"></path>
      </symbol>
      <symbol id="facebookSocialIcon" viewBox="0 0 20 20">
        <path d="M18.9 0H1.1C.5 0 0 .5 0 1.1v17.8c0 .6.5 1.1 1.1 1.1h9.6v-7.7H8.1v-3h2.6V7c0-2.6 1.6-4 3.9-4 1.1 0 2.1.1 2.3.1v2.7h-1.6c-1.3 0-1.5.6-1.5 1.5v1.9h3l-.4 3h-2.6V20h5.1c.6 0 1.1-.5 1.1-1.1V1.1c0-.6-.5-1.1-1.1-1.1z"></path>
      </symbol>
      <symbol id="githubSocialIcon" viewBox="0 0 20 20">
        <path d="M10 0C4.5 0 0 4.5 0 10c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 2.9.9.1-.6.3-1.1.6-1.3-2.1-.3-4.5-1.2-4.5-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .9-.1 1.8-.3 2.6-.3s1.7.1 2.5.3c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.7-4.6 4.9.4.3.7.9.7 1.9v2.7c0 .3.2.6.7.5 4-1.3 6.8-5.1 6.8-9.5C20 4.5 15.5 0 10 0z"></path>
      </symbol>
      <symbol id="instagramSocialIcon" viewBox="0 0 20 20">
        <path d="M10 1.8c2.67 0 3 0 4 .06a5.53 5.53 0 0 1 1.86.34A3.1 3.1 0 0 1 17 3a3.1 3.1 0 0 1 .8 1.1 5.53 5.53 0 0 1 .34 1.9c0 1.05.06 1.37.06 4s0 3-.06 4a5.53 5.53 0 0 1-.34 1.86 3.31 3.31 0 0 1-1.9 1.9 5.53 5.53 0 0 1-1.86.34c-1.05 0-1.37.06-4 .06s-3 0-4-.06a5.53 5.53 0 0 1-1.94-.3A3.1 3.1 0 0 1 3 17a3.1 3.1 0 0 1-.8-1.1 5.53 5.53 0 0 1-.34-1.9c0-1.05-.06-1.37-.06-4s0-3 .06-4a5.53 5.53 0 0 1 .34-1.9A3.1 3.1 0 0 1 3 3a3.1 3.1 0 0 1 1.1-.8A5.53 5.53 0 0 1 6 1.86c1.05 0 1.37-.06 4-.06M10 0C7.28 0 6.94 0 5.88.06a7.34 7.34 0 0 0-2.43.46 4.9 4.9 0 0 0-1.77 1.16A4.9 4.9 0 0 0 .52 3.45a7.34 7.34 0 0 0-.46 2.43C0 6.94 0 7.28 0 10s0 3.06.06 4.12a7.34 7.34 0 0 0 .46 2.43 4.9 4.9 0 0 0 1.15 1.77 4.9 4.9 0 0 0 1.77 1.15 7.34 7.34 0 0 0 2.43.46C6.94 20 7.28 20 10 20s3.06 0 4.12-.06a7.34 7.34 0 0 0 2.43-.46 5.11 5.11 0 0 0 2.92-2.92 7.34 7.34 0 0 0 .46-2.43c0-1.07.06-1.41.06-4.12s0-3.06-.06-4.12a7.34 7.34 0 0 0-.46-2.43 4.9 4.9 0 0 0-1.15-1.77A4.9 4.9 0 0 0 16.55.52a7.34 7.34 0 0 0-2.43-.46C13.06 0 12.72 0 10 0z"></path>
        <path d="M10 4.86A5.14 5.14 0 1 0 15.14 10 5.14 5.14 0 0 0 10 4.86zm0 8.47A3.33 3.33 0 1 1 13.33 10 3.33 3.33 0 0 1 10 13.33z"></path>
        <circle cx="15.34" cy="4.66" r="1.2"></circle>
      </symbol>
      <symbol id="liferayLogo-liferay">
        <path d="M150.198 28.583c0-.416-.245-.623-.76-.623h-.826v2.182h.338v-.94h.346l.598.94h.352l-.623-.965c.32-.034.575-.197.575-.594zm-.91.35h-.338v-.705h.43c.226 0 .485.037.485.338 0 .353-.288.367-.576.367zm.038-1.74c-1.027 0-1.862.796-1.862 1.863 0 1.056.835 1.86 1.862 1.86 1.015 0 1.86-.805 1.86-1.86.002-1.067-.845-1.863-1.86-1.863zm0 3.45c-.855 0-1.532-.69-1.532-1.586 0-.904.677-1.595 1.532-1.595.853 0 1.53.69 1.53 1.595 0 .897-.677 1.587-1.53 1.587zM53.68 28.855h-7.59V6.685c0-.35.043-.723.122-1.108l.103-.49h-3.613l.103.49c.08.386.12.762.12 1.107v22.708c0 .322-.04.668-.12 1.03l-.108.495h12.448v-2.325l-.52.15c-.262.076-.58.113-.946.113zM61.17 29.335V6.665c0-.456.04-.81.112-1.053l.163-.526H57.78l.105.492c.08.375.12.74.12 1.087v22.67c0 .348-.04.714-.12 1.088l-.105.493h3.665l-.163-.527c-.073-.242-.112-.597-.112-1.055zM66.56 5.578c.08.375.122.734.122 1.07v22.687c0 .348-.042.714-.12 1.088l-.106.493h3.617l-.105-.493c-.08-.374-.12-.74-.12-1.088V18.69h6.312c.456 0 .846.04 1.16.117l.506.125V16.62l-.498.113c-.4.09-.78.137-1.133.137h-6.348V7.02h7.274c.446 0 .885.033 1.305.104l.474.078V5.085H66.455l.105.493zM92.683 16.76h-7.478V7.02h7.757c.332 0 .663.052.977.16l.54.185v-2.28H81.77l.156.523c.076.255.112.617.112 1.075v22.65c0 .345-.028.72-.087 1.113l-.07.47H94.5V28.6l-.47.076c-.858.133-1.19.17-1.29.178h-7.533v-10.27h7.514c.555 0 .99.026 1.296.082l.48.09v-2.317l-.52.15c-.382.113-.816.17-1.293.17zM135.777 29.413L127.06 5.976c-.053-.142-.097-.326-.13-.545l-.053-.344h-2.853l-.047.352c-.054.4-.108.59-.147.688l-8.4 23.282c-.05.126-.126.295-.22.498-.245-.18-.458-.364-.626-.547l-9.342-10.425c2.31-.25 4.126-.91 5.407-1.955 1.462-1.19 2.206-2.862 2.206-4.96 0-1.425-.407-2.714-1.207-3.83-.72-1.01-1.696-1.778-2.894-2.28-1.27-.546-2.733-.822-4.362-.822h-6.02l.106.492c.08.375.12.74.12 1.087v22.67c0 .348-.04.714-.12 1.088l-.107.493h3.618l-.103-.493c-.08-.373-.122-.74-.122-1.088v-9.664l8.968 10.1c.306.346.52.652.64.91l.11.235h5.722l.012-.396c.012-.477.064-.713.105-.825l2.66-7.283h9.815l2.676 7.27c.098.3.16.588.182.858l.032.375h3.972l-.403-.628c-.244-.38-.405-.673-.48-.877zm-6.73-8.824h-8.456l4.15-11.464 4.308 11.463zM101.766 7.02h1.76c1.746 0 3.1.325 4.025.97.643.447 1.15 1.044 1.513 1.772.366.734.55 1.542.55 2.402 0 1.925-.78 3.308-2.383 4.227-.994.562-2.116.846-3.334.846h-2.13V7.02zM148.546 5.085l-.09.286c-.09.295-.213.587-.358.865l-5.747 10.74-5.617-10.658c-.308-.604-.392-.842-.415-.93l-.08-.302h-3.975l.506.655c.145.19.32.48.517.86l6.783 12.775v9.958c0 .35-.04.715-.12 1.088l-.105.494h3.618l-.104-.493c-.08-.372-.123-.74-.123-1.087v-9.958l6.872-12.88c.14-.252.305-.51.49-.762l.476-.648h-2.53z"></path>
      </symbol>
      <symbol id="liferayLogo-logoBorder">
        <path d="M2.295 34.847c-.818 0-1.483-.666-1.483-1.483V2.638c0-.818.665-1.485 1.483-1.485H33.02c.818 0 1.484.667 1.484 1.485v30.726c0 .817-.666 1.483-1.483 1.483H2.296z"></path>
      </symbol>
      <symbol id="liferayLogo-gradientLightest">
        <path d="M33.944 33.364c0 .507-.416.923-.922.923H2.295c-.507 0-.922-.416-.922-.923V2.638c0-.507.415-.923.922-.923H33.02c.507 0 .923.416.923.923v30.726z"></path>
      </symbol>
      <symbol id="liferayLogo-gradientLight">
        <path d="M18.22 5.085h5.617V10.7H18.22zM4.744 18.563h5.616v5.615H4.744z"></path>
        <path d="M11.482 11.823h5.616v5.616h-5.616z"></path>
        <path d="M11.482 25.3h5.616v5.616h-5.616zM24.96 11.823h5.614v5.616H24.96z"></path>
        <path d="M18.22 18.563h5.615v5.615H18.22z"></path>
      </symbol>
      <symbol id="liferayLogo-gradientDark">
        <path d="M11.482 5.085h5.616V10.7h-5.616z"></path>
        <path d="M4.744 11.823h5.616v5.616H4.744z"></path>
        <path d="M18.22 25.3h5.615v5.616H18.22z"></path>
        <path d="M24.96 18.563h5.614v5.615H24.96z"></path>
      </symbol>
      <symbol id="liferayLogo-gradientDarkest">
        <path d="M4.744 5.085h5.616V10.7H4.744z"></path>
        <path d="M24.96 25.3h5.614v5.616H24.96z"></path>
      </symbol>
      <symbol id="linkedinSocialIcon" viewBox="0 0 20 20">
        <path d="M18.5 0h-17C.7 0 0 .6 0 1.4v17.1c0 .9.7 1.5 1.5 1.5h17c.8 0 1.5-.6 1.5-1.4V1.4c0-.8-.7-1.4-1.5-1.4zM5.9 17H3V7.5h3V17zM4.4 6.2c-1 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7c.9 0 1.7.8 1.7 1.7s-.7 1.7-1.7 1.7zM17 17h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.5V17h-3V7.5h2.8v1.3c.4-.8 1.4-1.5 2.8-1.5 3 0 3.6 2 3.6 4.5V17z"></path>
      </symbol>
      <symbol id="moreIcon" viewBox="-73.5 20.5 5.13 44">
        <circle fill="currentColor" cx="-70.935" cy="31.063" r="2"></circle>
        <circle fill="currentColor" cx="-70.935" cy="52.25" r="2"></circle>
        <circle fill="currentColor" cx="-70.935" cy="41.563" r="2"></circle>
      </symbol>
      <symbol id="searchIcon" viewBox="0 0 36 36">
        <circle fill="transparent" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" cx="15" cy="15" r="8"></circle>
        <path fill="transparent" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" d="M23.3 23.3L29 29"></path>
      </symbol>
      <symbol id="toggleCircle" viewBox="8 8 20 20">
        <ellipse fill="none" stroke="currentColor" stroke-width="1.5" stroke-miterlimit="10" cx="18" cy="18" rx="8" ry="8"></ellipse>
        <path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" d="M14 18h8M18 22v-8"></path>
      </symbol>
      <symbol id="twitterSocialIcon" viewBox="0 0 20 20">
        <path d="M20 3.8c-.7.3-1.5.5-2.4.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-.7-.8-1.8-1.3-3-1.3-2.3 0-4.1 1.8-4.1 4.1 0 .3 0 .6.1.9-3.4-.1-6.4-1.7-8.4-4.2C1 3.2.8 3.9.8 4.7c0 1.4.7 2.7 1.8 3.4-.6 0-1.2-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.4 1.1-3.2 1.8-5.1 1.8-.3 0-.7 0-1-.1 1.8 1.2 4 1.8 6.3 1.8 7.5 0 11.7-6.3 11.7-11.7v-.5c.9-.5 1.5-1.2 2.1-2z"></path>
      </symbol>
      <symbol id="youtubeSocialIcon" viewBox="0 0 20 20">
        <path d="M19.8 6s-.2-1.4-.8-2c-.8-.8-1.6-.8-2-.8-2.8-.2-7-.2-7-.2s-4.2 0-7 .2c-.4 0-1.2 0-2 .8-.6.6-.8 2-.8 2S0 7.6 0 9.2v1.5c0 1.7.2 3.3.2 3.3s.2 1.4.8 2c.8.8 1.8.8 2.2.9 1.6.1 6.8.1 6.8.1s4.2 0 7-.2c.4 0 1.2-.1 2-.8.6-.6.8-2 .8-2s.2-1.6.2-3.2V9.2c0-1.6-.2-3.2-.2-3.2zM7.9 12.6V7l5.4 2.8-5.4 2.8z"></path>
      </symbol>
    </svg>
    <svg viewBox="0 0 160 37">
      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#liferayLogo-liferay"></use>
      <use class="light-fill" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#liferayLogo-gradientLightest"></use>
      <use class="logo-border" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#liferayLogo-logoBorder"></use>
      <use class="logo-gradient-light" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#liferayLogo-gradientLight"></use>
      <use class="logo-gradient-dark" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#liferayLogo-gradientDark"></use>
      <use class="logo-gradient-darkest" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#liferayLogo-gradientDarkest"></use>
    </svg> 
  </div>
);