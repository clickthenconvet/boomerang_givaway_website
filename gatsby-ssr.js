import React from "react";

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    if (true) {
        return setHeadComponents([
            <script
                key={`gatsby-plugin-facebook-pixel`}
                dangerouslySetInnerHTML={{
                    __html: `
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', '908889216584998'); // Insert your pixel ID here.
  fbq('track', 'PageView');
      `,
                }}
            />,
        ]);
    }
};