//External JS file for Memory.html
var imageIds= ["img0","img1","img2","img3","img4","img5","img6","img7",
                "img8","img9","img10","img11","img12","img13","img14","img15"],
    
    imagesArray=["clip0.jpg","clip0.jpg","clip1.jpg","clip1.jpg","clip2.jpg","clip2.jpg","clip3.jpg","clip3.jpg",
                "clip4.jpg","clip4.jpg","clip5.jpg","clip5.jpg","clip6.jpg","clip6.jpg","clip7.jpg","clip7.jpg"]

    exposed=[false,false,false,false,false,false,false,false,
             false,false,false,false,false,false,false,false],
    turns=0,
    stateOfSlots=0; //If one card has been turned,or two ,or none

var idxOfImg1,idxOfImg2,idxOfImgClicked;

function shuffle(array)
{
    for(var i=0,temp,j;i<array.length;i++)
    {
        j=Math.floor(Math.random()*16)
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
}

function newGame()
{
    shuffle(imagesArray);
    for(var i=0;i<16;i++)
        {
            document.getElementById(imageIds[i]).src=imagesArray[i];
        }
}

function gameOver()
{
    console.log(exposed);
    if(exposed==[true,true,true,true,true,true,true,true,
             true,true,true,true,true,true,true,true])
    {
        document.getElementById("slots").style.display="none";
        document.getElementById("turns").innerHTML="GAME OVER"+"<br>"+"Turns ="+turns;
        document.getElementById("reset").value="New Game";
    }
}


function slotClicked(idxOfImgClicked)
{
    
    idxOfImgClicked=parseInt(idxOfImgClicked);
    
    if(exposed[idxOfImgClicked] != true)
        if(stateOfSlots==0)
            {
                stateOfSlots=1;
                idxOfImg1=idxOfImgClicked;
                exposed[idxOfImg1]=true;
                document.getElementById(imageIds[idxOfImg1]).style.display="inline-block";
                
            }
        else if(stateOfSlots==1)
            {
                stateOfSlots=2;
                turns+=1;
                idxOfImg2=idxOfImgClicked;
                exposed[idxOfImg2]=true;
                document.getElementById(imageIds[idxOfImg2]).style.display="inline-block";
                if(imagesArray[idxOfImg1]!=imagesArray[idxOfImg2])
                {
                    setTimeout(function()
                    {
                        exposed[idxOfImg1]=false;                document.getElementById(imageIds[idxOfImg1]).style.display="none";                    exposed[idxOfImg2]=false;                    document.getElementById(imageIds[idxOfImg2]).style.display="none";                    stateOfSlots=0;
                    }, 500)
                }
            }
        else
            {
                if(imagesArray[idxOfImg1]==imagesArray[idxOfImg2])
                {
                    exposed[idxOfImg1]=true;
                    document.getElementById(imageIds[idxOfImg1]).style.display="inline-block";
                    exposed[idxOfImg2]=true;
                    document.getElementById(imageIds[idxOfImg2]).style.display="inline-block";
                }
                else
                {
                    exposed[idxOfImg1]=false;
                    document.getElementById(imageIds[idxOfImg1]).style.display="none";
                    exposed[idxOfImg2]=false;
                    document.getElementById(imageIds[idxOfImg2]).style.display="none";
                }
                stateOfSlots=1;
                idxOfImg1=idxOfImgClicked;
                exposed[idxOfImg1]=true;
                document.getElementById(imageIds[idxOfImg1]).style.display="inline-block";
            }
    document.getElementById("turns").innerHTML="Turns ="+turns;
    console.log(document.getElementById("reset").value);
    function gameOver()
    {
        for(var i=0;i<16;i++)
            if (exposed[i]==true && i==15)
            {
                console.log(exposed);
                document.getElementById("slots").style.display="none";        document.getElementById("turns").innerHTML="GAME OVER"+"<br>"+"Turns ="+turns;        document.getElementById("reset").innerHTML="New Game";
            }
    }
    gameOver();
}
document.getElementById("turns").innerHTML="Turns ="+turns;
newGame();

/*----------------------------------------------------------------------*/

function reset()
{
    location.reload();
}

/*----------------------------------------------------------------------*/
/*----------------------------------------------------------------------*/