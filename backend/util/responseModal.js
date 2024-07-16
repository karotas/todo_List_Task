export class successRes {
    constructor(message){
        this.status="success"
        this.error=false,
        this.message=message

    }
}
export class errorRes {
    constructor(message){
        this.status="success"
        this.error=true
        this.message=message

    }
}