function refreshNumberOfOpenItems(selector, number) {
    document.querySelector(selector).lastChild.textContent = number;
}

export default refreshNumberOfOpenItems;