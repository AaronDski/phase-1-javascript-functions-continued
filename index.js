// Your code here
function saturdayFun(activity = "roller-skate")
    {
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(work = 'go to the office'){
    return `This Monday, I will ${work}.`
}

function wrapAdjective(right = '*'){
    return function(time = "special"){
        return `You are ${right}${time}${right}!`
    }
}