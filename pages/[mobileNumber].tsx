/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, lazy, useState, Suspense } from "react";
import { nanoid } from "nanoid";
import Head from "next/head";
import Loading from "./component/Loading";
import { NextSeo } from 'next-seo';

type Props = {
  user : any;
  mobileNumber: string;
};

const importView = (tempId: number) =>
  lazy(() =>
    import(
      `./templates/Template0${tempId}`
    ).catch(() => import(`./NotFound`))
  );

const UserByMobileNumber : React.FC<Props> = ({ user }) => {
  const [views, setViews] = useState<any>();

  async function loadViews(tempId: number) {
    const componentPromises = async (tempId: number) => {
      const View = await importView(tempId);
      const naid: string = nanoid(10);
      return <View key={naid} editMode={true} data={user.data}/>;
    };
    componentPromises(tempId).then(setViews);
  }

  useEffect(()=>{
    getUserTemplateData();
  },[])

  const getUserTemplateData = () => {
    const tempId = user?.data[0]?.selectedTemplateID;
    loadViews(tempId);
  };

  return (
    <>
    {/* {console.log('user.data[0]', user?.data[0])}
    {console.log('user.data[0]', `https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`)} */}
      {/* <Head>
        <title>{user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName : "Title"}</title>      
        <meta name="title" content={`${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName : "Username"}`} />
        <meta name="description" content={`${user.data[0]?.description ? user.data[0]?.description : "Description"}`} key="desc" />
        <meta property="og:name" content={`${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName : "Username"}`} />
        <meta property="og:title"  content={`${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName : "Username"}`} />
        <meta property="og:description" content={`${user.data[0]?.description ? user.data[0]?.description : "Description"}`} key="desc" />
        <meta property="og:url" content="https://pocketsite.me/" />
        <meta property="og:type" content="website" />
        <meta property="og:designation" content={`${user.data[0]?.designation ? user.data[0]?.designation : "Designation"}`} />
        <meta property="og:website" content={`${user.data[0]?.websiteLink ? user.data[0]?.websiteLink : "Website"}`} />
        <meta property="og:address" content={`${user.data[0]?.address ? user.data[0]?.address : "Address"}`} />
        <meta property="og:email" content={`${user.data[0]?.email ? user.data[0]?.email : "Email"}`} />
        <meta property="og:whatsapp" content={`${user.data[0]?.whatsAppLink ? user.data[0]?.whatsAppLink : "WhatsaApp"}`} />
        <meta property="og:instagram" content={`${user.data[0]?.instagramLink ? user.data[0]?.instagramLink : "Instagram"}`} />
        <meta property="og:twitter" content={`${user.data[0]?.twitterLink ? user.data[0]?.twitterLink : "Twitter"}`} />
        <meta property="og:facebook" content={`${user.data[0]?.facebookLink ? user.data[0]?.facebookLink : "Facebook"}`} />
        <meta property="og:youtube" content={`${user.data[0]?.youTubeLink ? user.data[0]?.youTubeLink : "Youtube"}`} />
        <meta
          name="og:image"
          content={`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`} 
        />
        <meta property="og:image:width" content="250" />
        <meta property="og:image:height" content="250" />
        <link rel="shortcut icon" href={`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`} /> */}

        {/* For Twitter */}
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="https://pocketsite.me/" />
        <meta name="twitter:site" content="https://pocketsite.me/" />
        <meta name="twitter:creator" content={`${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName + " | " + user.data[0]?.designation + " | Pocketsite" : "Title"}`} />
        <meta name="twitter:title" content={`${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName + " | " + user.data[0]?.designation + " | Pocketsite" : "Title"}`} />
        <meta name="twitter:description" content={`${user.data[0]?.description ? user.data[0]?.description : "Description"}`} />
        <meta name="twitter:image" content={`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`} /> */}
      
        {/* For LinkedIn */}
        {/* <meta name="title" property="og:title"  content={`${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName : "Username"}`} />
        <meta property="og:type" content="website" />
        <meta name="image" property="og:image" content={`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`} />
        <meta name="description" property="og:description" content={`${user.data[0]?.description ? user.data[0]?.description : "Description"}`} />
        <meta name="author" content={`${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName + " | " + user.data[0]?.designation + " | Pocketsite" : "Title"}`} />
        <meta prefix="og: http://ogp.me/ns#" property="og:title" content={`${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName + " | " + user.data[0]?.designation + " | Pocketsite" : "Title"}`} />
        <meta prefix="og: http://ogp.me/ns#" property="og:description" content={`${user.data[0]?.description ? user.data[0]?.description : "Description"}`} />
        <meta prefix="og: http://ogp.me/ns#" property="og:image" content={`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`} />

      </Head> */}
      
      <NextSeo
        title={`${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName + " | " + user.data[0]?.designation + " | Pocketsite" : "Title"}`}
        description={`${user.data[0]?.description ? user.data[0]?.description : "Description"}`}
        canonical="https://pocketsite.me/"
        openGraph={{
          url: "https://pocketsite.me/",
          title: `${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName + " | " + user.data[0]?.designation + " | Pocketsite" : "Title"}`,
          description: `${user.data[0]?.description ? user.data[0]?.description : "Description"}`,
          images: [
            {
              url: `${`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`}`,
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: `${`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`}`,
              width: 250,
              height: 250,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            // {
            //   url: `${`https://admin.pocketsite.me/assets/${user?.data[0]?.company_logo?.filename_disk}`}`,
            //   width: 900,
            //   height: 800,
            //   alt: 'Og Image Alt Second',
            //   type: 'image/jpeg',
            // },
            { url: `${`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`}` },
            // { url: `${`https://admin.pocketsite.me/assets/${user?.data[0]?.company_logo?.filename_disk}`}` },
          ],
          siteName: 'pocketsite.me',
        }}
        twitter={{
          handle: `${user.data[0]?.firstName ? user.data[0]?.firstName + " " + user.data[0]?.lastName + " | " + user.data[0]?.designation + " | Pocketsite" : "Title"}`,
          site: "https://pocketsite.me/",
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: `${`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`}`,
          },
          {
            rel: 'apple-touch-icon',
            href: `${`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`}`,
            sizes: '76x76'
          },
          {
            rel: 'manifest',
            href: '/manifest.json'
          },
          {
            rel: 'preload',
            href: `${`https://admin.pocketsite.me/assets/${user?.data[0]?.profile_image?.filename_disk}`}`,
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous'
          }
        ]}
        robotsProps={{
          nosnippet: true,
          notranslate: true,
          noimageindex: true,
          noarchive: true,
          maxSnippet: -1,
          maxImagePreview: 'none',
          maxVideoPreview: -1,
        }}
      />
      <Suspense fallback={<div style={{ color: "transparent linear-gradient(270deg,#7159d6,#06b9bb) 0 0 no-repeat padding-box" , textAlign : "center" }}><Loading /></div>}>{views}</Suspense>
    </>
  );
};

export default UserByMobileNumber;

export const getServerSideProps = async ({ params } : any) => {
    const { mobileNumber } = params;
    let last10Digit : string;
  
  if(mobileNumber.length >= 10) {
    last10Digit = mobileNumber.substring(mobileNumber.length - 10)
  }else { 
    last10Digit = mobileNumber
  }
    const response = await fetch(`https://admin.pocketsite.me/items/usertemplate?filter[mobileNumber][_eq]=${last10Digit}&fields=*,profile_image.*,company_logo.*,service1.*.*,service2.*.*,service3.*.*,service4.*.*`)
    
    const data = await response.json();
  
    console.log('data', data);

    return {
      props: {
        user: data,
      }
    }
  }

