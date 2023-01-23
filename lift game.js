let floor=0;
let floorArray = []
function GroundFloor(floorValue){
    floorArray.push(floorValue)
    if(floor==1){

        let a=document.getElementById('lift');
        a.className='groundFloor1';
    }
    else if(floor==2)
    {
        
        let a=document.getElementById('lift');
        a.className='groundFloor2';
    }
    else if(floor==3){
        let a=document.getElementById('lift');
        a.className='groundFloor3';
    }
    else if(floor==4){
        let a=document.getElementById('lift');
        a.className='groundFloor4';
    }
    else if(floor==5){
        let a=document.getElementById('lift');
        a.className='groundFloor5';
    }
    console.log(floorArray)

        return floor=0;
}

   function FirstFloor(floorValue){
    floorArray.push(floorValue)
    if(floor==0){
        let a=document.getElementById('lift');
        a.className='firstFloor';
    }
    else if(floor==2){
        let a=document.getElementById('lift');
        a.className='firstFloor2';
    }
    else if(floor==3){
        let a=document.getElementById('lift');
        a.className='firstFloor3';
    }
    else if(floor==4){
        let a=document.getElementById('lift');
        a.className='firstFloor4';
    }
    else if(floor==5){
        let a=document.getElementById('lift');
        a.className='firstFloor5';
    }
        floor=1;
        return floor;
}

function SecondFloor(floorValue){
    floorArray.push(floorValue)
    if(floor==0){
        let a=document.getElementById('lift');
        a.className='secondFloor';
    }
    else if(floor==1){
        let a=document.getElementById('lift');
        a.className='secondFloor1';
    }
    else if(floor==3){
        let a=document.getElementById('lift');
        a.className='secondFloor3';
    }
    else if(floor==4){
        let a=document.getElementById('lift');
        a.className='secondFloor4';
    }
    else if(floor==5){
        let a=document.getElementById('lift');
        a.className='secondFloor5';
    }
    return floor=2;        
}

function ThirdFloor(floorValue){
    floorArray.push(floorValue)

    if(floor==0){
        let a=document.getElementById('lift');
        a.className='thirdFloor';
    }
    else if(floor==1){
        let a=document.getElementById('lift');
        a.className='thirdFloor1';
    }
    else if(floor==2){
        let a=document.getElementById('lift');
        a.className='thirdFloor2';
    }
    else if(floor==4){
        let a=document.getElementById('lift');
        a.className='thirdFloor4';
    }
    else if(floor==5){
        let a=document.getElementById('lift');
        a.className='thirdFloor5';
    }

    return floor=3;        
}

function FourthFloor(floorValue){
    floorArray.push(floorValue)

    if(floor==0){
    let a=document.getElementById('lift');
        a.className='fourhtFloor';
    }
    else if(floor==1){
        let a=document.getElementById('lift');
        a.className='fourhtFloor1';
    }
    else if(floor==2){
        let a=document.getElementById('lift');
        a.className='fourhtFloor2';
    }
    else if(floor==3){
        let a=document.getElementById('lift');
        a.className='fourhtFloor3';
    }
    else if(floor==5){
        let a=document.getElementById('lift');
        a.className='fourhtFloor5';
    }
        return floor=4;
}
function FifthFloor(floorValue){
    floorArray.push(floorValue)
    
    if(floor==0){
        let a=document.getElementById('lift');
        a.className='fifthFloor';
       
    }
    else if(floor==1){
        let a=document.getElementById('lift');
        a.className='fifthFloor1';
    }
    else if(floor==2){
        let a=document.getElementById('lift');
        a.className='fifthFloor2';
    }
    else if(floor==3){
        let a=document.getElementById('lift');
        a.className='fifthFloor3';
    }
    else if(floor==4){
        let a=document.getElementById('lift');
        a.className='fifthFloor4';
    }
    
    
    return floor=5;
}
function dis(){
    console.log(floor);

}
