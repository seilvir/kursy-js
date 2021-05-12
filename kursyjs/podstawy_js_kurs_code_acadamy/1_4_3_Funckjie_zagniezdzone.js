var startowaliczba = 1;
var limit =10;
function odlicznaie(x)
{
    if (x == 0)
console.log ("Start !!!")
if (x<1)
    {
        return;
    }
console.log("Start za ",x)
odlicznaie(x-1);

}
var x=odlicznaie(10);
