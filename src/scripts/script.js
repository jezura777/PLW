
var positions_of_animation = []//elements
for (let i = 0, max = positions_of_animation.length; i < max; i++) {
    console.log(positions_of_animation[i] + ":" + i)
    positions_of_animation[i] = (document.getElementById(positions_of_animation[i]).getBoundingClientRect().top + window.pageYOffset) - document.documentElement.clientHeight
}


function animate_element(offset, low2, high2, min_number, max_number, id_of_element_animation) {
    position_of_element = (positions_of_animation[id_of_element_animation]) + (document.documentElement.clientHeight * offset)
    let animate_element_value_one = low2 + (high2 - low2) * (window.pageYOffset - position_of_element) / ((position_of_element + (document.documentElement.clientHeight)) - position_of_element)
    if (animate_element_value_one > min_number && animate_element_value_one < max_number) {
        return animate_element_value_one;
    }
    else {
        if (animate_element_value_one > min_number) {
            return max_number
        }
        else {
            return min_number
        }
    }
}
function setbetweenlimit(firstbetwwenlimit, secondbetwwenlimit, value) {
    if (firstbetwwenlimit > value) {
        return value
    }
    else if (secondbetwwenlimit < value) {
        return value + (firstbetwwenlimit - secondbetwwenlimit)
    }
    else {
        firstbetwwenlimit
    }
}

// scroll_listener scroll_listener scroll_listener scroll_listener scroll_listener scroll_listener scroll_listener scroll_listener

window.addEventListener("scroll", function () {


    //(animate_element(0.75,                                                      0,           200,       0,         200,        scroll_js,      ) * -1)
    //                 value 0-1 0=zadna zmena 1=animace zacne nahore off screen, start value, end value, min value, max value,  id of element,  ) * -1/1 invertn/not invert
    //(animate_element(offset - defalt=0,                                         start value, /speed,    min value, max value,  id of element,  ) * -1/1 invertn/not invert


});