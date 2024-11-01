const tokenBlackList = new Set<string>();

const blacklistToken = (token: string) => {
    return tokenBlackList.add(token);
}

export {
    tokenBlackList,
    blacklistToken
}