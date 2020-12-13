export interface Logbook {
    ID: number,
    Timestamp: string,
    LogbookCategory: string,
    ToBeConfirmed:boolean,
    AffectedDevices: string,
    User: UserDTO,
    ObjectType: string,
}

export interface UserDTO{
Id: number,
LdapObjectGuid: string,
Firstname: string,
Middlename: string,
Lastname: string,
}
