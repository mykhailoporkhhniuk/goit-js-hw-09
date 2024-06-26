const formData = {
    email: "",
    message: "",
}

function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}

function loadFromLS(key) {
    const json = localStorage.getItem(key);
    try {
        const data = JSON.parse(json);
        return data;
    } catch {
        return json;
    }
}

const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    saveToLS('feedback-form-state', formData);
})

const data = loadFromLS('feedback-form-state');
form.elements.email.value = data?.email || '';
form.elements.message.value = data?.message || '';

form.addEventListener('submit', (e) => {
    e.preventDefault();
     if (formData.email === '' || formData.message === '') {
        alert('Fill please all fields');
    }
    formData.email = form.elements.email.value;
    formData.message = form.elements.message.value;
    console.log(formData);
    form.reset();
    localStorage.removeItem('feedback-form-state');
})