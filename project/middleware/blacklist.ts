import Blacklist from '../route/authentication/model';

const generateBlacklist = async (token: string) => {
    return await Blacklist.create({ token });
};

const findBlacklist = async (token: string) => {
    const data = await Blacklist.findOne({ token });
    return !!data;
}

async function cleanBlacklistToken() {

    const expiryDate = new Date(Date.now() - 1 * 60 * 60 * 1000);
    await Blacklist.deleteMany({ createdAt: { $lt: expiryDate } });
}

setInterval(cleanBlacklistToken, 3600000);

export {
    generateBlacklist,
    findBlacklist
}