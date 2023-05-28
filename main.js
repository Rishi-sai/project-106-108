//https://teachablemachine.withgoogle.com/models/iUjPxsTSn/
function startClassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/iUjPxsTSn/model.json',modelReady);
    
}
function modelReady() {
    classifier.classify(gotResults);
    
}
dog = 0;
cat = 0;
lion = 0;
cow = 0;
function gotResults(error,results) {
    if (error) {
      console.error(error);  
    }else{
        console.log(results);

        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML="detected dog =" + dog , "detected cat =" + cat, "detected cow =" + cow , "detected lion = " + lion;
        document.getElementById("result_sound").innerHTML="The sound is"+results[0].label;
        document.getElementById("result_label").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_sound").style.color="rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        img=document.getElementById('img');
        

        if (results[0].label == "Barking") {
            img.src='dog.avif';
            dog = dog + 1;
            
    }else if(results[0].label == "Meowing"){
        img.src='cat.jpg';
        cat = cat + 1;
            
    }else if(results[0].label == "Roar"){
        img.src='lion.jpeg';
        lion = lion + 1;
            
    }else if(results[0].label == "Background Noise"){
        img.src='dd5ed82b-b105-4b93-806f-1f9e718b56ec.png';
        lion = lion + 1;
            
    }
    else{
        img.src='cow.jpg';
        cow = cow + 1;
            
    }
        
    }

}