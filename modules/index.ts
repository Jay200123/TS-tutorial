export type Data = {
    name: string;
    price: number;
}

type DataList = Array<Data>;
export const Infodata: DataList = [];

export const addData = (info: Data): void => {
    Infodata.push(info);
}


export const findOneData = (name: string): Data => {
    return Infodata.find((d) => d.name === name);
}

export const findData = (name: string): Data[] => {
    return Infodata.filter((d) => name.includes(d.name));
}
