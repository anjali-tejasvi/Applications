const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp_real_value = document.getElementById('temp_real_value');
const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    
    if(cityVal === ""){
        city_name.innerText = `please enter a city name before search`;
        datahide.classList.add('data_hide');
    }
    else{
       try{
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=0b5fec1cc9b7999d741ce6adfa4003e7`
        const response =  await fetch(url);
        const data = await response.json();
        const arrData = [data];

        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real_value.innerText = arrData[0].main.temp;
        const tempMood = arrData[0].weather[0].main;

        //condition to check sunny or cloudy
        if(tempMood == 'Clear'){
            temp_status.innerHTML = 
            "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }else if (tempMood === "Clouds"){
            temp_status.innerHTML = 
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
        }else if(tempMood === "Rain"){
            temp_status.innerHTML = 
            "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
        }else{
            temp_status.innerHTML = 
            "<i class='fas fa-sun' style='color: #f1f2f6;'></i>";
        }
        datahide.classList.remove('data_hide');
       }catch(err){
        console.log(err)
        city_name.innerText = `please enter city name properly`;
        datahide.classList.add('data_hide');
       }

    }


}

submitBtn.addEventListener('click',getInfo);