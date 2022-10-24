const mycomponent = {
    data(){
        return {
            date : null
        }
    }
}

const app = Vue.createApp(mycomponent).mount('#app');

const input = document.querySelector('input');
const text = document.getElementById('selected');

input.addEventListener('change', updateValue);

function updateValue(e) {
    document.getElementById('daysSince').hidden = true;
    document.getElementById('daysTo').hidden = true;
    document.getElementById('happyBirthday').hidden = true;
    document.getElementById('invalid').hidden = true;
    let today = new Date();
    let birthday = new Date(text.innerText);
    if(birthday > today){
        document.getElementById('invalid').removeAttribute('hidden');
    }
    else {
        let diffTime = Math.abs(today - birthday);
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
        document.getElementById('days').innerHTML = diffDays;
        document.getElementById('daysSince').removeAttribute('hidden');

        let tempBirthday = today;
        tempBirthday.setMonth(birthday.getMonth());
        tempBirthday.setDate(birthday.getDate());
        today = new Date();
        if(today > tempBirthday){
            let nextBirthday = new Date(today.getFullYear() + 1, birthday.getMonth(), birthday.getDate());
            diffTime = Math.abs(nextBirthday - today);
            diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
            document.getElementById('daysLeft').innerHTML = diffDays;
            document.getElementById('daysTo').removeAttribute('hidden');
        }
        else if(today < tempBirthday){
            let nextBirthday = new Date(today.getFullYear(), birthday.getMonth(), birthday.getDate());
            diffTime = Math.abs(nextBirthday - today);
            diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) - 1;
            document.getElementById('daysLeft').innerHTML = diffDays;
            document.getElementById('daysTo').removeAttribute('hidden');
        }
        else{
            document.getElementById('happyBirthday').removeAttribute('hidden');
        }
    }
}