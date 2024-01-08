import { useState } from "react";
import "./Modal.css";

export default function Modal(productData) {
  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    productId: productData.Id,
    productName: productData.Name,
    productPrice: productData.Price,
    productImageUrl: productData.ImageUrl,
    isPopular: productData.IsPopular,
    isRecommended: productData.IsRecommended,
  });

  const {
    productId,
    productName,
    productPrice,
    productImageUrl,
    isPopular,
    isRecommended,
  } = formData;

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your logic for submitting the form data here

    // For demonstration purposes, you can clear the form data and close the modal
    setFormData({
      productId: "",
      productName: "",
      productPrice: "",
      productImageUrl: "",
      isPopular: false,
      isRecommended: false,
    });
    toggleModal();
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="btn-modal text-orange-500 py-1 mr-1"
      >
        Add More
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="productId">Product ID:</label>
                <input type="text" id="productId" value={productId} />
              </div>
              <div>
                <label htmlFor="productName">Product Name:</label>
                <input type="text" id="productName" value={productName} />
              </div>
              <div>
                <label htmlFor="productPrice">Product Price:</label>
                <input type="text" id="productPrice" value={productPrice} />
              </div>
              <div>
                <label htmlFor="productImageUrl">Product Image URL:</label>
                <input
                  type="text"
                  id="productImageUrl"
                  value={productImageUrl}
                />
              </div>
              <div>
                <label htmlFor="isPopular">Is Popular:</label>
                <input
                  type="text"
                  id="isPopular"
                  value={isPopular ? "Yes" : "No"}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="isRecommended">Is Recommended:</label>
                <input
                  type="text"
                  id="isRecommended"
                  value={isRecommended ? "Yes" : "No"}
                  onChange={handleInputChange}
                />
              </div>
              <button type="submit">Submit</button>
            </form>
            <button className="close-modal" onClick={toggleModal}>
              CLOSE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
