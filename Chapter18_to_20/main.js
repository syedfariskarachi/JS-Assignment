let courses=[];
for (let i = 1; i <= 5; i++) {
    let ask_course = prompt(`Enter your ${i} course `,`course${i}`)
    if(ask_course!==null){
        courses.push(ask_course)
    }
    
}
alert(`Your list is here:\n${courses}`)

for (let i = 1; i < courses.length; i++) {
    let update_list = prompt(`Update list ${i}`,`${courses[i]}`)
    if(update_list!==null){
        courses.splice(i,1,update_list)

    }    
}
alert(`Update list is here:\n${courses.join(",")}`)