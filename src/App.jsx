import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./components/ui/AppLayout";
import CookieConsentBanner from "./components/ui/CookieConsentBanner";
import PrivacyPolicy from "./components/ui/PrivacyPolicy";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Gallery from "./components/pages/Gallery";
import Feature from "./components/pages/Feature";
import Contact from "./components/pages/Contact";
import Reviews from "./components/pages/Reviews";
import Blog from "./components/pages/Blog";
import PhotoShoot from "./components/pages/PhotoShoot";
import PageNotFound from "./components/pages/PageNotFound";
import { Toaster } from "react-hot-toast";

const services = [
   {
      id: 1,
      serviceName: "Whole House Remodeling",
      serviceDescription:
         "Comprehensive remodeling projects that involve multiple rooms and areas of the house.",
   },
   {
      id: 2,
      serviceName: "Kitchen Remodeling",
      serviceDescription:
         "Updating and renovating the kitchen space, including installing new cabinets, countertops, appliances, flooring, and lighting.",
   },
   {
      id: 3,
      serviceName: "Bathroom Remodeling",
      serviceDescription:
         "Redesigning and modernizing bathrooms with new fixtures, tiles, vanities, showers, and bathtubs.",
   },
   {
      id: 4,
      serviceName: "Outdoor Living Space",
      serviceDescription:
         "Creating outdoor living areas like patios, decks, pergolas, or outdoor kitchens.",
   },
   {
      id: 5,
      serviceName: "Flooring Installation",
      serviceDescription:
         "Replacing or upgrading the flooring throughout the house with options like hardwood, laminate, tile, or carpet.",
   },
   {
      id: 6,
      serviceName: "Aging-in-place Remodeling",
      serviceDescription:
         "Modifications to make it more accommodating and accessible for seniors.",
   },
];

const features = [
   {
      id: 1,
      featureName: "Modern Design",
      featureDescription:
         "This modern design is a combination of clean lines and modern materials.",
      featureHeroImg:
         "https://s3.amazonaws.com/sarasotaremodeling.com-images/owner.webp",

      images: [
         {
            imgId: 40,
            type: "beforeAfter",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomUpstairs2BeforeAfterTN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomUpstairs2BeforeAfter.webp",
            altText: "before and after of a renovated fourth bathroom",
         },
         {
            imgId: 39,
            type: "beforeAfter",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomUpstairs1BeforeAfter1TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomUpstairs1BeforeAfter1.webp",
            altText: "before and after of a remodeled third bathroom",
         },
         {
            imgId: 38,
            type: "beforeAfter",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/kitchenBeforeAfter1TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/kitchenBeforeAfter1.webp",
            altText: "before and after of renovated kitchen",
         },
         {
            imgId: 37,
            type: "beforeAfter",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/diningRoomBeforeAfterTN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/diningRoomBeforeAfter.webp",
            altText: "before and after of remodeled dining room",
         },
         {
            imgId: 36,
            type: "beforeAfter",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoom1BeforeAfterTN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoom1BeforeAfter.webp",
            altText: "before and after of renovated primary bathroom",
         },
         {
            imgId: 35,
            type: "beforeAfter",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/foyerBeforeAfterTN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/foyerBeforeAfter.webp",
            altText: "before and after of remodeled foyer",
         },
         {
            imgId: 34,
            type: "beforeAfter",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomUpstairs1BeforeAfter1TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomUpstairs1BeforeAfter1.webp",
            altText: "before and after of renovated secondary bathroom",
         },
         {
            imgId: 33,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/entranceTN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/entrance.webp",
            altText: "remodeled grand entrance",
         },
         {
            imgId: 32,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/foyerTN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/foyer.webp",
            altText: "renovated foyer",
         },
         {
            imgId: 31,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/livingRoom1TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/livingRoom1.webp",
            altText: "remodeled main living space photo 1",
         },
         {
            imgId: 30,
            type: "after",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/livingRoom2TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/livingRoom2.webp",
            altText: "remodeled main living space photo 2",
         },
         {
            imgId: 29,
            type: "after",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/kitchen1TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/kitchen1.webp",
            altText:
               "renovated large open concept kitchen with massive island photo 1",
         },
         {
            imgId: 28,
            type: "after",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/kitchen2TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/kitchen2.webp",
            altText:
               "renovated large open concept kitchen with massive island photo 2",
         },
         {
            imgId: 27,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/kitchen3TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/kitchen3.webp",
            altText:
               "renovated large open concept kitchen with massive island photo 3",
         },
         {
            imgId: 26,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/wetbarTN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/wetbar.webp",
            altText: "remodeled wetbar off the kitchen and pantry",
         },
         {
            imgId: 25,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/pantryTN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/pantry.webp",
            altText: "renovated butler's pantry off the kitchen",
         },
         {
            imgId: 24,
            type: "after",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/diningRoom1TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/diningRoom1.webp",
            altText: "remodeled dining room photo 1",
         },
         {
            imgId: 23,
            type: "after",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/diningRoom2TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/diningRoom2.webp",
            altText: "remodeled dining room photo 2",
         },
         {
            imgId: 22,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomI1TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomI1.webp",
            altText: "renovated primary bathroom photo 1",
         },
         {
            imgId: 21,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomI2TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomI2.webp",
            altText: "renovated primary bathroom photo 2",
         },
         {
            imgId: 20,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomI3TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomI3.webp",
            altText: "renovated primary bathroom photo 3",
         },
         {
            imgId: 19,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomI4TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomI4.webp",
            altText: "renovated primary bathroom photo 4",
         },
         {
            imgId: 18,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomI5TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomI5.webp",
            altText: "renovated primary bathroom photo 5",
         },
         {
            imgId: 17,
            type: "after",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bedRoomIITN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bedRoomII.webp",
            altText: "remodeled bedroom 2",
         },
         {
            imgId: 16,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomII1TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomII1.webp",
            altText: "renovated bathroom 2 photo 1",
         },
         {
            imgId: 15,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomII2TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomII2.webp",
            altText: "renovated bathroom 2 photo 2",
         },
         {
            imgId: 14,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomII3TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomII3.webp",
            altText: "renovated bathroom 2 photo 3",
         },
         {
            imgId: 13,
            type: "after",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bedRoomIII1TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bedRoomIII1.webp",
            altText: "remodeled bedroom 3 photo 1",
         },
         {
            imgId: 12,
            type: "after",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bedRoomIII2TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bedRoomIII2.webp",
            altText: "remodeled bedroom 3 photo 2",
         },
         {
            imgId: 11,
            type: "after",
            orientation: "landscape",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bedRoomIII3TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bedRoomIII3.webp",
            altText: "remodeled bedroom 3 photo 3",
         },
         {
            imgId: 10,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomIII1TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomIII1.webp",
            altText: "renovated cozy 3rd bathroom photo 1",
         },
         {
            imgId: 9,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomIII2TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomIII2.webp",
            altText: "renovated cozy 3rd bathroom photo 2",
         },
         {
            imgId: 8,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomIV1TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomIV1.webp",
            altText: "renovated 4th bathroom with double vanity",
         },
         {
            imgId: 7,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomIV2TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomIV2.webp",
            altText: "renovated 4th bathroom where closet converted to shower",
         },
         {
            imgId: 6,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomIV3TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/bathRoomIV3.webp",
            altText: "renovated shower in 4th bathroom",
         },
         {
            imgId: 5,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/deck1TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/deck1.webp",
            altText: "deck with renovated ceiling photo 1",
         },
         {
            imgId: 4,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/deck2TN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/deck2.webp",
            altText: "deck with renovated ceiling photo 2",
         },
         {
            imgId: 3,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/laundryTN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/laundry.webp",
            altText: "remodeled laundry room",
         },
         {
            imgId: 2,
            type: "after",
            orientation: "portrait",
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/livingRoomIITN.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/livingRoomII.webp",
            altText: "cozy living space off the kitchen",
         },
      ],
   },
];

