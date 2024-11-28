const d = document.querySelectorAll('.game div');
[c1,c2,c3,c4,c5,c6,c7,c8,c9] =[...d];
let go = 0;
var total = 0;
    var cp = "X";
    const div = document.querySelectorAll('.game div');
    var db = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let index = 0;
    db.length = 9;
    var gov = 0;
    const a1 =document.querySelectorAll('audio')[0];
    const a3 =document.querySelectorAll('audio')[1];
    const a4 = document.querySelectorAll('audio')[2];
    for (let i in div) {
        div[i].onclick = () => {
            a1.play();
            if (db[i] === 0 && gov === 0) {
                if (cp === "X") {
                    div[i].innerHTML = "O";
                    div[i].style.color="black";
                    cp = "O";
                }
                else {
                    div[i].innerHTML = "X";
                    div[i].style.color="green";
                    cp = "X";
                }
                gov = checkWin(cp);
            }
            db[i]++;
        }
    }
function checkWin(cp)
{
    if(c1.innerHTML === cp && c2.innerHTML === cp && c3.innerHTML === cp)
    {
        setRow(cp);
    }
    else if(c4.innerHTML === cp && c5.innerHTML === cp && c6.innerHTML === cp)
        {
            setRow(cp)
        }
    else if(c7.innerHTML === cp && c8.innerHTML === cp && c9.innerHTML === cp)
        {
            setRow(cp)
        }
    else if(c1.innerHTML === cp && c4.innerHTML === cp && c7.innerHTML === cp)
        {
            setRow(cp)
        }
    else if(c2.innerHTML === cp && c5.innerHTML === cp && c8.innerHTML === cp)
        {
            setRow(cp)
       }
    else if(c3.innerHTML === cp && c6.innerHTML === cp && c9.innerHTML === cp)
        {
            setRow(cp)
        }
    else if(c3.innerHTML === cp && c5.innerHTML === cp && c7.innerHTML === cp)
    {
              setRow(cp)
    }
    else if(c1.innerHTML === cp && c5.innerHTML === cp && c9.innerHTML === cp)
        {
            setRow(cp)
        }
    else{
        var v = 0;
        for(let j of d)
        {
            if(j.innerHTML!=='X' && j.innerHTML!=='O')
                v++;
        }
        if(v===0)
        {
            v=0;
            setRow(0,1);
        }
    }
        return go;
}
function resetGame()
{
    for(let i of d)
        i.innerHTML = "";
    go=0;
    gov=0;
    db=[0,0,0,0,0,0,0,0,0]      
}
function setRow(cp,v=0)
{
    total++;
    if(v===0)
    {
        a3.play();
        alert(cp+ " is wins");   
    }
    else
    {
        a4.play();
        alert("Draw..");
    }
    go=1;
    const table = document.querySelector('table');
    const newRow = table.insertRow();
    let app;
    if(total===1)
        app=' game';
    else
        app=' games';
    document.querySelectorAll('caption')[0].innerHTML ="Results For: "+total+app;
    let cells=[];
    if(cp==="X")
    {
        cells=[1,0,0];
    }
    else if(cp==="O")
    {
        cells=[0,1,0]
    }
    else{
        cells=[0,0,1];
    }
    cells.forEach(cellData => {
      const cell = newRow.insertCell();
      cell.textContent = cellData;
    });
    
}
function resetTable() {
    const table = document.querySelectorAll('table')[0];
    document.querySelectorAll('caption')[0].innerHTML ="Results For:";
    while (table.rows.length > 1) {
        table.deleteRow(1);
  }
}