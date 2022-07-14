export class Product {
    constructor(
        public id: number,
        public name: string,
        public price: number,
        public imgSrc: string,
        public category: string,
        public description: string,
        public isActive: boolean
    ) {}
}