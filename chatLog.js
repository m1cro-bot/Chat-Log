const chatLog = (value) => {
    let logUser = []
    let logChat = []
    let user = {}
    value.forEach((item) => {
        let data = item.split(" ")
        if(item.startsWith("Enter")){ 
            if(user[data[1]]) {
                user[data[1]] = data[2]
            } else {
                user[data[1]] = data[2]
            }
            logUser.push(`${data[1]} came in`)
        } else if(item.startsWith("Leave")){
            logUser.push(`${data[1]} hash left`)
        } else if(item.startsWith("Change")){
            user[data[1]] = data[2]
        }
    });
    logUser.forEach(beta => {
        let data = beta.split(" ")
        data[0] = user[data[0]]
        logChat.push(data.join(" "))
    })
    console.log(logChat); //do it print line for check output
    return logChat
}

chatLog(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"])