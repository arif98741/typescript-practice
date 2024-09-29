export class Demo {
    private readonly name: string
    private address: string;
    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    showName() {
        return this.name;
    }

    showAddress() {
        return this.address;
    }
}
