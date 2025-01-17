import * as React from "react";
import Svg, { Path, G, Defs, ClipPath } from "react-native-svg";

export const NotificationIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      d="M25.455 20.364h-1.273V10.182C24.182 4.568 19.614 0 14 0 8.386 0 3.818 4.568 3.818 10.182v10.182H2.545a1.272 1.272 0 1 0 0 2.545H8.91A5.096 5.096 0 0 0 14 28a5.096 5.096 0 0 0 5.09-5.09H25.456a1.272 1.272 0 1 0 0-2.546ZM14 25.454a2.548 2.548 0 0 1-2.545-2.545h5.09A2.548 2.548 0 0 1 14 25.455Zm7.636-5.09H6.364V10.182c0-4.212 3.425-7.637 7.636-7.637s7.636 3.425 7.636 7.637v10.182Z"
    />
  </Svg>
);

export const SearchIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="m27.105 25.504-6.664-6.931a11.269 11.269 0 0 0 2.653-7.268C23.094 5.072 18.022 0 11.789 0 5.555 0 .484 5.072.484 11.305S5.555 22.61 11.789 22.61c2.34 0 4.57-.706 6.476-2.046l6.715 6.984c.28.291.658.452 1.063.452a1.476 1.476 0 0 0 1.063-2.496ZM11.79 2.949c4.607 0 8.356 3.748 8.356 8.356 0 4.607-3.749 8.356-8.356 8.356-4.608 0-8.356-3.749-8.356-8.356 0-4.608 3.748-8.356 8.356-8.356Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h28v28H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const ArrowIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#000"
        d="M10.5 0 8.643 1.857l7.33 7.33H0v2.626h15.973l-7.33 7.33L10.5 21 21 10.5 10.5 0Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h21v21H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const HomeIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <G clipPath="url(#b)">
        <Path
          fill={props.color}
          d="M28.785 12.123 15.87.283a1.077 1.077 0 0 0-1.477.02l-12.2 11.841a1.077 1.077 0 0 0-.326.773v17.007c0 .594.482 1.076 1.076 1.076h8.97c.595 0 1.076-.482 1.076-1.076V22.03h5.024v7.894c0 .594.481 1.076 1.076 1.076h8.97c.594 0 1.076-.482 1.076-1.076V12.917c0-.302-.126-.59-.349-.794Zm-1.803 16.724h-6.818v-7.893c0-.595-.482-1.077-1.076-1.077h-7.176c-.594 0-1.076.482-1.076 1.077v7.893H4.019V13.372L15.162 2.556l11.82 10.834v15.457Z"
        />
      </G>
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color} d="M0 0h31v31H0z" />
      </ClipPath>
      <ClipPath id="b">
        <Path fill={props.color} d="M0 0h31v31H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const WalletIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}>
    <G fill={props.color} clipPath="url(#a)">
      <Path d="M28.165 7.743h-.386V3.998a2.838 2.838 0 0 0-2.835-2.836H4.38a4.383 4.383 0 0 0-4.357 3.95C-.01 5.267.002 3.873.002 25.46a4.382 4.382 0 0 0 4.377 4.378h23.786A2.838 2.838 0 0 0 31 27.002V10.58a2.838 2.838 0 0 0-2.835-2.836ZM4.38 3.11h20.564c.49 0 .888.398.888.888v3.745H4.38a2.433 2.433 0 0 1-2.428-2.316A2.433 2.433 0 0 1 4.38 3.11Zm23.785 24.78H4.38c-1.34 0-2.43-1.09-2.43-2.43V8.953a4.352 4.352 0 0 0 2.43.738h23.785c.49 0 .887.398.887.888v3.947h-7.327a4.531 4.531 0 0 0-4.526 4.526 4.531 4.531 0 0 0 4.526 4.526h7.327v3.424c0 .49-.398.888-.887.888Zm.887-6.26h-7.327a2.581 2.581 0 0 1-2.579-2.578 2.581 2.581 0 0 1 2.579-2.578h7.327v5.157Z" />
      <Path d="M22.084 20.463a1.411 1.411 0 1 0 0-2.822 1.411 1.411 0 0 0 0 2.822Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color} d="M0 0h31v31H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const OfferIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}>
    <G fill={props.color} clipPath="url(#a)">
      <Path
        stroke={props.color}
        strokeWidth={0.3}
        d="M26.318.168A1.086 1.086 0 0 0 25.27.106L22 1.66 18.697.104a1.086 1.086 0 0 0-.93.002l-3.27 1.555L11.195.105a1.088 1.088 0 0 0-.93.001L6.996 1.66 3.73.107a1.086 1.086 0 0 0-1.554.982v26.824c0 .6.486 1.087 1.087 1.087h22.474c.601 0 1.087-.487 1.087-1.087V1.088c0-.374-.19-.72-.506-.92Zm-1.669 26.657H4.35V2.81l2.18 1.037c.295.14.638.14.934 0l3.269-1.555 3.303 1.557c.296.139.636.138.931-.002l3.269-1.555 3.305 1.557c.293.139.635.138.93-.002L24.65 2.81v24.015Z"
      />
      <Path d="M10.767 7.686a3.411 3.411 0 0 0-3.408 3.407 3.411 3.411 0 0 0 3.408 3.408 3.411 3.411 0 0 0 3.407-3.408 3.411 3.411 0 0 0-3.407-3.407Zm0 4.64a1.234 1.234 0 0 1 0-2.465c.68 0 1.232.553 1.232 1.232 0 .68-.553 1.233-1.232 1.233ZM18.234 15.153a3.411 3.411 0 0 0-3.407 3.408 3.411 3.411 0 0 0 3.407 3.407 3.41 3.41 0 0 0 3.407-3.407 3.411 3.411 0 0 0-3.407-3.408Zm0 4.64a1.234 1.234 0 0 1 0-2.465c.68 0 1.232.553 1.232 1.232 0 .68-.553 1.232-1.233 1.232ZM20.741 8.583a1.088 1.088 0 0 0-1.538.003L8.583 19.243a1.087 1.087 0 1 0 1.54 1.536l10.62-10.658a1.088 1.088 0 0 0-.002-1.538Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color} d="M0 0h29v29H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const TermIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={props.color}
        d="M28.578 20.102V7.266a2.425 2.425 0 0 0-2.422-2.422h-1.574v1.21a1.21 1.21 0 1 1-2.422 0v-1.21h-5.51v1.21a1.21 1.21 0 1 1-2.421 0v-1.21h-5.45v1.21a1.21 1.21 0 1 1-2.422 0v-1.21H4.844a2.425 2.425 0 0 0-2.422 2.422v18.89a2.425 2.425 0 0 0 2.422 2.422h21.312a2.425 2.425 0 0 0 2.422-2.422 1.21 1.21 0 1 1 2.422 0A4.85 4.85 0 0 1 26.156 31H4.844A4.85 4.85 0 0 1 0 26.156V7.266a4.85 4.85 0 0 1 4.844-4.844h1.513V1.21a1.21 1.21 0 1 1 2.422 0v1.21h5.45v-1.21a1.21 1.21 0 1 1 2.421 0v1.21h5.51v-1.21a1.21 1.21 0 1 1 2.422 0v1.21h1.574A4.85 4.85 0 0 1 31 7.267v12.836a1.21 1.21 0 1 1-2.422 0ZM16.65 12.17a1.21 1.21 0 1 0-2.421 0v7.81a1.21 1.21 0 1 0 2.421 0v-7.81Zm-1.21 10.838a1.21 1.21 0 1 0 0 2.422 1.21 1.21 0 0 0 0-2.422Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill={props.color} d="M0 0h31v31H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export const ArrowLeft = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={21}
    height={21}
    fill="none"
    {...props}>
    <Path
      fill="#0D1028"
      d="m10.5 0 1.857 1.857-7.33 7.33H21v2.626H5.027l7.33 7.33L10.5 21 0 10.5 10.5 0Z"
    />
  </Svg>
);

