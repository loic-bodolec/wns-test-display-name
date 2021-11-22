const getDisplayName = (firstName: string, lastName: string, city: string = '') => {
    const mayBeCity = city || '?'
    return `[${mayBeCity}] ${firstName} ${lastName}`
}

export default getDisplayName