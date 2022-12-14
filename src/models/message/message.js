import MessageDto from '../../persistence/data/dtos/messageDto.js'

const MESSAGE_KEYS = 2

const validateMessage = (message) => {
    let keys = Object.keys(message).length
    if(keys != MESSAGE_KEYS)
        throw 'Object does not have the correct amount of properties'

    if(!'author' in message || !'text' in message)
        throw 'Object does not have the correct properties'

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

    if(message.email.match(regex))
        return message
    
    return null
}

const generateMessageDto = (m) => {
    return new MessageDto(m)
}

const generateMessageDtos = (messages) => {
    return messages.map(m => { return new MessageDto(m)})
}

const helpers = {
    validateMessage,
    generateMessageDto,
    generateMessageDtos
}

export default helpers