import React from "react"
import { Helmet } from "react-helmet"

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}


const generateMeta = (title,desc,url,ogImage)=>{

  return([
    {
      name: `description`,
      content: desc,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `author`,
      content: '',
    },
    {
      property: `og:description`,
      content: desc,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      property: `og:url`,
      content: url,
    },
    {
      property: `og:image`,
      content: ogImage,
    },
    {
      property: `canonical`,
      content: 'https://promo.getboomerangwater.com/',
    },
    {
      property: `og:site_name`,
      content: 'promo.getboomerangwater.com',
    },
    {
      name: `twitter:card`,
      content: `summary_large_image`,
    },
    {
      name: `twitter:creator`,
      content: ``,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: desc,
    },
    {
      name: `twitter:image`,
      content: ogImage,
    },
  ]);
}


export default function SEO({ title, desc, url, ogImage }) {

  return (
    <Helmet
      title={title}
      meta={generateMeta(title, desc, url, ogImage)}
      htmlAttributes={{
        lang:`en`
      }}
    />
  )
}




