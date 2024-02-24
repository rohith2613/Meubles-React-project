import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api" ;

export const customFetch = axios.create({
  baseURL: productionUrl,
});


export const formatPrice= (price)=>{
  const rupeesAmount = new Intl.NumberFormat("en-IN",{
    style:'currency',
    currency:"INR"
  }).format(price);
  return rupeesAmount;

}