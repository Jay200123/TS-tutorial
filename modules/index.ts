export type Data = {
    name: string;
    price: number;
}

type DataList = Array<Data>;
export const Infodata: DataList = [];

export const addData = (info: Data) => {
    return Infodata.push(info);
}


export const findOneData = (name: string) => {
    return Infodata.find((d) => d.name === name);
}

export const findData = (name: string) => {
    return Infodata.filter((d) => name.includes(d.name));
}
