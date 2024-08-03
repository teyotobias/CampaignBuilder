const onSubmit = async (data) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzt0ukh_caePkYx3A5ntGRy3vEGj-XioCovAqWcWb-ldaj56Yoe0NESUcaOIz03YbZx/exec",
      {
        method: "POST",
        mode: "no-cors", // May need to adjust depending on CORS settings
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Error:", error);
  }
};
