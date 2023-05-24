let time={
    hour:02,
    min:30,
    sec:15,
    ampm:"PM"
};
var ampmf=`${time.hour}:${time.min}:${time.sec} ${time.ampm}`;
console.log("The time in AM/PM format is "+ampmf);
if (time.ampm=="PM" && time.hour<12)
{
     time.hour+=12;
}
if (time.hour==12 && time.ampm=="AM")
{
    time.hour="00";
}
var ampmt=`${time.hour}:${time.min}:${time.sec}`;
console.log("The time in 24-hour format is "+ampmt);

