export interface Manager <T>{
    add(t:T)
    edit(id:number,t:T)
    find(id:number)
    delete(id:number)
}