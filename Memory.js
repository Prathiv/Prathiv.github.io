//External JS file for Memory.html
var imageIds= ["img0","img1","img2","img3","img4","img5","img6","img7",
                "img8","img9","img10","img11","img12","img13","img14","img15"],
    
    imagesArray=["bulbasaur.jpg","bulbasaur.jpg","pikachu.jpg","pikachu.jpg","charmander.jpg","charmander.jpg","squirtle.jpg","squirtle.jpg","mewtwo.jpg","mewtwo.jpg","charizard.jpg","charizard.jpg","meowth.jpg","meowth.jpg","blastoise.jpg","blastoise.jpg"]

    exposed=[false,false,false,false,false,false,false,false,
             false,false,false,false,false,false,false,false],
    fullyexposed=[true,true,true,true,true,true,true,true,
                  true,true,true,true,true,true,true,true],
    turns=0,
    stateOfSlots=0; //If one card has been turned,or two ,or none

var idxOfImg1,idxOfImg2,idxOfImgClicked;

//function to shuffle the memory slots-----------------------------------------------

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

//function that starts a new game----------------------------------------------------

function newGame()
{
    shuffle(imagesArray);
    for(var i=0;i<16;i++)
        {
            document.getElementById(imageIds[i]).src=imagesArray[i];
        }
}

//function to compare given arrays till a particular index-----------------------------
function compareArrays(arr1,arr2,n)
{
    if (n!=0)
    {
        if (arr1[n]===arr2[n] && compareArrays(arr1,arr2,n-1))
        {
            return true;
        }
    }
    else if(arr1[0]===arr2[0])
    {
        return true;
    }
    else
    {
        return false;
    }
}

//function that compares where an image has been clicked-------------------------------

function slotClicked(idxOfImgClicked)
{
    //function that checks if the game is over--------------------------
    
    function gameOver()
    {
        if (compareArrays(exposed,fullyexposed,15))
        {
            console.log(exposed);
            document.getElementById("slots").style.display="none";
            document.getElementById("turns").innerHTML="GAME OVER"+"<br>"+"Turns ="+turns;
            document.getElementById("reset").innerHTML="New Game";
        }
    }
    
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