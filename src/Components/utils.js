export const generateSlug = (productName, productId) => {
    const nameSlug = productName
      .toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '');

    const encodedId = btoa(productId); // Encode the product ID

    return `${nameSlug}-${encodedId}`;
  };