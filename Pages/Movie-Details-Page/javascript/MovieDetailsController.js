import { makeReview } from "./makeReview";
import { Review } from "../../../Data-Models/ReviewsDataModel";

function submitReview(event){
    event.preventDefault();
    let reviewData=event.target;
    let reviewerId=JSON.parse(sessionStorage.getItem(""))
    let review=new Review()

}

let reviewForm=document.getElementById("Review-Submit");
    reviewForm.addEventListener("submit",submitReview)