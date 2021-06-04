let life = document.getElementById('life');
let enter = document.getElementById('enter');
let p = document.createElement('p');
function Baseball() {
   
    let arr =[];
    let B = 0;
    let S = 0;
    let random = (Math.floor(Math.random() * (1000 - 100)) + 100).toString();

    while(random[0]===random[1] || random[0]===random[2] || random[1] === random[2]){
       
random = (Math.floor(Math.random() * (1000 - 100)) + 100).toString();
    }

    enter.addEventListener('click', (e)=>{
        if(life.innerHTML==='1'){
            return alert('실패!!!', window.location.reload());
        }
        let input = document.getElementById('inputValue').value.toString();
        console.log(input);
        console.log(life.innerHTML);
        if(input.length > 3 || input.length <3){
            document.getElementById('inputValue').value = '';
            return alert('3자리 수를 입력해주시오.');
        }
    
        else if(input.length===3){
            document.getElementById('inputValue').value = '';

            for(let i=0; i<3; i++){
                if(random[i]===input[i]){
                    S++;
                }
                if(i===0){
                    if(random[i]===input[1] || random[i]===input[2]){
                        B++;
                    }
                }
                else if(i===1){
                    if(random[i]===input[0] || random[i]===input[2]){
                        B++;
                    }
                }
                else if(i===2){
                    if(random[i]===input[0] || random[i]===input[1]){
                        B++;
                    }
                }
            }
          
            if(S===3){
                S=0;
                B=0;
                return alert('정답입니다', window.location.reload());
            }

            life.innerHTML -= 1;
             
            let test = document.createElement('div');
            let chat = document.createElement('div');
            let result = document.querySelector('#result');
            
            test.classList.add('display');
            test.textContent = `입력 값 : ${input} ---- 스트라이크:${S}개, 볼:${B}개입니다.`;
            result.appendChild(test);
            S=0;
            B=0;
        }
        document.getElementById('inputValue').value = '';
    })
}
Baseball();