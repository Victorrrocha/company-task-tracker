
export function getInitials(username: string) {
    const nameArr = username.split(' ');
    return (nameArr[0][0] + nameArr[nameArr.length - 1][0]).toUpperCase();
}