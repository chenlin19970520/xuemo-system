import axios from "axios";



const Get = (url: string) => {
    return (target: any, key: any, descriptor: PropertyDescriptor) => {
        const fn = descriptor.value;
        axios.get(url).then(res => {
            fn(res, {
                status: 200,

            })
        }).catch((res) => {
            fn(res, {
                status: 500
            })
        })
    }
}

export class Controller {
    constructor() { }
    @Get('/api/v1/v1/user')

    getList(data: any, status: any) {
        console.log(data, status)
        this.result = data;
    }

    getData() {
        return this.result;
    }
}