const galleries = [
   {
      id: 1,
      galleryName: "Kitchens",
      galleryHeroImg:
         "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-2022128-IMG_3574.webp",
      galleryImgs: [
         {
            imgId: 143,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-143tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-143.webp",
            altText:
               "different angle of newly remodeled kitchen's butler pantry image with modern pine shaker cabinets and open shelves",
         },
         {
            imgId: 142,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-142tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-142.webp",
            altText:
               "image of newly remodeled kitchen's butler pantry with modern pine shaker cabinets and open shelves",
         },
         {
            imgId: 141,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-141tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-141.webp",
            altText:
               "image of newly remodeled kitchen with modern white shaker cabinets with glass uppers",
         },
         {
            imgId: 140,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-140tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-140.webp",
            altText:
               "image of newly remodeled kitchen with modern white shaker cabinets, new counter tops, and extra large island",
         },
         {
            imgId: 138,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-138-IMG_6234tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-138-IMG_6234.webp",
            altText:
               "image of newly added modern white shaker pantry cabinets with crown molding",
         },
         {
            imgId: 137,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-137-IMG_6233tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-137-IMG_6233.webp",
            altText:
               "image of entire view of remodeled kitchen with modern white shaker cabinets, crown molding, neutral herringbone tile backsplash, extra large island that seats 4, and white quartz countertop with a little veining",
         },
         {
            imgId: 116,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-116-IMG_4605tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-116-IMG_4605.webp",
            altText:
               "renovated kitchen with modern white shaker cabinets, subway tile backsplash, and countertop",
         },
         {
            imgId: 113,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-113-IMG_0222tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-113-IMG_0222.webp",
            altText:
               "modern white renovated kitchen with shaker cabinets, crown molding, and small butcher block top island",
         },
         {
            imgId: 106,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-106-IMG_0453tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-106-IMG_0453.webp",
            altText:
               "modern renovated kitchen with white shaker cabinets, tile backsplash, and countertops",
         },
         {
            imgId: 104,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-104-IMG_6526tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-104-IMG_6526.webp",
            altText:
               "modern renovated kitchen with white shaker cabinets, small island with seating for 2, and countertops, and crown molding",
         },
         {
            imgId: 101,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-I101-MG_0322tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-101-IMG_0322.webp",
            altText:
               "modern renovated kitchen with white shaker cabinets, tile backsplash, and countertops",
         },
         {
            imgId: 99,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-99tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-99.webp",
            altText:
               "modern white renovated kitchen with shaker cabinets, crown molding, and small island",
         },
         {
            imgId: 98,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-98tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-98.webp",
            altText:
               "modern white renovated kitchen with shaker cabinets with some see-through doors, crown molding, and elegant backsplash",
         },
         {
            imgId: 96,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-96tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-96.webp",
            altText:
               "modern white kitchen with some see-through cabinet doors and new ceiling can lights",
         },
         {
            imgId: 95,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-95tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-95.webp",
            altText:
               "renovated minimalistic kitchen with newly installed double ovens",
         },
         {
            imgId: 94,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-94tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-94.webp",
            altText:
               "modern white renovated kitchen with wrap around counter top and lower cabinets",
         },
         {
            imgId: 93,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-93tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-93.webp",
            altText:
               "renovated minimalistic white kitchen with electric cooktop and newly installed exhaust hood and new island",
         },
         {
            imgId: 92,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-92tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-92.webp",
            altText:
               "renovated minimalistic white kitchen with electric cooktop and newly installed exhaust hood",
         },
         {
            imgId: 91,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-91tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-91.webp",
            altText:
               "modern white renovated kitchen with see-through cabinet doors",
         },
         {
            imgId: 90,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-90tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-90.webp",
            altText:
               "modern white renovated kitchen with wrap around counter and open lower shelves and cabinets",
         },
         {
            imgId: 83,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-83tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-83.webp",
            altText:
               "modern white renovated L-shaped kitchen island with shaker cabinets, crown molding, and large island",
         },
         {
            imgId: 61,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-61-20230409-2of2tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-61-20230409-2of2.webp",
            altText:
               "renovated horseshoe kitchen island with built-in microwave",
         },
         {
            imgId: 60,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-60-20230409-1of2tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-60-20230409-1of2.webp",
            altText:
               "renovated horseshoe kitchen island with built-in microwave",
         },
         {
            imgId: 58,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-srd-20230315-58tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-srd-20230315-58.webp",
            altText:
               "renovated L-shape kitchen with built-in microwave at the corner",
         },
         {
            imgId: 57,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-srd-20230315-57tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-srd-20230315-57.webp",
            altText:
               "renovated L-shape kitchen with built-in microwave and cooktop",
         },
         {
            imgId: 56,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-srd-20230315-56tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-srd-20230315-56.webp",
            altText:
               "renovated kitchen showing wall with double ovens and refrigerator cabinets",
         },
         {
            imgId: 50,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-50-4of9-20230301tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-4of9-20230301.webp",
            altText: "renovated kitchen with lower cabinets and open shelves",
         },
         {
            imgId: 49,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-49-3of9-20230301tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-3of9-20230301.webp",
            altText: "renovated kitchen peninsula with built in microwave",
         },
         {
            imgId: 48,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-48-2of9-20230301tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-2of9-20230301.webp",
            altText: "renovated kitchen with lower cabinets and open shelves",
         },
         {
            imgId: 20,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-20-4of4-20230216tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-4of4-20230216.webp",
            altText:
               "renovated kitchen with white shaker cabinets, and glass doors, full view",
         },
         {
            imgId: 19,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-19-3of4-20230216tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-3of4-20230216.webp",
            altText:
               "renovated kitchen with white shaker cabinets and glass doors",
         },
         {
            imgId: 18,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-18-2of4-20230216tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-2of4-20230216.webp",
            altText:
               "renovated kitchen with contemporary cabinets, inside kitchen view",
         },
         {
            imgId: 17,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-17-1of4-20230216tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-1of4-20230216.webp",
            altText:
               "renovated kitchen with white shaker cabinets, entrance view",
         },
         {
            imgId: 16,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-16-2022128-IMG_6832tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-2022128-IMG_6832.webp",
            altText:
               "cozy kitchen with small square-shaped island and recessed lighting",
         },
         {
            imgId: 15,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-15-2022128-IMG_6649tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-2022128-IMG_6649.webp",
            altText:
               "cozy kitchen with small square-shaped island and recessed lighting",
         },
         {
            imgId: 14,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-14-2022128-IMG_5457tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-2022128-IMG_5457.webp",
            altText: "renovated u-shape kitchen with white shaker cabinets",
         },
         {
            imgId: 13,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-13-2022128-IMG_3574tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-2022128-IMG_3574.webp",
            altText:
               "renovated l-shaped kitchen island and adjacent counter with range and microwave plus white shaker cabinets",
         },
         {
            imgId: 12,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-12-2022128-6A5CCA0C-C719-4F95-964E-BB668EE2A312tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-2022128-6A5CCA0C-C719-4F95-964E-BB668EE2A312.webp",
            altText:
               "l-shaped kitchen renovation with large sink, electric cook top, modern vent, built in double ovens, and white contemporary cabinets",
         },
         {
            imgId: 11,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-11-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w877188285od-w1024_h768_x2tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w877188285od-w1024_h768_x2.webp",
            altText:
               "wide angle view of upscale kitchen renovation showing new contrasting island with vegetable sink and se",
         },
         {
            imgId: 10,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-10-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w778763962od-w1024_h768_x2tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w778763962od-w1024_h768_x2.webp",
            altText:
               "upscale kitchen renovation with eat-in kitchen that has a large table that seats 6",
         },
         {
            imgId: 9,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-9-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w578663226od-w1024_h768_x2tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w578663226od-w1024_h768_x2.webp",
            altText:
               "another view of upscale kitchen renovation with new contrasting island, vegetable sink, built-in microwave, lots of drawers for storage plus seating for 2",
         },
         {
            imgId: 8,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-8-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w399108462od-w1024_h768_x2tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w399108462od-w1024_h768_x2.webp",
            altText:
               "upscale kitchen renovation with new contrasting island, vegetable sink, built-in microwave, lots of drawers for storage plus seating for 2",
         },
         {
            imgId: 7,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-7-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w3579291092od-w1024_h768_x2tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w3579291092od-w1024_h768_x2.webp",
            altText:
               "uk-SRD-7-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w3579291092od-w1024_h768_x2tn",
         },
         {
            imgId: 6,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-6-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w3211054771od-w1024_h768_x2tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w3211054771od-w1024_h768_x2.webp",
            altText:
               "uk-SRD-7-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w3579291092od-w1024_h768_x2tn",
         },
         {
            imgId: 5,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-5-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w2712799767od-w1024_h768_x2tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w2712799767od-w1024_h768_x2.webp",
            altText:
               "renovated butler's pantry with contemporary cabinets that looks out to the main dining room",
         },
         {
            imgId: 4,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-4-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w3579291092od-w1024_h768_x2tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w2353229615od-w1024_h768_x2.webp",
            altText:
               "renovated butler's pantry with contemporary cabinets that looks out to the main dining room",
         },
         {
            imgId: 3,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-3-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w1124515428od-w1024_h768_x2tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-4205HigelAve-7c4189347ffc0031fe3496d6f0a65719l-w1124515428od-w1024_h768_x2.webp",
            altText:
               "upscale kitchen remodel with contemporary cabinets, built-in cooktop with vent, pot filler, and double oven",
         },
         {
            imgId: 2,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-2-IMG_2427tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-IMG_2427.webp",
            altText:
               "cozy kitchen island with built-in appliances perfectly positioned",
         },
         {
            imgId: 1,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-SRD-1-IMG_2431tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/k-IMG_2431.webp",
            altText:
               "elegantly designed and meticulously constructed kitchen remodel",
         },
      ],
   },
   {
      id: 2,
      galleryName: "Baths",
      galleryHeroImg:
         "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-IMG_1200.webp",
      galleryImgs: [
         {
            imgId: 135,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-135-IMG_4840tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-135-IMG_4840.webp",
            altText:
               "makeup table with countertop between two tall white shaker cabinets",
         },
         {
            imgId: 133,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-133-IMG_4534tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-133-IMG_4534.webp",
            altText:
               "makeup table with lighted mirror, countertop and shaker cabinets and drawers",
         },
         {
            imgId: 123,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-123-IMG_3761tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-123-IMG_3761.webp",
            altText:
               "walk-in shower with separate wand, accent tiles, and foot rest",
         },
         {
            imgId: 120,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-120-IMG_4878tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-120-IMG_4878.webp",
            altText: "lighted vanity mirrors with double sink and accent wall",
         },
         {
            imgId: 119,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-119-IMG_3353tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-119-IMG_3353.webp",
            altText: "double vanity, mirrors, and walk in shower",
         },
         {
            imgId: 118,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-118-IMG_0566tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-118-IMG_0566.webp",
            altText:
               "double vanity with drawers and cabinets, mirrors, and tall storage cabinet",
         },
         {
            imgId: 117,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-117-IMG_4620tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-117-IMG_4620.webp",
            altText:
               "walk in shower with niches, horizontal accent tiles, and sliding glass door",
         },
         {
            imgId: 115,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-115-IMG_2715tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-115-IMG_2715.webp",
            altText: "double vanity with drawers and cabinets, and mirrors",
         },
         {
            imgId: 110,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-110-IMG_1545tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-110-IMG_1545.webp",
            altText:
               "walk in shower with penny tile floor and small circular drain",
         },
         {
            imgId: 105,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-105-IMG_0442tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-105-IMG_0442.webp",
            altText:
               "walk in shower with penny tile floor, foot rest, accent vertical tiles, and grab bar",
         },
         {
            imgId: 103,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-103-IMG_0553tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-103-IMG_0553.webp",
            altText:
               "walk in shower with foot rest, rain head, shower wand, and shower, plus separate free standing tab",
         },
         {
            imgId: 97,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-97tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-97.webp",
            altText: "walk-in shower with foot rest and linear drain",
         },
         {
            imgId: 88,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-88tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-88.webp",
            altText:
               "elegant soaker tub with chandelier, mirror, and grab bars",
         },
         {
            imgId: 87,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-87tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-87.webp",
            altText: "double sink vanity and mirrors with black hardware",
         },
         {
            imgId: 86,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-86tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-86.webp",
            altText: "free standing soaker tub with grab bars",
         },
         {
            imgId: 84,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-84tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-84.webp",
            altText:
               "full remodel of bathroom and laundry room with large mirror, walk-in shower that has a square drain, and a folding table",
         },
         {
            imgId: 73,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-73tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-73.webp",
            altText:
               "remodeled bathroom with new floating double vanity and lighted mirrors",
         },
         {
            imgId: 72,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-72tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-72.webp",
            altText: "remodeled zero-entry walk-in shower with square drain",
         },
         {
            imgId: 71,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-71tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-71.webp",
            altText: "remodeled walk-in shower with linear drain",
         },
         {
            imgId: 70,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-70tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-70.webp",
            altText: "remodeled bathroom with new vanity and mirror",
         },
         {
            imgId: 69,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-69tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-69.webp",
            altText:
               "remodeled bathroom with floating vanity and walk-in shower with linear drain",
         },
         {
            imgId: 68,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-68tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-68.webp",
            altText:
               "remodeled walk-in, open shower with foot rest and glass partition",
         },
         {
            imgId: 67,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-67tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-67.webp",
            altText:
               "remodeled zero-entry shower with niche, foot rest, and glass partition",
         },
         {
            imgId: 66,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-66tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-66.webp",
            altText: "remodeled bathroom with soaker tub and floating shelves",
         },
         {
            imgId: 65,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-65tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-65.webp",
            altText: "remodeled bathroom with new vanity and soaker tub",
         },
         {
            imgId: 64,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-64tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-64.webp",
            altText:
               "remodeled zero-entry, walk-in, open shower with glass partition",
         },
         {
            imgId: 63,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-63tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-63.webp",
            altText: "remodeled shower with vertically stacked tiles",
         },
         {
            imgId: 59,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-59-20230406tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-59-20230406.webp",
            altText:
               "remodeled shower with vertically stacked tiles and niches",
         },
         {
            imgId: 54,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-54-9of9-20230301tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-9of9-20230301.webp",
            altText:
               "remodeled white walk-in shower with vertically stacked tiles and niche close up",
         },
         {
            imgId: 53,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-53-8of9-20230301tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-8of9-20230301.webp",
            altText:
               "remodeled white walk-in shower with vertically stacked tiles and niche close up",
         },
         {
            imgId: 52,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-52-6of9-20230301tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-6of9-20230301.webp",
            altText:
               "remodeled white walk-in shower with vertically stacked tiles, niche and blue accent tiles",
         },
         {
            imgId: 51,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-51-5of9-20230301tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-5of9-20230301.webp",
            altText:
               "remodeled white walk-in shower with vertically stacked tiles, niche and blue accent tiles",
         },
         {
            imgId: 46,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-46-20230217-IMG_7185tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-20230217-IMG_7185.webp",
            altText:
               "full bath remodel with double vanity, lighted medicine cabinets, two showers, horizontal tile accent in shower with extra long niche",
         },
         {
            imgId: 43,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-43-IMG_1200tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-IMG_1200.webp",
            altText:
               "full bath remodel with double vanity, lighted medicine cabinets, two showers, horizontal tile accent in shower with extra long niche",
         },
         {
            imgId: 24,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-24-20221229-IMG_1296tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-20221229-IMG_1296.webp",
            altText: "remodeled shower with small niche",
         },
         {
            imgId: 23,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-23-20221229-IMG_0408tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-20221229-IMG_0408.webp",
            altText: "remodeled powder room with wallpaper accent",
         },
         {
            imgId: 22,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-22-2022128-IMG_4799tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-2022128-IMG_4799.webp",
            altText:
               "open shower renovation with rain head, wand, and long vertical niche next to vertical tile accent",
         },
         {
            imgId: 21,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-21-2022128-IMG_4620tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-2022128-IMG_4620.webp",
            altText: "remodeled shower with horizontal tile accent and niches",
         },
         {
            imgId: 20,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-20-2022128-IMG_0449tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-2022128-IMG_0449.webp",
            altText: "remodeled powder room with tile accents",
         },
         {
            imgId: 19,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-19-2022128-CC905AAD-5019-45F4-8D86-BA805DBCEB30tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-2022128-CC905AAD-5019-45F4-8D86-BA805DBCEB30.webp",
            altText: "modern shower with corner seating, niche, and penny tile",
         },
         {
            imgId: 18,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-18-2022128-0E641AD9-DA73-475B-9390-76569AF63C06tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-2022128-0E641AD9-DA73-475B-9390-76569AF63C06.webp",
            altText: "bathroom double sink remodeled with sconces for lighting",
         },
         {
            imgId: 17,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-SRD-17-IMG_2441tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/b-IMG_2441.webp",
            altText:
               "beautiful bathroom remodel with free standing soaker tub and spacious open shower",
         },
      ],
   },
   {
      id: 3,
      galleryName: "Entertainment Centers",
      galleryHeroImg:
         "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-C43EF2D1-E07C-4F4B-8030-5AE239D017F3.webp",
      galleryImgs: [
         {
            imgId: 139,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-139-IMG_9104tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-139-IMG_9104.webp",
            altText:
               "modern light colored brick accent wall for a big screen tv with built in fireplace, and floating shelves",
         },
         {
            imgId: 85,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-85tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-85.webp",
            altText:
               "modern light colored brick accent wall for a big screen tv with built in fireplace, and floating shelves",
         },
         {
            imgId: 81,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-81tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-81.webp",
            altText:
               "modern light colored brick accent wall for a big screen tv and built in fireplace",
         },
         {
            imgId: 80,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-80tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-80.webp",
            altText:
               "modern stone accent wall for a big screen tv and built in fireplace",
         },
         {
            imgId: 79,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-79tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-79.webp",
            altText:
               "modern light colored brick accent wall for a big screen tv with built in fireplace, storage cabinets and floating shelves",
         },
         {
            imgId: 78,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-78tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-78.webp",
            altText:
               "brick columned accent wall with canned lights for a big screen tv with built in fireplace, and floating shelves",
         },
         {
            imgId: 77,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-77tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-77.webp",
            altText:
               "modern accent wall for a big screen tv, niches at the top, and built in fireplace at the bottom",
         },
         {
            imgId: 62,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-62-20230430-1of1tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-62-20230430-1of1.webp",
            altText:
               "modern stone accent wall with big screen tv and built in fireplace",
         },
         {
            imgId: 55,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-1of1-20230303tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-1of1-20230303.webp",
            altText:
               "modern stone accent wall with big screen tv, built in fireplace, and niche",
         },
         {
            imgId: 45,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-45-20230217-IMG_1952tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-20230217-IMG_1952.webp",
            altText:
               "brick columned accent wall with canned lights for a big screen tv with built in fireplace, and floating shelves",
         },
         {
            imgId: 43,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-43-IMG_4124tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-IMG_4124.webp",
            altText:
               "modern entertainment center feature wall with big screen tv and built in fireplace",
         },
         {
            imgId: 32,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-32-2022128-IMG_1433tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_1433.webp",
            altText:
               "remodeled brick accent wall with big screen tv and built in fireplace",
         },
         {
            imgId: 31,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-31-2022128-IMG_9515tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_9515.webp",
            altText:
               "brick wall accent with big screen tv and built in fireplace",
         },
         {
            imgId: 30,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-30-2022128-IMG_0448tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_0448.webp",
            altText:
               "modern stone accent wall with big screen tv and built in fireplace surrounded by floating shelves",
         },
         {
            imgId: 27,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-27-2022128-C6B10913-FEA7-4A38-8C7B-F5741AE08D34tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-C6B10913-FEA7-4A38-8C7B-F5741AE08D34.webp",
            altText:
               "remodeled brick accent wall with big screen tv and built in fireplace",
         },
         {
            imgId: 26,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-26-2022128-C43EF2D1-E07C-4F4B-8030-5AE239D017F3tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-C43EF2D1-E07C-4F4B-8030-5AE239D017F3.webp",
            altText:
               "renovated living room with marble accent big screen tv over built in fireplace surrounded by floating shelves",
         },
         {
            imgId: 25,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/e-SRD-25-2022128-9E5F7D50-5033-40BB-83DB-F1BB9C7691A2tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-9E5F7D50-5033-40BB-83DB-F1BB9C7691A2.webp",
            altText: "remodeled big screen TV wall with shiplap",
         },
      ],
   },
   {
      id: 4,
      galleryName: "Outdoors",
      galleryHeroImg:
         "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-2022128-IMG_1712.webp",
      galleryImgs: [
         {
            imgId: 131,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-131-IMG_0290tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-131-IMG_0290.webp",
            altText: "outdoor floor tiles on steps and landings",
         },
         {
            imgId: 130,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-130-IMG_9558tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-130-IMG_9558.webp",
            altText: "outdoor entrance arching doors",
         },
         {
            imgId: 129,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-129-IMG_8323tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-129-IMG_8323.webp",
            altText: "newly installed outdoor tile flooring and railings",
         },
         {
            imgId: 128,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-128-IMG_6215tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-128-IMG_6215.webp",
            altText: "outdoor decking",
         },
         {
            imgId: 125,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-125-IMG_4479tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-125-IMG_4479.webp",
            altText: "outdoor kitchen island",
         },
         {
            imgId: 124,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-124-4119FA03-0013-4B91-9178-E72AAF29DEE0tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-124-4119FA03-0013-4B91-9178-E72AAF29DEE0.webp",
            altText: "outdoor kitchen built in grill and countertop",
         },
         {
            imgId: 114,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-114-IMG_1915tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-114-IMG_1915.webp",
            altText: "outdoor entrance doors",
         },
         {
            imgId: 74,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-74tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-74.webp",
            altText: "renovated boat dock",
         },
         {
            imgId: 42,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-SRD-42-2022128-IMG_171tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-2022128-IMG_1712.webp",
            altText:
               "new lap pool in a lanai with plenty of room for 3 lounge chairs",
         },
         {
            imgId: 41,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-SRD-41-2022128-IMG_1230tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/o-2022128-IMG_1230.webp",
            altText:
               "cozy renovated outdoor space with ceiling fan, wall mounted tv, 3 wicker chairs with cushions and coffee table",
         },
         {
            imgId: 38,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-38-2022128-IMG_4876tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_4876.webp",
            altText: "outdoor wood ceiling with recessed lighting",
         },
         {
            imgId: 34,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-34-2022128-IMG_3569tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_3569.webp",
            altText:
               "outdoor wood accent ceiling with recessed lighting and ceiling fan",
         },
         {
            imgId: 28,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-28-2022128-IMG_0135tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_0135.webp",
            altText: "wood ceiling sun room",
         },
      ],
   },
   {
      id: 5,
      galleryName: "Flooring",
      galleryHeroImg:
         "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_3576.webp",
      galleryImgs: [
         {
            imgId: 134,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-134-IMG_4799tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-134-IMG_4799.webp",
            altText: "newly installed wood flooring and baseboards",
         },
         {
            imgId: 129,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-129-IMG_8323tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-129-IMG_8323.webp",
            altText: "newly installed outdoor tile flooring and railings",
         },
         {
            imgId: 126,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-126-IMG_2125tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-126-IMG_2125.webp",
            altText: "newly installed wood flooring",
         },
         {
            imgId: 122,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-122-IMG_3105tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-122-IMG_3105.webp",
            altText: "newly installed wood-like floor tiles",
         },
         {
            imgId: 111,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-111-IMG_0133tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-111-IMG_0133.webp",
            altText: "newly installed wood flooring",
         },
         {
            imgId: 100,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-SRD-100tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-SRD-100.webp",
            altText: "newly installed wood flooring in a spacious living room",
         },
         {
            imgId: 89,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-SRD-89tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-SRD-89.webp",
            altText:
               "newly installed wood flooring throughout the raised dining room and lower living room areas",
         },
         {
            imgId: 82,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-SRD-82tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-SRD-82.webp",
            altText: "luxury vinyl flooring",
         },
         {
            imgId: 44,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-SRD-44-20230217-IMG_2971tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-20230217-IMG_2971.webp",
            altText: "luxury vinyl flooring",
         },
         {
            imgId: 39,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-39-2022128-IMG_5579tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_5579.webp",
            altText: "wooden stairs that widen at the base",
         },
         {
            imgId: 37,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-37-2022128-IMG_3913tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_3913.webp",
            altText: "newly renovated stair well with wooden steps",
         },
         {
            imgId: 36,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-36-2022128-IMG_3576tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_3576.webp",
            altText: "newly installed wood flooring",
         },
         {
            imgId: 35,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/f-SRD-30-2022128-IMG_3570tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_3570.webp",
            altText: "newly installed wood flooring",
         },
      ],
   },
   {
      id: 6,
      galleryName: "Dry & Wet Bars",
      galleryHeroImg:
         "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-75.webp",
      galleryImgs: [
         {
            imgId: 76,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-76tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-76.webp",
            altText: "wet bar",
         },
         {
            imgId: 75,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-75tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-75.webp",
            altText: "dry bar",
         },
         {
            imgId: 47,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-47-7of9-20230301tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-7of9-20230301.webp",
            altText: "bar area with bar height counter",
         },
      ],
   },
   {
      id: 7,
      galleryName: "Laundry",
      galleryHeroImg:
         "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_5627.webp",
      galleryImgs: [
         {
            imgId: 112,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/l-112-IMG_5959tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/l-112-IMG_5959.webp",
            altText: "laundry countertop and cabinets",
         },
         {
            imgId: 40,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-40-2022128-IMG_5627tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_5627.webp",
            altText: "remodeled garage with laundry room, cabinets, and sink",
         },
         {
            imgId: 33,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-33-20221229-IMG_2688tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-20221229-IMG_2688.webp",
            altText: "renovated open linen closet",
         },
      ],
   },
   {
      id: 8,
      galleryName: "Interior Doors",
      galleryHeroImg:
         "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_0142.webp",
      galleryImgs: [
         {
            imgId: 137,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-137-IMG_5848tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-137-IMG_5848.webp",
            altText: "5 panel pocket door",
         },
         {
            imgId: 136,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-136-IMG_5240tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-136-IMG_5240.webp",
            altText: "4 panel frosted glass double doors",
         },
         {
            imgId: 132,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-132-IMG_4183tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-132-IMG_4183.webp",
            altText: "pantry sliding door",
         },
         {
            imgId: 127,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-127-IMG_5288tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-127-IMG_5288.webp",
            altText: "closet sliding doors",
         },
         {
            imgId: 121,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-121-IMG_1806tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-121-IMG_1806.webp",
            altText: "sliding bedroom mirrored closet doors",
         },
         {
            imgId: 109,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-109-IMG_0676tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-109-IMG_0676.webp",
            altText: "3 panel frosted glass door",
         },
         {
            imgId: 108,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-108-IMG_0142tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-108-IMG_0142.webp",
            altText: "5 panel frosted glass door",
         },
         {
            imgId: 107,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-107-IMG_0141tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-107-IMG_0141.webp",
            altText: "5 panel frosted glass pocket door",
         },
         {
            imgId: 102,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-102-IMG_5711tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/d-102-IMG_5711.webp",
            altText: "white barn door with black hardware",
         },
         {
            imgId: 29,
            tn: "https://s3.amazonaws.com/sarasotaremodeling.com-images/z-SRD-29-2022128-IMG_0142tn.webp",
            img: "https://s3.amazonaws.com/sarasotaremodeling.com-images/c-2022128-IMG_0142.webp",
            altText: "5 panel frosted glass door",
         },
      ],
   },
];