export const ArrowDown = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}>
    <Path
      fill="#9597A2"
      d="m0 12.5 2.211-2.21 8.726 8.726V0h3.126v19.016l8.726-8.727L25 12.5 12.5 25 0 12.5Z"
    />
  </Svg>
);

export const Cross = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#2F2F2F"
      d="m16.202 18.852-6.23-6.23-6.22 6.22c-.512.511-1.355.525-1.867.013l-.797-.798A1.328 1.328 0 0 1 1.1 16.19l6.22-6.22-6.232-6.231a1.311 1.311 0 0 1-.002-1.854l.802-.802a1.309 1.309 0 0 1 1.852.004L9.97 7.318l6.242-6.242a1.3 1.3 0 0 1 1.846.011l.797.797c.512.512.52 1.333.01 1.844L12.622 9.97l6.23 6.23a1.31 1.31 0 0 1 .006 1.853l-.802.802a1.312 1.312 0 0 1-1.855-.003Z"
    />
  </Svg>
);

export const Logout = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={22}
    height={22}
    fill="none"
    {...props}>
    <Path
      fill="#191B35"
      d="M11.773 9.296h8.522a1.706 1.706 0 0 1 0 3.409h-8.522a1.706 1.706 0 0 1 0-3.41Zm7.728 8.461a1.28 1.28 0 0 0-2.008-1.583 8.325 8.325 0 0 1-6.573 3.19c-4.611 0-8.364-3.752-8.364-8.363 0-4.61 3.753-8.363 8.364-8.363a8.322 8.322 0 0 1 6.57 3.187 1.28 1.28 0 0 0 2.008-1.584A10.867 10.867 0 0 0 10.92.081C4.898.08 0 4.98 0 11c0 6.02 4.9 10.92 10.92 10.92a10.87 10.87 0 0 0 8.58-4.164Z"
    />
  </Svg>
);

