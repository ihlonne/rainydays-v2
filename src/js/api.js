async function loadInfo() {
    const response = await fetch('https://v2.api.noroff.dev/rainy-days');
    const data = await response.json();

    return data;
}

document.addEventListener('DOMContentLoaded', async () => {
    let data = [];
    try {
        data = await loadInfo();
    } catch (e) {
        console.log('Error!');
        console.log(e);
    }

    console.log(data.image[0]);
});
