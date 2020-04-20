const removeAdTwt = ()=>{
    document.querySelectorAll('div[data-testid="placementTracking"]').forEach(item=>{item.style.display='none'});
    console.log('Temizlendi');
}
removeAdTwt();
window.addEventListener("scroll", removeAdTwt);
