export const createAd = async (adName, adDescription, adPrice, adState, imgBase64) => {
  
    const token = localStorage.getItem("token");
  
    const response = await fetch("http://localhost:8000/api/ads", {
        method: "POST",
        body: JSON.stringify({
            name: adName,
            description: adDescription,
            price: adPrice,
            state: adState,
            image: imgBase64
        }),
        headers: {
            "Content-type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });
  
    if (!response.ok) {
        const data = await response.json();
        throw new Error("Failed to create the ad")
    }
}