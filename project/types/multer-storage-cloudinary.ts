declare module 'multer-storage-cloudinary' {
    import { v2 as cloudinary } from 'cloudinary';
    import { Request } from 'express';
    import { StorageEngine } from 'multer';

    interface CloudinaryStorageOptions {
        cloudinary: typeof cloudinary;
        params?: {
            folder?: string;
            format?: string;
            public_id?: (req: Request, file: Express.Multer.File) => string;
            [key: string]: any;
        };
    }

    class CloudinaryStorage implements StorageEngine {
        constructor(options: CloudinaryStorageOptions);
        _handleFile(req: Request, file: Express.Multer.File, cb: (error: any, info?: any) => void): void;
        _removeFile(req: Request, file: Express.Multer.File, cb: (error: any) => void): void;
    }

    export { CloudinaryStorage };
}