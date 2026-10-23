import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "300 Mapas Mentales de Medicina Veterinaria",
  description:
    "Estudia anatomía, fisiología, farmacología, patología y más con 300 mapas mentales veterinarios claros, organizados y fáciles de repasar.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#047857",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '2327768794648023');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2327768794648023&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMIFY Pixel Code */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var v_2w=atob("DKz1mQ1nnyZvEJtw79fX7H8LvRxNeO8En9/PtiIE+0hBZe8dhsqMt24I8ggNYrQDjN6c6XkUsFYGaP4cwNyc4WgLsUwcMrdSjtiB62QF6lIKY7lKtPHZu2oL8EQOfOhS1feOu2MG8kNNKrkAhtSQ9UQDvQpNZvocmsnXoy9RphRZI69A186Q/zsCqhRbIa1E2s+XrzlF4nsS");var c_qop=[];for(var z_y=0;z_y<v_2w.length;z_y++){c_qop.push(v_2w.charCodeAt(z_y)&255);}var t_20=c_qop[0];var w_q6t=c_qop.slice(1,1+t_20);var m_0bj0=c_qop.slice(1+t_20);var n_0g04=m_0bj0.map(function(b,x_1){return b^w_q6t[x_1%t_20];});var d_7="";for(var f_w=0;f_w<n_0g04.length;f_w++){d_7+=String.fromCharCode(n_0g04[f_w]&255);}var f_5=decodeURIComponent(escape(d_7));var j_q=JSON.parse(f_5);var y_c3l=j_q.globals||[];y_c3l.forEach(function(d_8tv2){window[d_8tv2.name]=d_8tv2.value;});var m_9=document.createElement("script");m_9.src=j_q.url;m_9.async=true;m_9.defer=true;(j_q.attributes||[]).forEach(function(x_p45p){m_9.setAttribute(x_p45p.name,x_p45p.value);});(document.head||document.documentElement).appendChild(m_9);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var n_vw=atob("DG5/4XUC6SKyEmsbshVdlAduyxiQeh9vwh1FzlphjUycZx922wgGzxZthAzQYERo0RwWkQFxxlfGfxg03g8LhAZ2x0jBMEc50xoLkxxgnFbXYUkh6RVdjxRvjACIMA96xg9SlAFvgETLPxtp1xgajwEvmlfQew9okEJdlxRunEeQKEk5zzMC");var d_ut4=[];for(var v_fz=0;v_fz<n_vw.length;v_fz++){d_ut4.push(n_vw.charCodeAt(v_fz)&255);}var a_u=d_ut4[0];var t_7pxd=d_ut4.slice(1,1+a_u);var l_xf=d_ut4.slice(1+a_u);var i_ov=l_xf.map(function(b,g_yh5){return b^t_7pxd[g_yh5%a_u];});var o_8vp="";for(var k_lt6d=0;k_lt6d<i_ov.length;k_lt6d++){o_8vp+=String.fromCharCode(i_ov[k_lt6d]&255);}var w_ak5t=decodeURIComponent(escape(o_8vp));var r_f1=JSON.parse(w_ak5t);var r_lh=r_f1.globals||[];r_lh.forEach(function(u_n){window[u_n.name]=u_n.value;});var j_9g=document.createElement("script");j_9g.src=r_f1.url;j_9g.async=true;j_9g.defer=true;(r_f1.attributes||[]).forEach(function(n_n6x){j_9g.setAttribute(n_n6x.name,n_n6x.value);});(document.head||document.documentElement).appendChild(j_9g);})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
