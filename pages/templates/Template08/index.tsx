import SVG from "react-inlinesvg";
// import "../scss/temp05.scss";
import user01 from "../../templates/images/user01.png";
// import socialSharing from "../../component/helper";
import { useEffect, useState } from "react";
import ReviewModal from "../../component/ReviewModal";
import { Avatar } from "@material-ui/core";
// import parseUrl from "@/pages/component/parseUrl";

function parseUrl (url: string) {
  if (url.includes("http") || url.includes("https")) {
    return url;
  } else {
    return `https://${url}`;
  }
};

const Template08 = ({ data } : any) => {
 
  const [reviewModal, setReviewModal] = useState<boolean>(false);
  const [showFallback, setShowFallback] = useState<boolean>(false);

  useEffect(() => {
    //
  }, [data && data[0] ?.croppedAreaLogo, data && data[0] ?.croppedAreaProfile]);

  useEffect(() => {
    setColor(data && data[0] ?.templateColor || "#c45f1c");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data && data[0] ?.selectedTemplateID]);

  function setColor(newColor: any) {
    let color = newColor ? newColor : "#c45f1c"
    document.documentElement.style.setProperty("--theme05", color);
    document.documentElement.style.setProperty(
      "--secondary05",
      data && data[0] ?.templateSecondaryColor || "#fffef5"
    );
  }

  const showReviewModal = () => {
    setReviewModal(!reviewModal);
  };

  const handleClose = () => {
    setShowFallback(!showFallback);
  };

  const shareButton = async () => {
    var shareDetails = {
      // url: `${PUBLIC_URL}/${templateUserData?.mobileNumber}`,
      url: `https://astounding-dusk-4ccccf.netlify.app/${data && data[0]?.mobileNumber}`,
      title: `${data && data[0]?.firstName} ${data && data[0]?.lastName}`,
      text: `My Services:\n${data && data[0]?.service1?.name && data && data[0]?.service1?.name}\n${data && data[0]?.service2?.name && data && data[0]?.service2?.name}\n${data && data[0]?.service3?.name && data && data[0]?.service3?.name}\n${data && data[0]?.service4?.name && data && data[0]?.service4?.name}\n`,
    };
  
    if (navigator.share) {
      try {
        return await navigator.share(shareDetails);
      } catch (err) {
        console.error(err);
      }
    } else {
      // fallback code
      () => {
        setShowFallback(true);
      }
    }
  };
  //     <div className="template-main">
  //       <div className="temp-inner overflow-hidden">
  //         <div className="temp-header p-0 curve-header">
  //           {data && data[0] ?.isCompanyLogo ? (
  //             data && data[0] ?.companyLogo ? (
  //               <a
  //                 href="#l"
  //                 className="logo pb-4 pt-4 d-flex justify-content-center bg-white"
  //               >
  //                 {data && data[0] ?.logoShape === "circle" ? (
  //                   <Avatar
  //                     src={`${data && data[0] ?.companyLogo}`}
  //                     variant="square"
  //                     style={{ width: "180px", height: "60px" }}
  //                   />
  //                 ) : (
  //                   <Avatar
  //                     src={`${data && data[0] ?.companyLogo}`}
  //                     variant="square"
  //                   />
  //                 )}
  //               </a>
  //             ) : (
  //               <TempLogo path={data && data[0] ?.companyLogo} />
  //             )
  //           ) : (
  //             " "
  //           )}
  //           <div className="user-avtar-round">
  //             <div className="user-img rounded mx-auto">
  //               {data && data[0] ?.isProfileImage ? (
  //                 data && data[0] ?.profileImage ? (
  //                   <Avatar
  //                     src={`${data && data[0] ?.profileImage}`}
  //                     variant="circular"
  //                     style={{ width: "130px", height: "130px" }}
  //                   />
  //                 ) : (
  //                   <Avatar
  //                     src={`${user01}`}
  //                     variant="circular"
  //                     style={{ width: "130px", height: "130px" }}
  //                   />
  //                 )
  //               ) : (
  //                 ""
  //               )}
  //             </div>
  //           </div>
  //           <div className="card-inner text-center">
  //             <div className="name-cols4 pe-0 text-center">
  //               <div className="user-name">
  //                {data && data[0] ?.firstName || 'John' }{" "}{data && data[0] ?.lastName || 'Doe'}
  //               </div>
  //               <div className="user-post  mb-2">
  //                 {data && data[0] ?.designation || `Co-founder `}
  //               </div>
  //               <div className="c-name">
  //                 {data && data[0] ?.isCompanyName ? data && data[0] ?.companyName || "Infinity Aotumation" : " "}
  //               </div>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="temp-lower">
  //           <ul className="list-unstyled d-flex service-list">
  //             {data && data[0] ?.services?.length > 0 ? (
  //               (data && data[0] ?.services || []).map(
  //                 (ser: any, index: number) => (
  //                   <li className="item" key={index}>
  //                     <a href={`#${ser?.name}`} className="ser-link">
  //                       <div className="icon">
  //                         <SVG
  //                           src={`https://admin.pocketsite.me/assets/${ser?.svg?.filename_disk}`}
  //                           fill={data && data[0] ?.templateColor || "#c45f1c"}
  //                           style={{ height: "23.434", width: "26.071" }}
  //                         />
  //                       </div>
  //                       <span className="service-name">
  //                         {/* {ser?.services_id?.name} */}
  //                         {ser?.name}
  //                       </span>
  //                     </a>
  //                   </li>
  //                 )
  //               )
  //             ) : (
  //               <>
  //                 <li className="item">
  //                   <a href={`#d`} className="ser-link">
  //                     <div className="icon">
  //                       <SVG src={"/assets/images/icons/tax.svg"} fill={data && data[0] ?.templateColor || "#c45f1c"} />
  //                       {/* <Avatar src={"/assets/images/icons/tax.svg"} style={{ width:"24px", height:"24px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                      </div>
  //                     <span className="service-name">
  //                       Income Tax Consultancy
  //                     </span>
  //                   </a>
  //                 </li>
  //                 <li className="item ">
  //                   <a href={`#e`} className="ser-link">
  //                     <div className="icon">
  //                       <SVG
  //                         src={"/assets/images/icons/bedge.svg"}
  //                         fill={data && data[0] ?.templateColor || "#c45f1c"}
  //                       />
  //                      {/* <Avatar src={"/assets/images/icons/bedge.svg"} style={{ width:"24px", height:"24px" ,fill: `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                     </div>
  //                     <span className="service-name">
  //                       Financial Investigation
  //                     </span>
  //                   </a>
  //                 </li>
  //                 <li className="item">
  //                   <a href={`#r`} className="ser-link">
  //                     <div className="icon">
  //                       <SVG                                  
  //                         src={"/assets/images/icons/calc.svg"}
  //                         fill={data && data[0] ?.templateColor || "#c45f1c"}
  //                       />
  //                      {/* <Avatar src={"/assets/images/icons/calc.svg"} style={{ width:"24px", height:"24px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                     </div>
  //                     <span className="service-name">
  //                       Financial and investment
  //                     </span>
  //                   </a>
  //                 </li>
  //                 <li className="item">
  //                   <a href={`#e`} className="ser-link">
  //                     <div className="icon">
  //                       <SVG src={"/assets/images/icons/cog.svg"} fill={data && data[0] ?.templateColor || "#c45f1c"} />
  //                       {/* <Avatar src={"/assets/images/icons/cog.svg"} style={{ width:"24px", height:"24px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                     </div>
  //                     <span className="service-name"> Valuation</span>
  //                   </a>
  //                 </li>
  //               </>
  //             )}
  //           </ul>

  //           <p className="desc text-center mb-4">
  //             {data && data[0] ?.description ||
  //               `Award Winning web-developer with 7 years of experience in HTML
  //             ,CSS, LAMP, My main interests are object-oriented and
  //             user-centered design.`}
  //           </p>

  //           <ul className="contact-detail">
  //             <li className="item">
  //               <a
  //                 href={`tel:${
  //                   data && data[0] ?.mobileNumber
  //                     ? data && data[0] ?.mobileNumber
  //                     : "#"
  //                 }`}
  //                 target={"_blank"}
  //                 className="contact-link"
  //                 rel="noreferrer"
  //               >
  //                 <span className="icon">
  //                   <SVG src={"/assets/images/icons/call.svg"} fill={data && data[0] ?.templateColor || "#c45f1c"} />
  //                   {/* <Avatar src={"/assets/images/icons/call.svg"} style={{ width:"24px", height:"24px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                 </span>
  //                 <span className="link-text">
  //                   {data && data[0] ?.mobileNumber
  //                     ? data && data[0] ?.mobileNumber
  //                     : `+91 9999999999`}
  //                 </span>
  //               </a>
  //             </li>
  //             {data && data[0] ?.isWebsite ? (
  //               <li className="item">
  //                 <a
  //                   href={`${
  //                     data && data[0] ?.websiteLink
  //                       ? parseUrl(data && data[0] ?.websiteLink)
  //                       : ""
  //                   }`}
  //                   target={"_blank"}
  //                   className="contact-link"
  //                   rel="noreferrer"
  //                 >
  //                   <span className="icon">
  //                     <SVG src={"/assets/images/icons/map.svg"} fill={data && data[0] ?.templateColor || "#c45f1c"} />
  //                     {/* <Avatar src={"/assets/images/icons/map.svg"} style={{ width:"24px", height:"24px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                   </span>
  //                   <span className="link-text">
  //                     {data && data[0] ?.websiteLink
  //                       ? data && data[0] ?.websiteLink
  //                       : `www.mobilevisit.com`}
  //                   </span>
  //                 </a>
  //               </li>
  //             ): ""}
  //             <li className="item">
  //               <a
  //                 href={`mailto:${
  //                   data && data[0] ?.email ? data && data[0] ?.email : ""
  //                 }`}
  //                 target={"_blank"}
  //                 className="contact-link"
  //                 rel="noreferrer"
  //               >
  //                 <span className="icon">
  //                   <SVG src={"/assets/images/icons/envelop.svg"} fill={data && data[0] ?.templateColor || "#c45f1c"} />
  //                   {/* <Avatar src={"/assets/images/icons/envelop.svg"} style={{ width:"24px", height:"24px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                 </span>
  //                 <span className="link-text">
  //                   {data && data[0] ?.email
  //                     ? data && data[0] ?.email
  //                     : `youremailid@somedomain.com`}
  //                 </span>
  //               </a>
  //             </li>
  //             <li className="item">
  //               <a
  //                 href={`http://maps.google.com/?q=${
  //                   data && data[0] ?.address
  //                     ? data && data[0] ?.address
  //                     : `425, Shiven Square, Pal,Adajan, Surat, Gujarat, India - 395009`
  //                 }`}
  //                 target={"_blank"}
  //                 className="contact-link"
  //                 rel="noreferrer"
  //               >
  //                 <span className="icon">
  //                   <SVG
  //                     src={"/assets/images/icons/location.svg"}
  //                     fill={data && data[0] ?.templateColor || "#c45f1c"}
  //                   />
  //                   {/* <Avatar src={"/assets/images/icons/location.svg"} style={{ width:"24px", height:"24px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                 </span>
  //                 <span className="link-text">
  //                   {data && data[0] ?.address ||
  //                     `425, Shiven Square, Pal, Adajan, Surat, Gujarat, India -
  //                   395009`}
  //                 </span>
  //               </a>
  //             </li>
  //           </ul>
  //           <ul className="social-media justify-content-center">
  //             {data && data[0] ?.isWhatsapp ? (
  //               <li className="item">
  //                 <a
  //                   href={`https://wa.me/${data && data[0] ?.whatsAppLink}`}
  //                   target={"_blank"}
  //                   className="social-link"
  //                   rel="noreferrer"
  //                 >
  //                   <SVG
  //                     src={"/assets/images/icons/whatsapp.svg"}
  //                     stroke={data && data[0] ?.templateColor || "#c45f1c"}
  //                     fill={data && data[0] ?.templateColor || "#c45f1c"}
  //                   />
  //                   {/* <Avatar src={"/assets/images/icons/whatsapp.svg"} style={{ width:"30px", height:"30px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                  </a>
  //               </li>
  //             ): ""}
  //             {data && data[0] ?.isYouTube ? (
  //               <li className="item">
  //                 <a
  //                   href={
  //                     data && data[0] ?.youTubeLink
  //                       ? parseUrl(data && data[0] ?.youTubeLink)
  //                       : ""
  //                   }
  //                   target={"_blank"}
  //                   className="social-link"
  //                   rel="noreferrer"
  //                 >
  //                   <SVG
  //                     src={"/assets/images/icons/youtube.svg"}
  //                     stroke={data && data[0] ?.templateColor || "#c45f1c"}
  //                     fill={data && data[0] ?.templateColor || "#c45f1c"}
  //                   />
  //                   {/* <Avatar src={"/assets/images/icons/youtube.svg"} style={{ width:"30px", height:"30px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                   </a>
  //               </li>
  //             ): ""}
  //             {data && data[0] ?.isInstagram ? (
  //               <li className="item">
  //                 <a
  //                   href={
  //                     data && data[0] ?.instagramLink
  //                       ? parseUrl(data && data[0] ?.instagramLink)
  //                       : ""
  //                   }
  //                   target={"_blank"}
  //                   className="social-link"
  //                   rel="noreferrer"
  //                 >
  //                   <SVG
  //                     src={"/assets/images/icons/instagram.svg"}
  //                     stroke={data && data[0] ?.templateColor || "#c45f1c"}
  //                     fill={data && data[0] ?.templateColor || "#c45f1c"}
  //                   />
  //                  {/* <Avatar src={"/assets/images/icons/instagram.svg"} style={{ width:"30px", height:"30px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                 </a>
  //               </li>
  //             ):" "}
  //             {data && data[0] ?.isTwitter ? (
  //               <li className="item">
  //                 <a
  //                   href={
  //                     data && data[0] ?.twitterLink
  //                       ? parseUrl(data && data[0] ?.twitterLink)
  //                       : ""
  //                   }
  //                   target={"_blank"}
  //                   className="social-link"
  //                   rel="noreferrer"
  //                 >
  //                   <SVG
  //                     src={"/assets/images/icons/twitter.svg"}
  //                     stroke={data && data[0] ?.templateColor || "#c45f1c"}
  //                     fill={data && data[0] ?.templateColor || "#c45f1c"}
  //                   />
  //                   {/* <Avatar src={"/assets/images/icons/twitter.svg"} style={{ width:"30px", height:"30px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                 </a>
  //               </li>
  //             ) : ""}
  //             {data && data[0] ?.isFacebook ? (
  //               <li className="item">
  //                 <a
  //                   href={
  //                     data && data[0] ?.facebookLink
  //                       ? parseUrl(data && data[0] ?.facebookLink)
  //                       : ""
  //                   }
  //                   target={"_blank"}
  //                   className="social-link"
  //                   rel="noreferrer"
  //                 >
  //                   <SVG
  //                     src={"/assets/images/icons/facebook.svg"}
  //                     stroke={data && data[0] ?.templateColor || "#c45f1c"}
  //                     fill={data && data[0] ?.templateColor || "#c45f1c"}
  //                   />
  //                   {/* <Avatar src={"/assets/images/icons/facebook.svg"} style={{ width:"30px", height:"30px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                  </a>
  //               </li>
  //             ):""}
             
  //             <li className="item">
  //                 <button
  //                   type="button"
  //                   className="social-link"
  //                   style={{ borderWidth : "0px" , background : "transparent"}}
  //                   onClick={shareButton}
  //                 >
  //                   <SVG 
  //                     src={"/assets/images/icons/share.svg"} 
  //                     style={{ width : "30px", height:"30px" }} 
  //                     stroke={data && data[0] ?.templateColor || "#a29d06"}
  //                     />
  //                     {/* <Avatar src={"/assets/images/icons/share.svg"} style={{ width:"30px", height:"30px" ,fill: `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                  </button>
  //               </li>
  //               <li className="item">
  //                 <button
  //                   type="button"
  //                   onClick={() => {
  //                     // !auth && showReviewModal();
  //                     showReviewModal();
  //                   }}
  //                   style={{ borderWidth : "0px" , background : "transparent" }}
  //                   className="social-link"
  //                 >
  //                   <>
  //                   <SVG 
  //                     src={"/assets/images/icons/review.svg"} 
  //                     style={{ width : "30px", height:"30px" }}
  //                     stroke={data && data[0] ?.templateColor || "#a29d06"}
  //                   />
  //                   {/* <span dangerouslySetInnerHTML={{__html: reviewString}}></span> */}
  //                    {/* <Avatar src={"/assets/images/icons/review.svg"} style={{ width:"30px", height:"30px" ,fill : `${data && data[0] ?.templateColor || "#c45f1c"}` }}  /> */}
  //                   </>
  //                 </button>
  //               </li>
  //           </ul>
  //         </div>
  //       </div>
  //     </div>
  //     <ReviewModal show={reviewModal} handleClose={showReviewModal} data={data} />
  //   </>
  // );

  // const shareToFB = () => {
  //   window.FB.ui({
  //     method: 'feed',
  //     link: `signup.mydomain.com/?referrer=${data && data[0] ?.id}`,
  //     name: 'THIS WILL OVERRIDE OG:TITLE TAG',
  //     description: 'THIS WILL OVERRIDE OG:DESCRIPTION TAG',
  //     caption: 'THIS WILL OVERRIDE THE OG:URL TAG'
  //   });  
  // };

  return (
    <>
      <div className="template-main">
        <div className="temp-inner overflow-hidden">
          <div className="temp-header p-0 curve-header">
            {data && data[0] ?.isCompanyLogo ? (
              data && data[0] ?.companyLogo ? (
                <span
                  className={`logo d-flex ${
                    data && data[0] ?.logoShape === "circle"
                      ? ""
                      : "ps-3 pe-3 pb-4 pt-4"
                  }`}
                >
                  {data && data[0] ?.logoShape === "circle" ? (
                    <img
                      src={`https://admin.pocketsite.me/assets/${data && data[0] ?.company_logo?.filename_disk}`}
                      alt="logo"
                    />
                  ) : (
                    <Avatar
                      src={`https://admin.pocketsite.me/assets/${data && data[0] ?.company_logo?.filename_disk}`}
                      variant="square"
                    />
                  )}
                </span>
              ) : (
                <span className="logo p-4 d-flex justify-content-center">
                  <Avatar
                    src={`https://admin.pocketsite.me/assets/${data && data[0] ?.company_logo?.filename_disk}`}
                    variant="square"
                    style={{ width: "190px", height: "30px" }}
                  />
                </span>
              )
            ) : (
              " "
            )}
            <div className="user-avtar-round">
              <div className="user-img rounded mx-auto">
                {data && data[0] ?.isProfileImage ? (
                  data && data[0] ?.profileImage ? (
                    <Avatar
                      src={`https://admin.pocketsite.me/assets/${data && data[0] ?.profile_image?.filename_disk}`}
                      variant="circular"
                      style={{ width: "130px", height: "130px" }}
                    />
                  ) : (
                    <Avatar
                      src={`${user01}`}
                      variant="circular"
                      style={{ width: "130px", height: "130px" }}
                    />
                  )
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="card-inner text-center">
              <div className="name-cols4 pe-0 text-center">
                <div className="user-name">
                  {data && data[0] ?.firstName || "John"}{" "}
                  {data && data[0] ?.lastName || "Doe"}
                </div>
                <div className="user-post  mb-2">
                  {data && data[0] ?.designation || `Co-founder `}
                </div>
                <div className="c-name">
                  {data && data[0] ?.isCompanyName
                    ? data && data[0] ?.companyName || "Infinity Aotumation"
                    : ""}
                </div>
              </div>
            </div>
            <div className="curve-img-bottom">
              <SVG
                src={"/assets/images/curve-bottom.svg"}
                fill={`${
                  data && data[0] ?.templateSecondaryColor || "#fef8f5"
                }`}
              />
            </div>
          </div>

          <div className="temp-lower">
            <ul className="list-unstyled d-flex service-list">
              {data && data[0] ?.service1?.name ? (
                <li className="item" key={data && data[0] ?.service1?.id}>
                  <div className="ser-link">
                    <div className="icon">
                      <SVG
                        src={`https://admin.pocketsite.me/assets/${data && data[0] ?.service1?.svg?.filename_disk}`}
                        fill={data && data[0] ?.templateColor || "#c45f1c"}
                        style={{ height: "23.434", width: "26.071" }}
                      />
                    </div>
                    <span className="service-name">
                      {data && data[0] ?.service1?.name}
                    </span>
                  </div>
                </li>
              ) : (
                ""
              )}
              {data && data[0] ?.service2?.name ? (
                <li className="item" key={data && data[0] ?.service2?.id}>
                  <div className="ser-link">
                    <div className="icon">
                      <SVG
                        src={`https://admin.pocketsite.me/assets/${data && data[0] ?.service2?.svg?.filename_disk}`}
                        fill={data && data[0] ?.templateColor || "#c45f1c"}
                        style={{ height: "23.434", width: "26.071" }}
                      />
                    </div>
                    <span className="service-name">
                      {data && data[0] ?.service2?.name}
                    </span>
                  </div>
                </li>
              ) : (
                ""
              )}
              {data && data[0] ?.service3?.name ? (
                <li className="item" key={data && data[0] ?.service3?.id}>
                  <div className="ser-link">
                    <div className="icon">
                      <SVG
                        src={`https://admin.pocketsite.me/assets/${data && data[0] ?.service3?.svg?.filename_disk}`}
                        fill={data && data[0] ?.templateColor || "#c45f1c"}
                        style={{ height: "23.434", width: "26.071" }}
                      />
                    </div>
                    <span className="service-name">
                      {data && data[0] ?.service3?.name}
                    </span>
                  </div>
                </li>
              ) : (
                ""
              )}
              {data && data[0] ?.service4?.name ? (
                <li className="item" key={data && data[0] ?.service4?.id}>
                  <div className="ser-link">
                    <div className="icon">
                      <SVG
                        src={`https://admin.pocketsite.me/assets/${data && data[0] ?.service4?.svg?.filename_disk}`}
                        fill={data && data[0] ?.templateColor || "#c45f1c"}
                        style={{ height: "23.434", width: "26.071" }}
                      />
                    </div>
                    <span className="service-name">
                      {data && data[0] ?.service4?.name}
                    </span>
                  </div>
                </li>
              ) : (
                ""
              )}
            </ul>

            <p className="desc text-center mb-4">
              {data && data[0] ?.description ||
                `Award Winning web-developer with 7 years of experience in HTML
              ,CSS, LAMP, My main interests are object-oriented and
              user-centered design.`}
            </p>

            <ul className="contact-detail">
              <li className="item">
                <a
                  href={`tel:${
                    data && data[0] ?.mobileNumber
                      ? data && data[0] ?.mobileNumber
                      : "#"
                  }`}
                  target={"_blank"}
                  className="contact-link"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <SVG
                      src={"/assets/images/icons/call.svg"}
                      fill={data && data[0] ?.templateColor || "#c45f1c"}
                    />
                  </span>
                  <span className="link-text">
                    {data && data[0] ?.mobileNumber
                      ? data && data[0] ?.mobileNumber
                      : `+91 9999999999`}
                  </span>
                </a>
              </li>
              {data && data[0] ?.isWebsite ? (
                <li className="item">
                  <a
                    href={`${
                      data && data[0] ?.websiteLink
                        ? parseUrl(data && data[0] ?.websiteLink)
                        : ""
                    }`}
                    target={"_blank"}
                    className="contact-link"
                    rel="noreferrer"
                  >
                    <span className="icon">
                      <SVG
                        src={"/assets/images/icons/map.svg"}
                        fill={data && data[0] ?.templateColor || "#c45f1c"}
                      />
                    </span>
                    <span className="link-text">
                      {data && data[0] ?.websiteLink
                        ? data && data[0] ?.websiteLink.replace(/(^\w+:|^)\/\//, '') 
                        : `www.mobilevisit.com`}
                    </span>
                  </a>
                </li>
              ) : (
                ""
              )}
              <li className="item">
                <a
                  href={`mailto:${
                    data && data[0] ?.email ? data && data[0] ?.email : ""
                  }`}
                  target={"_blank"}
                  className="contact-link"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <SVG
                      src={"/assets/images/icons/envelop.svg"}
                      fill={data && data[0] ?.templateColor || "#c45f1c"}
                    />
                  </span>
                  <span className="link-text">
                    {data && data[0] ?.email
                      ? data && data[0] ?.email
                      : `youremailid@somedomain.com`}
                  </span>
                </a>
              </li>
              <li className="item">
                <a
                  href={`http://maps.google.com/?q=${
                    data && data[0] ?.address
                      ? data && data[0] ?.address
                      : `425, Shiven Square, Pal,Adajan, Surat, Gujarat, India - 395009`
                  }`}
                  target={"_blank"}
                  className="contact-link"
                  rel="noreferrer"
                >
                  <span className="icon">
                    <SVG
                      src={"/assets/images/icons/location.svg"}
                      fill={data && data[0] ?.templateColor || "#c45f1c"}
                    />
                  </span>
                  <span className="link-text">
                    {data && data[0] ?.address ||
                      `425, Shiven Square, Pal,Adajan, Surat, Gujarat, India -
                    395009`}
                  </span>
                </a>
              </li>
            </ul>
            <ul className="social-media justify-content-center">
              {data && data[0] ?.isWhatsapp ? (
                <li className="item">
                  <a
                    href={`https://wa.me/${data && data[0] ?.whatsAppLink}`}
                    target={"_blank"}
                    className="social-link"
                    rel="noreferrer"
                  >
                    <SVG
                      src={"/assets/images/icons/whatsapp.svg"}
                      stroke={data && data[0] ?.templateColor || "#c45f1c"}
                      fill={data && data[0] ?.templateColor || "#c45f1c"}
                    />
                  </a>
                </li>
              ) : (
                ""
              )}
              {data && data[0] ?.isYouTube ? (
                <li className="item">
                  <a
                    href={
                      data && data[0] ?.youTubeLink
                        ? parseUrl(data && data[0] ?.youTubeLink)
                        : ""
                    }
                    target={"_blank"}
                    className="social-link"
                    rel="noreferrer"
                  >
                    <SVG
                      src={"/assets/images/icons/youtube.svg"}
                      stroke={data && data[0] ?.templateColor || "#c45f1c"}
                      fill={data && data[0] ?.templateColor || "#c45f1c"}
                    />
                  </a>
                </li>
              ) : (
                ""
              )}
              {data && data[0] ?.isInstagram ? (
                <li className="item">
                  <a
                    href={
                      data && data[0] ?.instagramLink
                        ? parseUrl(data && data[0] ?.instagramLink)
                        : ""
                    }
                    target={"_blank"}
                    className="social-link"
                    rel="noreferrer"
                  >
                    <SVG
                      src={"/assets/images/icons/instagram.svg"}
                      stroke={data && data[0] ?.templateColor || "#c45f1c"}
                      fill={data && data[0] ?.templateColor || "#c45f1c"}
                    />
                  </a>
                </li>
              ) : (
                " "
              )}
              {data && data[0] ?.isTwitter ? (
                <li className="item">
                  <a
                    href={
                      data && data[0] ?.twitterLink
                        ? parseUrl(data && data[0] ?.twitterLink)
                        : ""
                    }
                    target={"_blank"}
                    className="social-link"
                    rel="noreferrer"
                  >
                    <SVG
                      src={"/assets/images/icons/twitter.svg"}
                      stroke={data && data[0] ?.templateColor || "#c45f1c"}
                      fill={data && data[0] ?.templateColor || "#c45f1c"}
                    />
                  </a>
                </li>
              ) : (
                ""
              )}
              {data && data[0] ?.isFacebook ? (
                <li className="item">
                  <a
                    href={
                      data && data[0] ?.facebookLink
                        ? parseUrl(data && data[0] ?.facebookLink)
                        : ""
                    }
                    target={"_blank"}
                    className="social-link"
                    rel="noreferrer"
                  >
                    <SVG
                      src={"/assets/images/icons/facebook.svg"}
                      stroke={data && data[0] ?.templateColor || "#c45f1c"}
                      fill={data && data[0] ?.templateColor || "#c45f1c"}
                    />
                  </a>
                </li>
              ) : (
                ""
              )}

                <li className="item">
                  <button
                    type="button"
                    className="social-link"
                    style={{ borderWidth: "0px", background: "transparent" }}
                    onClick={shareButton}
                  >
                    <SVG
                      src={"/assets/images/shareNew.svg"}
                      style={{ width: "30px", height: "30px" }}
                      stroke={data && data[0] ?.templateColor || "#a29d06"}
                    />
                  </button>
                </li>
            
             
                <li className="item">
                  <button
                    type="button"
                    onClick={() => {
                      showReviewModal();
                    }}
                    style={{ borderWidth: "0px", background: "transparent" }}
                    className="social-link"
                  >
                    <SVG
                      src={"/assets/images/icons/reviewNew.svg"}
                      style={{ width: "30px", height: "30px" }}
                      stroke={data && data[0] ?.templateColor || "#a29d06"}
                    />
                  </button>
                </li>
            </ul>
          </div>
        </div>
      </div>
      {reviewModal && <ReviewModal show={reviewModal} handleClose={showReviewModal} data={data} />}
    </>
  );
};
export default Template08;