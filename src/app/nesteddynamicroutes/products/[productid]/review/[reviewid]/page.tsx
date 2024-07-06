import React from "react";

function ReviewDetails({
  params,
}: {
  params: { productid: string; reviewid: string };
}) {
  return (
    <div>
      Review {params.reviewid} for product {params.productid}
    </div>
  );
}

export default ReviewDetails;