export const RefreshCcw = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#0F122A"
      d="M3.99 3.852A5.566 5.566 0 0 0 2.56 5.9a5.622 5.622 0 0 0 1.161 6.038l1.474-1.474c.081-.08.227-.023.247.098l.805 5.268a.131.131 0 0 1-.15.15l-5.271-.806c-.12-.019-.179-.165-.098-.246l1.477-1.477C-.232 10.958-.648 7.218.952 4.296A7.728 7.728 0 0 1 7.918.277l.332 2.166c-1.516-.13-3.074.337-4.26 1.409ZM13.794 2.55c2.438 2.493 2.854 6.232 1.253 9.154a7.728 7.728 0 0 1-6.966 4.019l-.33-2.166c1.512.13 3.073-.337 4.258-1.408a5.566 5.566 0 0 0 1.432-2.049 5.622 5.622 0 0 0-1.163-6.038l-1.473 1.474c-.081.081-.227.023-.247-.097L9.753.17a.131.131 0 0 1 .15-.15l5.271.806c.12.02.175.165.098.247L13.793 2.55Z"
    />
  </Svg>
);

export const CreditCard = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={14}
    fill="none"
    {...props}>
    <Path
      fill="#0F122A"
      d="M16.383.813H1.617C.725.813 0 1.538 0 2.43v9.14a1.62 1.62 0 0 0 1.617 1.617h14.766A1.62 1.62 0 0 0 18 11.57V2.43A1.62 1.62 0 0 0 16.383.812ZM5.625 5.734C5.625 6.432 5.057 7 4.359 7h-.843A1.267 1.267 0 0 1 2.25 5.734v-.843c0-.698.568-1.266 1.266-1.266h.843c.698 0 1.266.568 1.266 1.266v.843Zm7.232 2.873a.563.563 0 0 1-.441-.91c.157-.2.24-.442.24-.697 0-.255-.083-.496-.24-.696a.562.562 0 1 1 .883-.697c.31.395.482.89.482 1.393s-.171.998-.482 1.393a.561.561 0 0 1-.442.214Zm1.815 1.21a.56.56 0 0 1-.794.043.562.562 0 0 1-.043-.795c.51-.568.79-1.301.79-2.065s-.28-1.497-.79-2.065a.562.562 0 0 1 .837-.752A4.211 4.211 0 0 1 15.75 7a4.211 4.211 0 0 1-1.078 2.817Z"
    />
  </Svg>
);

