const par = document.getElementById("pg")
const container = document.querySelector(".container")

const generateword = (n) => {
    let text = "";
    const letter = "abcdefghijklmnopqrstuvwxyz";
    for(let i = 0; i<n;++i){
        const random = (Math.random() * 25).toFixed(0);
        text += letter[random];
     
    }
   
    return text;
};
let nofwords;
const makepara = () =>
{
nofwords = Number(par.value);
const pa = document.createElement("p");
let word ="";

for(let z=0;z<nofwords;++z){
    const ngenerateword = (Math.random() * 15).toFixed(0);
word += generateword(ngenerateword);
word += " ";  
}
pa.innerText = word;
pa.setAttribute("class","paras");
container.append(pa);
};
