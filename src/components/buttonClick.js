export function btnClickCounter(element) {

    let counter = 0;

    const setCounter = (count) => {
        counter = count;
        element.innerHTML = counter;
    }

    element.addEventListener('click', () => {
        setCounter(++counter)
    })

}