export const Key = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}>
    <Path
      fill="#0F122A"
      d="M1.467 8.634a5.057 5.057 0 0 0 5.07 1.257l.595.595a.177.177 0 0 0 .135.05l1.467-.136a.17.17 0 0 1 .184.185l-.124 1.342a.172.172 0 0 0 .185.185l1.342-.124a.171.171 0 0 1 .184.184l-.124 1.342a.172.172 0 0 0 .185.185l1.348-.121a.168.168 0 0 1 .182.182l-.133 1.474a.165.165 0 0 0 .05.132l.573.557a.28.28 0 0 0 .193.077l2.635-.005a.55.55 0 0 0 .556-.554l.003-2.704a.35.35 0 0 0-.11-.195L9.874 6.553a5.057 5.057 0 1 0-8.407 2.08Zm12.775 3.864c.102.11.102.28 0 .39a.258.258 0 0 1-.375 0 .288.288 0 0 1 0-.39.258.258 0 0 1 .375 0ZM9.29 7.488l4.29 4.29a.275.275 0 1 1-.388.389l-4.29-4.29a.271.271 0 0 1-.08-.197.274.274 0 0 1 .469-.193ZM4.567 2.675A1.348 1.348 0 1 1 2.66 4.583a1.348 1.348 0 0 1 1.907-1.907Z"
    />
  </Svg>
);

export const Gear = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}>
    <Path
      fill="#0F122A"
      d="m18.274 7.83-1.472-.187a7.387 7.387 0 0 0-.445-1.075l.909-1.17a1.163 1.163 0 0 0-.096-1.549l-1.232-1.233a1.167 1.167 0 0 0-1.554-.099l-1.168.909a7.372 7.372 0 0 0-1.076-.446l-.188-1.469A1.172 1.172 0 0 0 10.79.478H9.037c-.593 0-1.093.444-1.163 1.031L7.687 2.98c-.375.122-.735.27-1.077.446l-1.169-.909a1.164 1.164 0 0 0-1.549.095L2.66 3.844a1.167 1.167 0 0 0-.1 1.555l.909 1.169a7.31 7.31 0 0 0-.445 1.075l-1.47.187C.966 7.9.523 8.4.523 8.993v1.753c0 .592.443 1.093 1.03 1.163l1.472.187c.121.373.27.733.445 1.075l-.909 1.17a1.163 1.163 0 0 0 .096 1.55l1.233 1.232c.411.423 1.079.465 1.553.098l1.17-.908c.341.175.701.325 1.075.445l.187 1.468c.07.591.57 1.035 1.163 1.035h1.753c.592 0 1.092-.444 1.163-1.03l.187-1.472c.373-.121.733-.27 1.075-.445l1.17.908a1.163 1.163 0 0 0 1.549-.095l1.232-1.233c.424-.412.468-1.08.1-1.553l-.909-1.17c.175-.342.325-.702.445-1.075l1.468-.187c.59-.07 1.034-.57 1.034-1.163V8.993a1.17 1.17 0 0 0-1.03-1.163Zm-8.361 5.953A3.917 3.917 0 0 1 6 9.87a3.917 3.917 0 0 1 3.913-3.913 3.917 3.917 0 0 1 3.913 3.913 3.917 3.917 0 0 1-3.913 3.913Z"
    />
  </Svg>
);