const articles = [
   {
      id: 12,
      title: "Florida's Year-Round Paradise: Sunroom Additions and Lanais",
      description:
         "Florida’s enviable weather is a constant draw for residents and visitors alike, offering sunshine and warmth for most of the year. Did you know the average temperature in the Tampa Bay area is  ...",
      published: "Published August 29, 2024",
      length: "4 min read",
      link: "blog-post-2408.html",
   },
   {
      id: 11,
      title: "Hurricane-Ready Homes: Essential Tips for Florida Residents",
      description:
         "Living in Florida offers many perks, from sunny beaches to vibrant communities and attractions such as Disney World. However, the state's coastal location also means facing the yearly threat of hurricanes. As a Florida resident, preparing your home for hurricane season ...",
      published: "Published April 30, 2024",
      length: "2 min read",
      link: "blog-post-2404.html",
   },
   {
      id: 10,
      title: "Florida Tropical Oasis Bathroom Remodeling Trends",
      description:
         "Bathrooms in Florida are more than just a functional space; they can be a sanctuary where we begin and end our days. Florida’s tropical ambiance has homeowners embracing bathroom remodeling trends that transform their spaces into luxurious tropical oases. If you're looking for a soothing and stylish retreat as your Florida bathroom ...",
      published: "Published February 16, 2024",
      length: "2 min read",
      link: "blog-post-2402.html",
   },
   {
      id: 9,
      title: "The Art of Florida Outdoor Living",
      description:
         "Florida rightfully earned the nickname Sunshine State with its seemingly endless days of sunshine throughout the year. Many residents embrace the outdoor lifestyle, installing pools and patios to enjoy the warm temperatures in the day and sometimes cool evenings. It takes experience and ...",
      published: "Published January 2, 2024",
      length: "2 min read",
      link: "blog-post-2401.html",
   },
   {
      id: 8,
      title: "Revamping Your Florida Kitchen: Modern Designs for Sunshine State Living",
      description:
         "The kitchen is often considered the heart of the home, and in Florida, where the sun shines year-round, it's even more crucial to have a kitchen that reflects the state's vibrant lifestyle...",
      published: "Published December 15, 2023",
      length: "2 min read",
      link: "blog-post-2312.html",
   },
   {
      id: 7,
      title: "Benefits of an Open Floor Plan",
      description:
         "When it comes to home remodeling, one popular trend that has gained significant traction in recent years throughout the country is the open floor plan. An open floor plan ...",
      published: "Published August 21, 2023",
      length: "2 min read",
      link: "blog-post-2307.html",
   },
   {
      id: 6,
      title: "Exploring Different Types of Floor Plans",
      description:
         "When planning a home remodel, one of the most crucial decisions you'll face is determining the floor plan of your home. The floor plan dictates ...",
      published: "July 6, 2023",
      length: "2 min read",
      link: "blog-post-2306.html",
   },
   {
      id: 5,
      title: "What’s Aging-in-place Remodeling?",
      description:
         "As people age, they may face challenges with mobility, balance, accessibility, and safety in their homes. Aging-in-place remodeling refers to ...",
      published: "May 31, 2023",
      length: "2 min read",
      link: "blog-post-2305.html",
   },
   {
      id: 4,
      title: "Modernizing your home: ideas for a contemporary remodel",
      description:
         "If you're looking to modernize your home and give it a fresh new look, a contemporary remodel may be just what you need. A contemporary remodel can ...",
      published: "May 2, 2023",
      length: "2 min read",
      link: "blog-post-2304.html",
   },
   {
      id: 3,
      title: "Planning a Successful Renovation: Tips and Strategies",
      description:
         "When it comes to home improvement projects, it's critical to the success of your project to choose a licensed contractor. A licensed contractor is a professional who ...",
      published: "April 6, 2023",
      length: "2 min read",
      link: "blog-post-2303.html",
   },

   {
      id: 2,
      title: "Why is the final cost higher than the estimate?",
      description:
         "Surprised when the final cost of a remodel project is higher than the original estimate? Construction projects can be complex. At times, projects involve many factors that affect the project's final cost. One of the most common issues ...",
      published: "March 2, 2022",
      length: "2 min read",
      link: "blog-post-2302.html",
   },
   {
      id: 1,
      title: "Always Hire a Licensed Contractor",
      description:
         "When it comes to home improvement projects, it's critical to the success of your project to choose a licensed contractor. A licensed contractor is a professional who ...",
      published: "January 22, 2023",
      length: "2 min read",
      link: "blog-post-2301.html",
   },
];

export default function App() {
   return (
      <div className="text-white h-dvh">
         <BrowserRouter>
            <CookieConsentBanner />
            <Toaster />
            <Routes>
               <Route element={<AppLayout />}>
                  <Route index element={<Navigate replace to="/home" />} />
                  <Route path="home" element={<Home />} />
                  <Route
                     path="services"
                     element={<Services services={services} />}
                  />
                  <Route
                     path="gallery"
                     element={<Gallery galleries={galleries} />}
                  />
                  <Route path="contact" element={<Contact />} />
                  <Route
                     path="feature"
                     element={<Feature features={features} />}
                  />
                  <Route path="blog" element={<Blog articles={articles} />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route
                     path="reviews"
                     element={<Reviews galleries={galleries} />}
                  />
                  <Route path="pics" element={<PhotoShoot />} />
                  <Route path="*" element={<PageNotFound />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}
